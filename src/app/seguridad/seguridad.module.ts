import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolComponent } from './roles/rol/rol.component';
import { PermisoComponent } from './permiso/permiso.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { AgregarRolComponent } from './roles/agregar-rol/agregar-rol.component';
import { EditarRolComponent } from './roles/editar-rol/editar-rol.component';
import { AgregarUsuarioComponent } from './usuarios/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { RevisarUsuarioComponent } from './usuarios/revisar-usuario/revisar-usuario.component';
import { CambiarCredencialesComponent } from './usuarios/cambiar-credenciales/cambiar-credenciales.component';
import { SeguridadRoutingModule } from './seguridad-routing';
import { SharedModule } from '../shared/shared.module';
import { ConfigurarRolesComponent } from './roles/configurar-roles/configurar-roles.component';
import { FormRefComponent } from '../shared/form-ref/form-ref.component';
import { RestauracionDbComponent } from './restauracion-db/restauracion-db.component';


@NgModule({
  declarations: [
    RolComponent, 
    PermisoComponent, 
    UsuarioComponent, 
    AgregarRolComponent, 
    EditarRolComponent, 
    AgregarUsuarioComponent,
    EditarUsuarioComponent, 
    RevisarUsuarioComponent, 
    CambiarCredencialesComponent, ConfigurarRolesComponent, RestauracionDbComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { } 
