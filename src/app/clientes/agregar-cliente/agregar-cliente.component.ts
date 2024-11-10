import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClienteService } from '../services/cliente.service';
import { min } from 'rxjs/operators';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss']
})
export class AgregarClienteComponent implements OnInit {

  formGroup: FormGroup;
  constructor(
    private readonly matDialog: MatDialog,
    private readonly fb: FormBuilder,
    private readonly clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      nombres: ['', [Validators.required, Validators.min(6)]],
      apellidos: ['', [Validators.required, Validators.min(6)]],
      email: ['', [Validators.email]],
      telefono: '',
      direccion: '',
      ref1: '',
      ref2: '',
      ref3: '',
      ref4: '',
    });
  }

  onClose() {
    this.matDialog.closeAll();
  }

  onSubmit() {
     this.formGroup.markAllAsTouched();

      if (this.formGroup.invalid) {
        return;
      }

      this.clienteService.addCliente(this.formGroup.value).subscribe(
        (response: any) => {
          this.matDialog.closeAll();
        }, (error) => {
          console.log(error);
        }
      );
  }
}
