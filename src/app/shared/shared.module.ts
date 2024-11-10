import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {YoupezModule} from "../../@youpez/youpez.module";
import { LoadingComponent } from './loading/loading.component';
import { FormRefComponent } from './form-ref/form-ref.component';
import { ValoresAuditoriaComponent } from './valores-auditoria/valores-auditoria.component'

@NgModule({
  imports: [
    CommonModule,
    YoupezModule,
  ],
  declarations: [
    LoadingComponent,
    FormRefComponent,
    ValoresAuditoriaComponent
  ],
  exports: [
    YoupezModule,
    LoadingComponent,
    FormRefComponent,
    ValoresAuditoriaComponent
  ]
})
export class SharedModule {
  constructor() {

  }
}
