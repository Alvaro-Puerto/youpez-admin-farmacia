import { Component, OnInit } from '@angular/core';
import { PermisosService } from '../services/permisos.service';
import Grid, { RowKey } from 'tui-grid'; /* ES6 */
import { permisoColumns } from '../seguridad-datatable';
@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html',
  styleUrls: ['./permiso.component.scss']
})
export class PermisoComponent implements OnInit {
  grid: Grid
  constructor(
    private permisoService: PermisosService
  ) { }

  ngOnInit(): void {
   
  }

  crearGrid() {
    this.grid = new Grid({
      el: document.getElementById('grid-permisos'),
      data: [],
      scrollX: false,
      scrollY: false,
      header: {
        align: 'left',
      },
      bodyHeight: 800,
      rowHeaders: ['checkbox'],
      columns: permisoColumns()
    });
  }

  ngAfterViewInit() {
    //this.crearGrid();
  }
}
