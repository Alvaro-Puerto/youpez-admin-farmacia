import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './consecutivos/index/index.component';

const routes: Routes = [
   {
    path : 'consecutivos',
    children: [
      {
        path: '',
        component: IndexComponent,
      }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ConfiguracionesRouting { }
