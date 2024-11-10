import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './consecutivos/index/index.component';
import { CrearConsecutivoModalComponent } from './consecutivos/crear-consecutivo-modal/crear-consecutivo-modal.component';
import { EditarConsecutivoModalComponent } from './consecutivos/editar-consecutivo-modal/editar-consecutivo-modal.component';
import { EliminarConsecutivoModalComponent } from './consecutivos/eliminar-consecutivo-modal/eliminar-consecutivo-modal.component';
import { BuscarConsecutivoComponent } from './consecutivos/buscar-consecutivo/buscar-consecutivo.component';
import { ConfiguracionesRouting } from './configuraciones-routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [IndexComponent, CrearConsecutivoModalComponent, EditarConsecutivoModalComponent, EliminarConsecutivoModalComponent, BuscarConsecutivoComponent],
  imports: [
    CommonModule,
    SharedModule,
    ConfiguracionesRouting
  ]
})
export class ConfiguracionesModule { }
