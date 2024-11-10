import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

const routes: Routes = [
  {
    path: 'venta',
    loadChildren: () => import('./venta/venta.module').then(m => m.VentaModule)
  },
  {
    path: 'app',
    data:{
      breadcrumb: 'Home'
    },
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '/app/dashboard/default',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
