import {Component, OnInit, ViewChild} from '@angular/core'
import {AppTasksComponent} from "../../../../../@youpez"
import { InfiniteRowModelModule } from '@ag-grid-community/infinite-row-model'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
import { ArticuloService } from '../../../services/inventario/articulo.service'
import { log } from 'console'
import { getDummyModel } from '@youpez/data/dummy';
import { MatDialog } from '@angular/material/dialog';
import { NuevoArticuloModalComponent } from '../nuevo-articulo-modal/nuevo-articulo-modal.component';
import Grid from 'tui-grid'
import { columnaBodega, columnasArticulo } from './datatable.articulo'
import { EditarArticuloComponent } from '../editar-articulo/editar-articulo.component'
import { EliminarArticuloComponent } from '../eliminar-articulo/eliminar-articulo.component'
import { Router } from '@angular/router'
import { PermisosService } from 'src/app/seguridad/services/permisos.service'

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})

export class ArticuloComponent implements OnInit {
  gridOptions: Grid; 
  articuloSeleccionado: any;
  crear: boolean = true
  editar: boolean = true
  eliminar: boolean = true

  constructor(
     private readonly articuloServices: ArticuloService,
     private readonly matDialog: MatDialog,
     private readonly router: Router,
     private permisoServide: PermisosService
  ) {
  }

  ngOnInit(): void {  
    this.crearGrid();
    this.obtenerArticulo();
    this.obtenerPermisos();
  }

  obtenerPermisos() { 
    this.permisoServide.obtenerUsuarioPermisos()
      .subscribe((res: any) => {
       
        this.permisoServide.permisosAsignados = res.permissions.map((permiso) => {
          return permiso.name;
        });
      
        this.permisoServide.permisosAsignados.findIndex(permiso =>  permiso == 'crear articulos') === -1 ? this.crear = true : this.crear = false;
        this.permisoServide.permisosAsignados.findIndex(permiso =>  permiso == 'editar articulos') === -1 ? this.editar = true : this.editar = false;
        this.permisoServide.permisosAsignados.findIndex(permiso =>  permiso == 'eliminar articulos') === -1 ? this.eliminar = true : this.eliminar = false;

      })
  }

  crearGrid() {
    this.gridOptions = new Grid({
      el: document.getElementById('grid-articulo'),
      data: [],
      columns: columnasArticulo(),
      scrollX: true,
      scrollY: true,
      header: {
        align: 'left',
      },
      bodyHeight: 800,
      rowHeaders: ['checkbox'],
    });

    this.gridOptions.on('check', (ev:any) => {
      this.articuloSeleccionado = this.gridOptions.getRow(ev.rowKey);
      
      this.articuloServices.articuloSeleccionado = this.articuloSeleccionado;
    });
  }
 
  obtenerArticulo() {
    this.articuloServices.getArticulos().subscribe((res:any) => {
      this.gridOptions.resetData(res);
    });
  }

  editarArticulo() {
    this.matDialog.open(EditarArticuloComponent, {  width: '900px', height: '600px' })
    .afterClosed().subscribe((res) => {
      this.obtenerArticulo();
    });
  }

  eliminarArticulo() {
    this.matDialog.open(EliminarArticuloComponent, {  width: '900px', height: '600px' })
    .afterClosed().subscribe((res) => {
      this.obtenerArticulo();
    });
  }
  
  nuevoArticulo() {
    this.matDialog.open(NuevoArticuloModalComponent, {  width: '900px', height: '600px' })
    .afterClosed().subscribe((res) => {
      this.obtenerArticulo();
    });
  }

  flujoInventario() {
    this.router.navigate(['/app/ventas/articulo/detalle/' + this.articuloSeleccionado.id]);
  }

  excel() {
    this.gridOptions.export('xlsx');
  }
}

