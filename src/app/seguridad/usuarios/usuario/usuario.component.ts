import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Grid from 'tui-grid';
import { AgregarUsuarioComponent } from '../agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';
import { columnaUsuarios } from '../../seguridad-datatable';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  public searchModel
  public size = ''
  public offset = {x: 0, y: 0}
  public batchText = 'Fila selecionada'
  rolSeleccionado:any = null;
  gridOptions: any 
  grid: Grid;

  constructor(
    private usuarioService: UsuariosService,
    private matDialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    
    this.crearGrid();
    this.obtenerUsuarios();
  }

  crearGrid() {
    
    this.grid = new Grid({
      el: document.getElementById('grid-usuarios-rol'),
      data: [],
      scrollX: false,
      scrollY: false,
      header: {
        align: 'left',
      },
      bodyHeight: 800,
      rowHeaders: ['checkbox'],
      columns: columnaUsuarios()
    });

    this.grid.on('check', (ev: any) => {
      this.rolSeleccionado = this.grid.getRow(ev.rowKey);
    })

    this.grid.on('uncheck', (ev: any) => {
      this.rolSeleccionado = null;
    })
  }

  obtenerUsuarios() {
    this.usuarioService.obtenerUsuario().subscribe(
      (data:any) => {
       
        this.grid.resetData(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  excel() {
    this.grid.export('xlsx');
  }

  configurarRol() {
    this.router.navigate(['/app/seguridad/rol/' + this.rolSeleccionado?.id]);
  }

  crearUsuario() {
    this.matDialog.open(
      AgregarUsuarioComponent,
      {
        width: '50%',
        height: '50%',
        data: {}
      }
    ).afterClosed().subscribe(evt => {
      this.obtenerUsuarios();
    })
  }

  editarUsuario() {
    this.usuarioService.data = this.rolSeleccionado;
    this.matDialog.open(
      EditarUsuarioComponent,
      {
        width: '50%',
        height: '50%',
        data: {}
      }
    ).afterClosed().subscribe(evt => {
      this.obtenerUsuarios();
    })
  }

  eliminarRol() {
    console.log('Eliminar Rol');
  }
}
