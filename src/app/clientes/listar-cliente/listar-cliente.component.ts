import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { InfiniteRowModelModule } from '@ag-grid-community/infinite-row-model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Grid from 'tui-grid';
import { ClienteService } from '../services/cliente.service';
import { clientesColumnas } from 'src/app/seguridad/seguridad-datatable';
import { AgregarClienteComponent } from '../agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from '../editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from '../eliminar-cliente/eliminar-cliente.component';
import { PermisosService } from 'src/app/seguridad/services/permisos.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.scss']
})
export class ListarClienteComponent implements OnInit {
  
  public modules = [InfiniteRowModelModule, ClientSideRowModelModule]
  clienteSeleccionado:any = null;
  gridOptions: any 
  grid: Grid;
  listarTodosClientes: Array<any> = [];

  crear: boolean = true;
  editar: boolean = true;
  eliminar: boolean = true;
  
  constructor(
    private clienteService: ClienteService,
    private matDialog: MatDialog,
    public permisoServide: PermisosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    
   
    
    this.crearGrid();
    this.obtenerClientes();
    this.obtenerPermisos();
  }


  obtenerPermisos() {
    this.permisoServide.obtenerUsuarioPermisos()
      .subscribe((res: any) => {
       
        this.permisoServide.permisosAsignados = res.permissions.map((permiso) => {
          return permiso.name;
        });
      
        this.permisoServide.permisosAsignados.findIndex(permiso =>  permiso == 'crear clientes') === -1 ? this.crear = true : this.crear = false;
        this.permisoServide.permisosAsignados.findIndex(permiso =>  permiso == 'editar clientes') === -1 ? this.editar = true : this.editar = false;
        this.permisoServide.permisosAsignados.findIndex(permiso =>  permiso == 'eliminar clientes') === -1 ? this.eliminar = true : this.eliminar = false;

      })
  }



  crearGrid() {
    
    this.grid = new Grid({
      el: document.getElementById('grid-clientes'),
      data: [],
      scrollX: false,
      scrollY: false,
      header: {
        align: 'left',
      },
      bodyHeight: 800,
      rowHeaders: ['checkbox'],
      columns: clientesColumnas()
    });

    this.grid.on('check', (ev: any) => {
      this.clienteSeleccionado = this.grid.getRow(ev.rowKey);
      this.clienteService.clienteSeleccionado = this.clienteSeleccionado;
    })

    this.grid.on('uncheck', (ev: any) => {
      this.clienteSeleccionado = null;
    })
  }

  excel() {
    this.grid.export('xlsx');
  
  }

  buscar() {
    let tempo = this.listarTodosClientes;

    
  }


  reporte() {
    this.router.navigate(['/app/ventas/clientes/' + this.clienteSeleccionado?.id]);
  }

  obtenerClientes() {
    this.clienteService.getClientes().subscribe(
      (data:any) => {
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
      this.obtenerClientes();
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
      this.obtenerClientes();
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
      this.obtenerClientes();
    })
  }

  onSelect(evt) {
    console.log(evt);
  }

}
