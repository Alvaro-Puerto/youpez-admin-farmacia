import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolComponent } from './roles/rol/rol.component'; 
import { ConfigurarRolesComponent } from './roles/configurar-roles/configurar-roles.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { RestauracionDbComponent } from './restauracion-db/restauracion-db.component';

const routes: Routes = [
   {
    path: 'rol',
    component: RolComponent
   },
   {
    path: 'rol/:id',
    component: ConfigurarRolesComponent
   },
   {
    path: 'usuario',
    component: UsuarioComponent
   },
   {
    path: 'backups',
    component: RestauracionDbComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 
export class SeguridadRoutingModule { }
