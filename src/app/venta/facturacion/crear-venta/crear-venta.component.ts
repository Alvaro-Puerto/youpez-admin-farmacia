import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/clientes/services/cliente.service';
import { BodegaService } from '../../services/bodega/bodega.service';
import Grid from 'tui-grid';
import { ArticuloService } from '../../services/inventario/articulo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { timeStamp } from 'console';
import { FacturacionService } from '../../services/facturacion/facturacion.service';
import { NotificationService } from 'carbon-components-angular';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.scss']
})
export class CrearVentaComponent implements OnInit {
  desactivarBoton: boolean = true;
  grid: Grid;
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
  dialogRef!: MatDialogRef<any>;
  articulos: any;
  listarArticulos: any[];
  formGroup: FormGroup;
  clienteSeleccionado:any;
  bodegaSeleccionada:any;
  total: any = 0;
  subtotal: any = 0;
  iva: any = 0.00;
  descuento: Number = 0;

  constructor(
    private clienteService: ClienteService,
    private matDialog: MatDialog,
    private router: Router,
    private bodegaService: BodegaService,
    private readonly fb: FormBuilder,
    private readonly articuloService: ArticuloService,
    private readonly facturacionService: FacturacionService,
    private readonly notificationService: NotificationService
    
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.obtenerClientes();
    this.obtenerBodegas();
    this.crearGridFactura();
    this.obtenerArticulos();
  }
  listarClientes: any[] = [];
  listarBodegas: any[] = [];
  crearFormulario () {
    this.formGroup = this.fb.group({
      'inventario': [],
      'producto_id': [],
      'producto_nombre': [],
      'cantidad': [],
      'precio': [],
      'total': [''],
      'iva': [''],
      'subtotal': [''],
      'descuento': [''],
      'observacion': [''],
      'detalle': [''],
    })
  }

  onSelect(event: any) {
    this.articulos = event?.item;
    this.formGroup.controls['producto_id'].setValue(event?.item?.id);
    this.formGroup.controls['producto_nombre'].setValue(event?.item?.content);
    this.formGroup.controls['precio'].setValue(event?.item?.precio);
    this.formGroup.controls['iva'].setValue(event?.item?.iva);
    this.formGroup.controls['cantidad'].setValue(1);
    this.consultarInventario();
  }

  onClose() {
    this.matDialog.closeAll();
  }

  calcularSubtotal(event) {
    this.formGroup.controls['cantidad'].enable();
    this.desactivarBoton = false;
    if (this.formGroup.controls['inventario'].value <= 0) {
      this.desactivarBoton = true
      this.formGroup.controls['cantidad'].disable();
      this.notificationService.showToast({
        type: "error",
        title: "Insuficiente inventario",
        subtitle: "No existe el inventario suficiente para esta transaccion",
        target: "#notificationHolderV", 
        duration: 4000,
      })
    }

    const cantidad = this.formGroup.controls['cantidad'].value;
    const precio = this.formGroup.controls['precio'].value;
    const iva = this.formGroup.controls['iva'].value;
    const descuento = this.formGroup.controls['descuento'].value;
    const subtotal = (cantidad * precio);
    const total = (subtotal + (subtotal * 0.15) - descuento);
    this.formGroup.controls['total'].setValue(parseFloat(total.toFixed(2)));
    this.formGroup.controls['subtotal'].setValue(Number(subtotal).toFixed(2));
    this.formGroup.controls['iva'].setValue(Number((0.15) *subtotal ).toFixed(2))
    this.formGroup.controls['total'].setValue(Number(total).toFixed(2));
  }

  obtenerArticulos() {
    this.articuloService.getArticulos().subscribe((res: any) => {
      const tempo = [];
      res.forEach(element => {
        tempo.push({
          id: element.id,
          content: element.nombre,    
          precio:  element.precio_venta,   
          iva: element.iva,
        });
      });
      this.listarArticulos = tempo;
    });
  }

  reorganizarArticulos() {
    const tempo = [];
    this.listarArticulos.forEach(element => {
      tempo.push({
        id: element.id,
        content: element.nombre,    
        precio:  element.precio_venta,   
        iva: element.iva,
      });
    });
    this.listarArticulos = tempo;
  }

  calcularTotales() {
    const data = this.grid.getData();
    this.total = 0;
    this.subtotal = 0;
    this.iva = 0;
    data.forEach(x => {
      this.total += Number(x.total);
      this.subtotal += Number(x.subtotal);
      this.iva += Number( x.iva);
    })
  }

  obtenerClientes() {
    this.clienteService.getClientes().subscribe((res: any) => {
      const tempo = [];
      res.forEach(element => {
        tempo.push({
          id: element.id,
          content: element.nombres + ' ' + element.apellidos,        
        });
      });
      this.listarClientes = tempo;
    });
  }


  nuevoItem()  {

  }

