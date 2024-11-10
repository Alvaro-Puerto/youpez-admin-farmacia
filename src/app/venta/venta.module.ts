import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { ArticuloComponent } from './inventario/articulos/articulo/articulo.component';
import { BodegaComponent } from './inventario/bodega/bodega.component';
import { TransaccionesComponent } from './inventario/transacciones/transacciones.component';
import { SharedModule } from '../shared/shared.module';
import { AgGridModule } from '@ag-grid-community/angular';
import { MainModule } from '../main/main.module';
import { NuevoArticuloModalComponent } from './inventario/articulos/nuevo-articulo-modal/nuevo-articulo-modal.component';
import { ListarClienteComponent } from '../clientes/listar-cliente/listar-cliente.component';
import { AgregarClienteComponent } from '../clientes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from '../clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from '../clientes/eliminar-cliente/eliminar-cliente.component';
import { FormRefComponent } from '../shared/form-ref/form-ref.component';
import { ValoresAuditoriaComponent } from '../shared/valores-auditoria/valores-auditoria.component';
import { EliminarArticuloComponent } from './inventario/articulos/eliminar-articulo/eliminar-articulo.component';
import { EditarArticuloComponent } from './inventario/articulos/editar-articulo/editar-articulo.component';
import { ListarUmComponent } from './inventario/um/listar-um/listar-um.component';
import { CrearUmComponent } from './inventario/um/crear-um/crear-um.component';
import { EditarUmComponent } from './inventario/um/editar-um/editar-um.component';
import { EliminarUmComponent } from './inventario/um/eliminar-um/eliminar-um.component';
import { CrearBodegaComponent } from './inventario/bodega-conf/crear-bodega/crear-bodega.component';
import { EditarBodegaComponent } from './inventario/bodega-conf/editar-bodega/editar-bodega.component';
import { EliminarBodegaComponent } from './inventario/bodega-conf/eliminar-bodega/eliminar-bodega.component';
import { ListarInventarioBodegaComponent } from './transacciones/listar-inventario-bodega/listar-inventario-bodega.component';
import { ListarArticulosBodegaComponent } from './transacciones/listar-articulos-bodega/listar-articulos-bodega.component';
import { EntradaArticulosBodegaComponent } from './transacciones/entrada-articulos-bodega/entrada-articulos-bodega.component';
import { ListarTransaccionesComponent } from './transacciones/listar-transacciones/listar-transacciones.component';
import { DetalleArticulosComponent } from './inventario/articulos/detalle-articulos/detalle-articulos.component';
import { ListarVentaComponent } from './facturacion/listar-venta/listar-venta.component';
import { CrearVentaComponent } from './facturacion/crear-venta/crear-venta.component';
import { FacturaComponent } from './facturacion/factura/factura.component';
import { AgregarArticuloComponent } from './facturacion/agregar-articulo/agregar-articulo.component';
import { ChartsModule } from '@youpez/index';
import { ReporteClienteComponent } from './reporte-cliente/reporte-cliente.component';
import { ReporteClienteDetalle1Component } from './reporte-cliente-detalle1/reporte-cliente-detalle1.component';
import { ReporteClienteDetalle2Component } from './reporte-cliente-detalle2/reporte-cliente-detalle2.component';
import { ReporteClienteDetalle3Component } from './reporte-cliente-detalle3/reporte-cliente-detalle3.component';
import { ReporteArticuloComponent } from './reporte-articulo/reporte-articulo.component';
import { ReporteArticuloDetalle1Component } from './reporte-articulo-detalle1/reporte-articulo-detalle1.component';
import { ReporteArticuloDetalle2Component } from './reporte-articulo-detalle2/reporte-articulo-detalle2.component';
import { ReporteTransaccionesComponent } from './reporte-transacciones/reporte-transacciones.component';
import { ReporteTransaccionesDetalle1Component } from './reporte-transacciones-detalle1/reporte-transacciones-detalle1.component';
import { ReporteTransaccionesDetalle2Component } from './reporte-transacciones-detalle2/reporte-transacciones-detalle2.component';
import { ReporteTransaccionesDetalle3Component } from './reporte-transacciones-detalle3/reporte-transacciones-detalle3.component';
import { FacturaImprimirComponent } from './factura-imprimir/factura-imprimir.component';

@NgModule({
  declarations: [
    ArticuloComponent, 
    BodegaComponent, 
    TransaccionesComponent, 
    NuevoArticuloModalComponent,
    ListarClienteComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    EliminarClienteComponent,
    EliminarArticuloComponent,
    EditarArticuloComponent,
    ListarUmComponent,
    CrearUmComponent,
    EditarUmComponent,
    EliminarUmComponent,
    CrearBodegaComponent,
    EditarBodegaComponent,
    EliminarBodegaComponent,
    ListarInventarioBodegaComponent,
    ListarArticulosBodegaComponent,
    EntradaArticulosBodegaComponent,
    ListarTransaccionesComponent,
    DetalleArticulosComponent,
    ListarVentaComponent,
    CrearVentaComponent,
    FacturaComponent,
    AgregarArticuloComponent,
    ReporteClienteComponent,
    ReporteClienteDetalle1Component,
    ReporteClienteDetalle2Component,
    ReporteClienteDetalle3Component,
    ReporteArticuloComponent,
    ReporteArticuloDetalle1Component,
    ReporteArticuloDetalle2Component,
    ReporteTransaccionesComponent,
    ReporteTransaccionesDetalle1Component,
    ReporteTransaccionesDetalle2Component,
    ReporteTransaccionesDetalle3Component,
    
  ],
  imports: [
    CommonModule, 
    SharedModule,
    ChartsModule,
    //AgGridModule.withComponents([]),
    VentaRoutingModule
  ]
})
export class VentaModule { }
