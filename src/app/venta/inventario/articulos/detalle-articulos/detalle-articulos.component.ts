import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../../../seguridad/services/roles.service';
import { ActivatedRoute } from '@angular/router';
import Grid from 'tui-grid';
import { permisoColumns, usuarioColumns,  } from 'src/app/seguridad/seguridad-datatable';
import { ArticuloService } from 'src/app/venta/services/inventario/articulo.service';
import { MatDialog } from '@angular/material/dialog';
import { EntradaArticulosBodegaComponent } from 'src/app/venta/transacciones/entrada-articulos-bodega/entrada-articulos-bodega.component';
import { BeeDirective } from '@carbon/icons-angular';


@Component({
  selector: 'app-detalle-articulos',
  templateUrl: './detalle-articulos.component.html',
  styleUrls: ['./detalle-articulos.component.scss']
})
export class DetalleArticulosComponent implements OnInit {
  id: any;
  imageDetalle:any;
  grid: Grid;
  permisosDisponibles:any[];
  gridUsuario: Grid;
  totalInventario = 0;
  constructor(
    private readonly articuloService: ArticuloService,
    private readonly route: ActivatedRoute,
    private readonly matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.obtenerDatos(this.id);
    //this.obtenerUsuariosRol()
  }

  bodegas: any[] = [];

  obtenerDatos(id) {
   
    this.articuloService.getArticulo(id).subscribe(
      (response: any) => {
        this.crearGridBodega()
        this.articuloService.articuloSeleccionado = response?.producto;
        this.imageDetalle = response?.producto;
        this.grid.resetData([]);
        this.permisosDisponibles = response?.transacciones;
        this.grid.resetData(response?.inventario);

        this.totalInventario = response?.inventario.reduce((acc, item) => {
          return acc + item.cantidad;
        }, 0);
        this.bodegas = response?.inventario;
      }
    );
  }

  obtener() {
   
  }

  crearGridBodega() {

    try {
      this.grid.destroy();
    }  catch {

    }
     
    this.grid = new Grid({
      el: document.getElementById('grid-bodega-inventario'),
      data: this.bodegas,
      scrollX: false,
      scrollY: false,
      header: {
        align: 'left',
      },
      bodyHeight: 900,
      width: 'auto',
      rowHeaders: ['checkbox'],
      columns: [
        {
          header: 'ID',
          name: 'id',
          width: 100
        },
        {
          header: 'Bodega',
          name: 'nombre',
          width: 600
        },
        {
          header: 'Cantidad',
          name: 'cantidad',
          width: 200
        },
       {
         header: 'Unidad de medida',
          name: 'unidad_medida',
       }
      ]
    });

    this.grid.on('check', (ev: any) => {
      const permisoSeleccionado = this.grid.getRow(ev.rowKey);
    });

    
    this.grid.on('uncheck', (ev: any) => {
      const permisoSeleccionado = this.grid.getRow(ev.rowKey);
    });
  }

  crearGridTransacciones() {
    this.gridUsuario = new Grid({
      el: document.getElementById('grid-transacciones'),
      data: this.permisosDisponibles,
      scrollX: false,
      scrollY: false,
      header: {
        align: 'left',
      },
      bodyHeight: 800,
      rowHeaders: ['checkbox'],
      columns: [
        {
          name: 'id',
          header: 'ID',
          width: 100,
        },
        {
          name: 'fecha',
          header: 'Fecha',
          width: 200
        },
        {
          name: 'numero',
          header: 'Número transacción',
          width: 200
        },
        {
          name: 'bodega',
          header: 'Bodega',
          width: 200
        },
        {
          name: 'cantidad',
          header: 'Cantidad',
          width: 200
        },
        {
          name: 'tipo',
          header: 'Tipo de transacción',
          width: 200
        }
        
      ]
    });

    this.gridUsuario.on('check', (ev: any) => {
      const usuarioSeleccionado = this.gridUsuario.getRow(ev.rowKey);
      this.asignarRemoverRolUsuario(usuarioSeleccionado?.id);

    });

    this.gridUsuario.on('uncheck', (ev: any) => {
      const usuarioSeleccionado = this.gridUsuario.getRow(ev.rowKey);
      this.asignarRemoverRolUsuario(usuarioSeleccionado?.id);
    });
  }

    asignarRemoverRolUsuario(id_usuario) {
     
    }

    exportarBodega() {
      this.grid.export('xlsx');
    }


    exportarTransacciones() {
      this.gridUsuario.export('xlsx');
    }

  onToggleBottom() {}

  nuevaTransaccion () {
    this.matDialog.open(
      EntradaArticulosBodegaComponent,
       {
        width: '900px',
        height: '500px'
       }
    ).afterClosed().subscribe(() => {
      this.obtenerDatos(this.id);
    })
  }

  onToggleRightSidebar() {}
}
