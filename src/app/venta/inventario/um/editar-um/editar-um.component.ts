import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UmService } from 'src/app/venta/services/um/um.service';

@Component({
  selector: 'app-editar-um',
  templateUrl: './editar-um.component.html',
  styleUrls: ['./editar-um.component.scss']
})
export class EditarUmComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private readonly umService: UmService,
    private readonly fb: FormBuilder,
    private readonly matDialog: MatDialog   
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      id: [this.umService.UmSeleccionado?.id, [Validators.required]],
      nombre: [this.umService.UmSeleccionado?.nombre, [Validators.required]],
      abreviatura: [this.umService.UmSeleccionado?.abreviatura, [Validators.required]],
      descripcion: [this.umService.UmSeleccionado?.descripcion]
    });
  }

  onClose() {
    this.matDialog.closeAll();
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.umService.updateUm(this.formGroup.value).subscribe((res) => {
        this.matDialog.closeAll();
      });
    }
  }

}
