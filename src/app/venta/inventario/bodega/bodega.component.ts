import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BodegaService } from '../../services/bodega/bodega.service';
import Grid from 'tui-grid';
import { columnaBodega } from '../articulos/articulo/datatable.articulo';
import { CrearBodegaComponent } from '../bodega-conf/crear-bodega/crear-bodega.component';
import { EditarBodegaComponent } from '../bodega-conf/editar-bodega/editar-bodega.component';
import { EliminarBodegaComponent } from '../bodega-conf/eliminar-bodega/eliminar-bodega.component';
import { PermisosService } from 'src/app/seguridad/services/permisos.service';
@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.scss']
})
export class BodegaComponent implements OnInit {

  BodegaSeleccionado: any;
  grid: Grid;

  constructor(
    private readonly matDialog: MatDialog,
    private readonly bodegaService: BodegaService,
    private readonly permisoServide: PermisosService	
    
  ) { }

  ngOnInit(): void {
    this.createGrid();
    this.listarBodegas();
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
      
        this.permisoServide.permisosAsignados.findIndex(permiso =>  permiso == 'crear bodegas') === -1 ? this.crear = true : this.crear = false;
        this.permisoServide.permisosAsignados.findIndex(permiso =>  permiso == 'editar bodegas') === -1 ? this.editar = true : this.editar = false;
        this.permisoServide.permisosAsignados.findIndex(permiso =>  permiso == 'eliminar bodegas') === -1 ? this.eliminar = true : this.eliminar = false;

      })
  }

  listarBodegas() {
    this.bodegaService.getBodegas().subscribe((res: any) => {
      this.grid.resetData(res);
    });
  }

  createGrid() {
    this.grid = new Grid({
      el: document.getElementById('grid-bodega'),
      data: [],
      columns: columnaBodega(),
      scrollX: true,
      scrollY: true,
      header: {
        align: 'left',
      },
      bodyHeight: 800,
      rowHeaders: ['checkbox'],
    });
    
    this.grid.on('check', (ev:any) => {
      this.BodegaSeleccionado = this.grid.getRow(ev.rowKey);

      this.bodegaService.bodegaSeleccionado = this.BodegaSeleccionado;
    })

    this.grid.on('uncheck', (ev:any) => {
      this.BodegaSeleccionado = null;
    });
  }

  nuevoBodega() {
    this.matDialog.open(CrearBodegaComponent, {
      width: '800px',
      height: '500px',

    }).afterClosed().subscribe(() => {
      this.listarBodegas();
    });
  }

  editarBodega() {
    this.matDialog.open(EditarBodegaComponent, {
      width: '800px',
      height: '500px',
    }).afterClosed().subscribe(() => {
      this.listarBodegas();
    });;
  }

  eliminarBodega() {
    this.matDialog.open(EliminarBodegaComponent, {
      width: '700px',
      height: '400px',
    }).afterClosed().subscribe(() => {
      this.listarBodegas();
    });
  }

  excel() {
    this.grid.export('xlsx');
  }
}
