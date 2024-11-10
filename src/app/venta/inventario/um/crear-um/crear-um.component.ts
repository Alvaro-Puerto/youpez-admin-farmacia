import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UmService } from 'src/app/venta/services/um/um.service';

@Component({
  selector: 'app-crear-um',
  templateUrl: './crear-um.component.html',
  styleUrls: ['./crear-um.component.scss']
})
export class CrearUmComponent implements OnInit {

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
      nombre: ['', [Validators.required]],
      abreviatura: ['', [Validators.required]],
      descripcion: ['']
    });
  }

  onClose() {
    this.matDialog.closeAll();
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.umService.createUm(this.formGroup.value).subscribe((res) => {
        this.matDialog.closeAll();
      });
    }
  }
}