  openDialog(templateRef: TemplateRef<any>): void {

    if (this.bodegaSeleccionada !== undefined) {
      this.dialogRef = this.matDialog.open(templateRef, {
        width: '1000px',
        height: '1000px',
      });
      this.dialogRef.afterClosed().subscribe(result => {
        console.log('El diálogo se ha cerrado');
      }); 
    } else {
      this.notificationService.showToast({
        type: "error",
        title: "Seleccione una bodega",
        subtitle: "Debe seleccionar una bodega para poder continuar",
        target: "#notificationHolderP", 
        duration: 4000,
      })
    }
  }

  consultarInventario() {
    
    this.bodegaService.consultarInventario(this.bodegaSeleccionada?.id, this.articulos?.id).subscribe((res: any) => {
      this.formGroup.controls['inventario'].setValue(res?.cantidad || 0);
      this.calcularSubtotal({});
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  crearGridFactura() {
    this.grid = new Grid({
      el: document.getElementById('grid-factura'),
      data: [],
      width: 900,
      bodyHeight: 900,
      scrollX: false,
      columns: [
        {
          name: 'accion',
          header: 'ACCION',
          width: 100,
        },
        {
          name: 'id',
          header: 'ID ',
          width: 50,
        },       
        {
          name: 'nombre',
          header: 'NOMBRE ARTICULO',
          width: 220,
        },
        {
          name: 'cantidad',
          header: 'CANTIDAD',
          width: 100,
          align: 'right'
        },
        {
          name: 'precio',
          header: 'PRECIO',
          width: 100,
          align: 'right'
        },
        {
          name: 'subtotal',
          header: 'SUBTOTAL',
          width: 100,
           align: 'right'
        },
        {
          name: 'iva',
          header: 'IVA',
          width: 100,
           align: 'right'
        },        
        {
          name: 'total',
          header: 'TOTAL',
          width: 100,
           align: 'right'
        }
      ]
    });

    this.grid.on('click', (ev:any) => {
      if (ev.columnName === 'accion') {
        this.grid.removeRow(ev.rowKey);
        this.calcularTotales();
      }  
    })
  }


  agregarLineas() {
    this.grid.appendRow({
      'accion': 'ELIMINAR',
      'id': this.formGroup.controls['producto_id'].value,
      'nombre': this.formGroup.controls['producto_nombre'].value,
      'cantidad': this.formGroup.controls['cantidad'].value,
      'precio': this.formGroup.controls['precio'].value,
      'iva' : this.formGroup.controls['iva'].value,
      'subtotal': this.formGroup.controls['subtotal'].value,
      'total': this.formGroup.controls['total'].value
    });

    //this.reorganizarArticulos();

    this.notificationService.showToast({
      type: "info",
      title: "Producto agregado",
      subtitle: "Producto agregado a la factura",
      target: "#notificationHolderV", 
      duration: 5000,
    });

    //this.obtenerArticulos();

    this.calcularTotales();
    this.formGroup.patchValue({
      'inventario': [],
      'producto_id': [],
      'producto_nombre': [],
      'cantidad': [],
      'precio': [],
      'total': [''],
      'iva': [''],
      'subtotal': [''],
      'descuento': [''],
      'observacion': [''],
      'detalle': [''],
    });
  }
  obtenerBodegas() {
    this.bodegaService.getBodegas().subscribe((res: any) => {
      const tempo = [];
      res.forEach(element => {
        tempo.push({
          id: element.id,
          content: element.nombre,        
        });
      });
      this.listarBodegas = tempo;
    });
  }

  seleccionarCliente($ev) {
    this.clienteSeleccionado = $ev?.item
  }

  seleccionarBodega($ev) {
    this.bodegaSeleccionada = $ev?.item
  }

  guardar() {
    const data = this.grid.getData();
    const detalle = [];
    data.forEach(x => {
      detalle.push({
        producto_id: x.id,
        cantidad: x.cantidad,
        precio: x.precio,
        iva: x.iva,
        subtotal: x.subtotal,
        total: x.total
      });
    });

    const payload = {
      cliente_id: this.clienteSeleccionado?.id,
      bodega_id: this.bodegaSeleccionada?.id,
      total: this.total,
      subtotal: this.subtotal,
      iva: this.iva,
      descuento: this.descuento,
      observacion: 'Venta de productos',
      detalle: detalle
    }

    console.log(payload);
    this.facturacionService.crearVenta(payload).subscribe((res: any) => {
      this.notificationService.showToast({
        type: "info",
        title: "Venta creada exitosamente",
        subtitle: "La venta ha sido creada exitosamente",
        target: "#notificationHolderPP", 
        duration: 2000,
      })

      window.open('/venta/factura/imprimir/' + res?.id, '_blank');
      window.location.reload();
    }, err => {
      console.log(err);

      this.notificationService.showToast({
        type: "error",
        title: "Error al crear la venta",
       // subtitle: "La venta ha sido creada exitosamente",
        target: "#notificationHolderPP", 
        duration: 2000,
      })
    });
   
  }
}
