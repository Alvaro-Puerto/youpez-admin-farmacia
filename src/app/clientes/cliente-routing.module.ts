import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';


const routes: Routes = [
  {
    path: '',
    component: ListarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
