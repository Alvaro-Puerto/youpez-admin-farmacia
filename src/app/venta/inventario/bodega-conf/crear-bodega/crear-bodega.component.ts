import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BodegaService } from 'src/app/venta/services/bodega/bodega.service';

@Component({
  selector: 'app-crear-bodega',
  templateUrl: './crear-bodega.component.html',
  styleUrls: ['./crear-bodega.component.scss']
})
export class CrearBodegaComponent implements OnInit {
  
  formGroup: FormGroup;
  constructor(
    private readonly bodegaServicio: BodegaService,
    private readonly fb: FormBuilder,
    private readonly matDialog: MatDialog   
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      ubicacion: [''],
      ref1: [''],
      ref2: [''],
      ref3: [''],
      ref4: [''],
    });
  }

  onClose() {
    this.matDialog.closeAll();
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.bodegaServicio.createBodega(this.formGroup.value).subscribe((res) => {
        this.matDialog.closeAll();
      });
    }
  }

}
