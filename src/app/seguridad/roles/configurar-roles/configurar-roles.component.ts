import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../services/roles.service';
import { ActivatedRoute } from '@angular/router';
import Grid from 'tui-grid';
import { permisoColumns, usuarioColumns } from '../../seguridad-datatable';

@Component({
  selector: 'app-configurar-roles',
  templateUrl: './configurar-roles.component.html',
  styleUrls: ['./configurar-roles.component.scss']
})
export class ConfigurarRolesComponent implements OnInit {
  id: any;
  rolDetalle:any;
  grid: any;
  permisosDisponibles:any[];
  gridUsuario: Grid;
  gridPermiso: Grid;
  constructor(
    private readonly rolesService: RolesService,
    private readonly route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.obtenerDatos(this.id);
    //this.obtenerUsuariosRol()
  }

  obtenerDatos(id) {
   
    this.rolesService.obtenerDetalleRol(id).subscribe(
      (response: any) => {
       
        this.rolDetalle = response?.role;

        try {
          this.gridPermiso.destroy();
        } catch(error) {

        } 
        this.crearGrid()
        this.gridPermiso.resetData([]);
        this.permisosDisponibles = response?.permissions;
        this.gridPermiso.resetData(response?.permissions);
      }
    );
  }

  obtenerUsuariosRol() {
    this.rolesService.obtenerUsuariosRol(this.id).subscribe(
      (response: any) => {
        
        try {
          this.gridUsuario.destroy();
        } catch (error) {

        }
        this.crearGridUsuario();
        this.gridUsuario.resetData(response);
      }
    );
  }

  crearGrid() {
    this.gridPermiso = new Grid({
      el: document.getElementById('grid-permisos'),
      data: [],
      scrollX: false,
      scrollY: false,
      header: {
        align: 'left',
      },
      bodyHeight: 800,
      width: 800,
      rowHeaders: ['checkbox'],
      columns: permisoColumns()
    });

    this.gridPermiso.on('check', (ev: any) => {
      const permisoSeleccionado = this.gridPermiso.getRow(ev.rowKey);

      this.rolesService.agregarPermiso(this.id, permisoSeleccionado?.permission).subscribe(
        (response: any) => {
          this.obtenerDatos(this.id);
        }
      );
    });

    
    this.gridPermiso.on('uncheck', (ev: any) => {
      const permisoSeleccionado = this.gridPermiso.getRow(ev.rowKey);
      this.rolesService.agregarPermiso(this.id, permisoSeleccionado?.permission).subscribe(
        (response: any) => {
          this.obtenerDatos(this.id);
        }
    );
    });
  }

  crearGridUsuario() {
    this.gridUsuario = new Grid({
      el: document.getElementById('grid-usuarios'),
      data: [],
      scrollX: false,
      scrollY: false,
      header: {
        align: 'left',
      },
      bodyHeight: 800,
      rowHeaders: ['checkbox'],
      columns: usuarioColumns()
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
      this.rolesService.asignarRolUsuario(this.id, id_usuario).subscribe(
        (response: any) => {
          this.obtenerUsuariosRol();
        }
      );
    }


  onToggleBottom() {}

  onToggleRightSidebar() {}
}
