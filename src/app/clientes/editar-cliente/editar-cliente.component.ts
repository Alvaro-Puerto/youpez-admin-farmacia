import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {
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
      nombres: [this.clienteService.clienteSeleccionado?.nombres, [Validators.required, Validators.min(6)]],
      apellidos: [this.clienteService.clienteSeleccionado?.apellidos, [Validators.required, Validators.min(6)]],
      email: [this.clienteService.clienteSeleccionado?.email, [Validators.email]],
      telefono: this.clienteService.clienteSeleccionado?.telefono,
      direccion: this.clienteService.clienteSeleccionado?.direccion,
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

      this.clienteService.updateCliente(this.formGroup.value, this.clienteService.clienteSeleccionado?.id).subscribe(
        (response: any) => {
          this.matDialog.closeAll();
        }, (error) => {
          console.log(error);
        }
      );
  }

}
