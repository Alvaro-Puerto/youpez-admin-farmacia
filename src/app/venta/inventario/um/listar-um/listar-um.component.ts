import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {UmService} from '../../../services/um/um.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Grid, { RowKey } from 'tui-grid'; /* ES6 */
import { columnasUM } from '../../articulos/articulo/datatable.articulo';
import { CrearUmComponent } from '../crear-um/crear-um.component';
import { EditarUmComponent } from '../editar-um/editar-um.component';
import { EliminarUmComponent } from '../eliminar-um/eliminar-um.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-um',
  templateUrl: './listar-um.component.html',
  styleUrls: ['./listar-um.component.scss']
})
export class ListarUmComponent implements OnInit {
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
  dialogRef!: MatDialogRef<any>;
  grid: Grid;
  UMSeleccionado: any = null;
  constructor(
    private readonly umService: UmService,
    private readonly matDialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.crearGrid();
    this.listarUm();
  }

  listarUm() {
    this.umService.getUms().subscribe((res:any) => {
      this.grid.resetData(res);
    });
  }

  crearGrid() {
    this.grid = new Grid({
      el: document.getElementById('grid-um'),
      data: [],
      scrollX: false,
      scrollY: false,
      header: {
        align: 'left',
      },
      bodyHeight: 800,
      rowHeaders: ['checkbox'],
      columns: columnasUM()
    });

    this.grid.on('check', (ev:any) => {
      const rowKey = ev.rowKey;
      this.UMSeleccionado = this.grid.getRow(rowKey);
      this.umService.UmSeleccionado = this.UMSeleccionado;
    });

    this.grid.on('uncheck', (ev:any) => {
      const rowKey = ev.rowKey;
      this.UMSeleccionado = this.grid.getRow(rowKey);
      
    });
  }

  
  excel() {
    this.grid.export('xlsx');
  }

  editarUM() {
    this.matDialog.open(EditarUmComponent, { width: '900px', height: '600px' })
    .afterClosed().subscribe((res) => {
      this.listarUm();
    });;
  }

  
  openDialog(templateRef: TemplateRef<any>): void {
      this.dialogRef = this.matDialog.open(templateRef, {
        width: '1000px',
        height: '1000px',
      });
      this.dialogRef.afterClosed().subscribe(result => {
        console.log('El diálogo se ha cerrado');
      }); 
  
  }

  reporte() {
    this.router.navigate(['/app/ventas/um/' + this.UMSeleccionado?.id]);
  }

  eliminarUM() {
    this.matDialog.open(EliminarUmComponent, { width: '900px', height: '600px' })
      .afterClosed().subscribe((res) => {
        this.listarUm();
      });
  }

  nuevoUM() {
    this.matDialog.open(CrearUmComponent, { width: '900px', height: '600px' })
    .afterClosed().subscribe((res) => {
      this.listarUm();
    });
  }
}
