import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticuloComponent } from './inventario/articulos/articulo/articulo.component';
import { BodegaComponent } from './inventario/bodega/bodega.component';
import { ListarClienteComponent } from '../clientes/listar-cliente/listar-cliente.component';
import { ListarUmComponent } from './inventario/um/listar-um/listar-um.component';
import { DetalleArticulosComponent } from './inventario/articulos/detalle-articulos/detalle-articulos.component';
import { ListarVentaComponent } from './facturacion/listar-venta/listar-venta.component';
import { CrearVentaComponent } from './facturacion/crear-venta/crear-venta.component';
import { FacturaImprimirComponent } from './factura-imprimir/factura-imprimir.component';
import { ReporteClienteDetalle1Component } from './reporte-cliente-detalle1/reporte-cliente-detalle1.component';
import { ReporteArticuloComponent } from './reporte-articulo/reporte-articulo.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'articulo',
  },
  {
    path: 'ventas',
    component: ListarVentaComponent,
  },
  {
    path: 'ventas/nueva',
    component: CrearVentaComponent
  },
  {
    path: 'articulo',
    component: ArticuloComponent,
  },
  {
    path: 'articulo/detalle/:id',
    component: DetalleArticulosComponent,
  },
  {
    path: 'bodega',
    component: BodegaComponent,
  },
  {
    path: 'clientes',
    component: ListarClienteComponent,
  },
  {
    path: 'clientes/:id',
    component: ReporteClienteDetalle1Component
  },
  {
    path: 'um',
    component: ListarUmComponent,
  },
  {
    path: 'um/:id',
    component: ReporteArticuloComponent
  },
  {
    path: 'factura/imprimir/:id',
    component: FacturaImprimirComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }
