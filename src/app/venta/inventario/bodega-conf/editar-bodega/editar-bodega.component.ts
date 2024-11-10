import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BodegaService } from 'src/app/venta/services/bodega/bodega.service';

@Component({
  selector: 'app-editar-bodega',
  templateUrl: './editar-bodega.component.html',
  styleUrls: ['./editar-bodega.component.scss']
})
export class EditarBodegaComponent implements OnInit {

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
      nombre: [this.bodegaServicio.bodegaSeleccionado?.nombre, [Validators.required]],
      descripcion: [this.bodegaServicio.bodegaSeleccionado?.descripcion, [Validators.required]],
      ubicacion: [this.bodegaServicio.bodegaSeleccionado?.ubicacion],
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
      this.bodegaServicio.updateBodega(this.bodegaServicio.bodegaSeleccionado?.id ,this.formGroup.value).subscribe((res) => {
        this.matDialog.closeAll();
      });
    }
  }

}
