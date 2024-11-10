import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConsecutivoService } from '../../services/consecutivo.service';

@Component({
  selector: 'app-crear-consecutivo-modal',
  templateUrl: './crear-consecutivo-modal.component.html',
  styleUrls: ['./crear-consecutivo-modal.component.scss']
})
export class CrearConsecutivoModalComponent implements OnInit {
  formGroup: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private consecutivoService: ConsecutivoService
  ) { }

  ngOnInit(): void {
    this.generarFormulario();
  }

  generarFormulario(){
    this.formGroup = this.fb.group({
      Prefijo: ['', Validators.required],
      Descripcion: ['', Validators.required],
      ValorActual : ['', Validators.required],
      ValorInicial: ['', Validators.required],
      ValorFinal : ['', Validators.required],
      ref1: [''],
      ref2: [''],
      ref3: [''],
      ref4: [''],
      ref5: [''],
    })
  }


  onClose(){
    this.matDialog.closeAll();
  }

  submit(){
    this.consecutivoService.createConsecutivo(this.formGroup.value)
      .subscribe((data:any) => { 
        this.matDialog.closeAll();
      }
      , err => { console.log(err) });
  }

}
