import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../services/roles.service';
import { InfiniteRowModelModule } from '@ag-grid-community/infinite-row-model';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { getTablaRol, mapperRoles, rolColumns } from './../../seguridad-datatable';
import { MatDialog } from '@angular/material/dialog';
import { AgregarRolComponent } from '../agregar-rol/agregar-rol.component';
import { EditarRolComponent } from '../editar-rol/editar-rol.component';
import Grid, { RowKey } from 'tui-grid'; /* ES6 */
import { Router } from '@angular/router';


@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent implements OnInit {

  public modules = [InfiniteRowModelModule, ClientSideRowModelModule]
  public model = getTablaRol()
  public searchModel
  public size = ''
  public offset = {x: 0, y: 0}
  public batchText = 'Fila selecionada'
  rolSeleccionado:any = null;
  gridOptions: any 
  grid: Grid;

  constructor(
    private rolService: RolesService,
    private matDialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    
    this.crearGrid();
    this.obtenerRoles();
  }

  crearGrid() {
    
    this.grid = new Grid({
      el: document.getElementById('grid'),
      data: [],
      scrollX: false,
      scrollY: false,
      header: {
        align: 'left',
      },
      bodyHeight: 800,
      rowHeaders: ['checkbox'],
      columns: rolColumns()
    });

    this.grid.on('check', (ev: any) => {
      this.rolSeleccionado = this.grid.getRow(ev.rowKey);
    })

    this.grid.on('uncheck', (ev: any) => {
      this.rolSeleccionado = null;
    })
  }

  
  excel() {
    this.grid.export('xlsx');
  }
  
  obtenerRoles() {
    this.rolService.obtenerRoles().subscribe(
      (data:any) => {
        this.model.data = mapperRoles(data);
        this.grid.resetData(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  configurarRol() {
    this.router.navigate(['/app/seguridad/rol/' + this.rolSeleccionado?.id]);
  }

  crearRol() {
    this.matDialog.open(
      AgregarRolComponent,
      {
        width: '50%',
        height: '50%',
        data: {}
      }
    ).afterClosed().subscribe(evt => {
      this.obtenerRoles();
    })
  }

  editarRol() {
    this.rolService.data = this.rolSeleccionado;
    this.matDialog.open(
      EditarRolComponent,
      {
        width: '50%',
        height: '50%',
        data: {}
      }
    ).afterClosed().subscribe(evt => {
      this.obtenerRoles();
    })
  }

  eliminarRol() {
    console.log('Eliminar Rol');
  }

  onSelect(evt) {
    console.log(evt);
  }

} 
