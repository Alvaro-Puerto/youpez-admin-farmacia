import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { InfiniteRowModelModule } from '@ag-grid-community/infinite-row-model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Grid from 'tui-grid';

import { clientesColumnas } from 'src/app/seguridad/seguridad-datatable';
import { ClienteService } from 'src/app/clientes/services/cliente.service';
import { AgregarClienteComponent } from 'src/app/clientes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from 'src/app/clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from 'src/app/clientes/eliminar-cliente/eliminar-cliente.component';
import { FacturacionService } from '../../services/facturacion/facturacion.service';
import { FormControl } from '@angular/forms';
import { PermisosService } from 'src/app/seguridad/services/permisos.service';

const formatDateToYYYYMMDD = (dateString: string): string => {
  const date = new Date(dateString);

  // Obtener componentes de la fecha
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
  const day = String(date.getDate()).padStart(2, '0');

  // Convertir a yyyy-mm-dd
  return `${year}-${month}-${day}`;
};

@Component({
  selector: 'app-listar-venta',
  templateUrl: './listar-venta.component.html',
  styleUrls: ['./listar-venta.component.scss']
})
export class ListarVentaComponent implements OnInit {
  public modules = [InfiniteRowModelModule, ClientSideRowModelModule]
  clienteSeleccionado:any = null;
  gridOptions: any 
  grid: Grid;
  totalVentas = 0;
  indicadorVenta: any = null;
  fechaInicio= new FormControl([new Date(), new Date()]);
  indicadorVendedor: any;
  //fechaFin= new FormControl(new Date());

  constructor(
    private clienteService: ClienteService,
    private ventaServices: FacturacionService,
    private matDialog: MatDialog,
    private router: Router,
    private permisoServide: PermisosService
  ) { }

  ngOnInit(): void {
    const nueva = this.fechaInicio.value.map(formatDateToYYYYMMDD);
    this.crearGrid();
    this.obtenerVentas(nueva[0], nueva[1]);
    this.obtenerIndicadorVenta(nueva[0], nueva[1]);
    this.obtenerPermisos();
  }

  crear: boolean = true
  editar: boolean = true
  eliminar: boolean = true

  obtenerPermisos() { 
    this.permisoServide.obtenerUsuarioPermisos()
      .subscribe((res: any) => {
       
        this.permisoServide.permisosAsignados = res.permissions.map((permiso) => {
          return permiso.name;
        });
      
        this.permisoServide.permisosAsignados.findIndex(permiso =>  permiso == 'crear ventas') === -1 ? this.crear = true : this.crear = false;
        this.permisoServide.permisosAsignados.findIndex(permiso =>  permiso == 'editar bodegas') === -1 ? this.editar = true : this.editar = false;
        this.permisoServide.permisosAsignados.findIndex(permiso =>  permiso == 'eliminar bodegas') === -1 ? this.eliminar = true : this.eliminar = false;

      })
  }

  buscar() {
    const nueva = this.fechaInicio.value.map(formatDateToYYYYMMDD);    
    this.obtenerVentas(nueva[0], nueva[1]);
    this.obtenerIndicadorVenta(nueva[0], nueva[1]);
  }

  crearGrid() {   
    this.grid = new Grid({
      el: document.getElementById('grid-ventas-listar'),
      data: [],
      scrollX: false,
      scrollY: false,
      header: {
        align: 'left',
      },
      bodyHeight: 800,
      rowHeaders: ['checkbox'],
      columns: [
        {
          header: 'ID',
          name: 'id',
          width: 50,
          filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
        },
        {
          header: 'Nombre cliente',
          name: 'nombres',
          width: 200,
          filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
          
        },
        {
          header: 'Apellido cliente',
          name: 'apellidos',
          width: 200,
          filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
        },
        {
          header: 'Usuario',
          name: 'usuario',
          width: 200,
          filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
        },
        {
          header: 'Subtotal',
          name: 'subtotal',
          width: 100,
          filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
        },
        {
          header: 'Iva',
          name: 'iva',
          width: 100,
          filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
        },
        {
          header: 'Total',
          name: 'total',
          width: 100,
          filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
        },
        {
          header: 'Fecha creación',
          name: 'created_at',
          width: 200
        }
      ]
    });
    this.grid.on('check', (ev: any) => {
      this.clienteSeleccionado = this.grid.getRow(ev.rowKey);
      this.clienteService.clienteSeleccionado = this.clienteSeleccionado;
    })
    this.grid.on('uncheck', (ev: any) => {
      this.clienteSeleccionado = null;
    })
  }

  Imprimir() {
    //this.router.navigate(['/app/ventas/ventas/imprimir']);
    window.open('/venta/factura/imprimir/' + this.clienteSeleccionado?.id, '_blank');
  }

  obtenerIndicadorVenta(fecha_inicio, fecha_fin) {
    this.ventaServices.indicadorVenta(fecha_inicio, fecha_fin).subscribe(
      (data:any) => {
        this.indicadorVenta = data;
      },
      (error) => {
        console.error(error);
      }
    );

    this.ventaServices.indicadorVendedor(fecha_inicio, fecha_fin).subscribe(
      (data:any) => {
        this.indicadorVendedor = data;
      },
      (error) => {
        console.error(error);
      }
    );
  
  }

  obtenerVentas(fecha_inicio, fecha_fin) {
    this.ventaServices.obtenerVentas(fecha_inicio, fecha_fin).subscribe(
      (data:any) => {

        this.totalVentas = data.reduce((acc, venta) => {
          return acc + venta.total;
        }, 0);
        this.grid.resetData(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  configurarRol() {
    this.router.navigate(['/app/seguridad/rol/' + this.clienteSeleccionado?.id]);
  }

  crearRol() {
    this.matDialog.open(
      AgregarClienteComponent,
      {
        width: '50%',
        height: '60%',
        data: {}
      }
    ).afterClosed().subscribe(evt => {
     
    })
  }

  editarRol() {
    //this.data = this.rolSeleccionado;
    this.matDialog.open(
      EditarClienteComponent,
      {
        width: '50%',
        height: '55%',
        data: {}
      }
    ).afterClosed().subscribe(evt => {
      
    })
  }

  eliminarRol() {
    this.matDialog.open(
      EliminarClienteComponent,
      {
        width: '50%',
        height: '30%',
        data: {}
      }
    ).afterClosed().subscribe(evt => {
     
    })
  }

  onSelect(evt) {
    console.log(evt);
  }

  crearNuevaVenta() {
    this.router.navigate(['/app/ventas/ventas/nueva']);
  }

  
  excel() {
    this.grid.export('xlsx');
  }
} 
