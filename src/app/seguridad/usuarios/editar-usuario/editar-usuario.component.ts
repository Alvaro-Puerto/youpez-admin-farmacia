import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from 'carbon-components-angular';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuariosService,
    private matDialog: MatDialog,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(8)]],
      password_confirmation: ['', [Validators.required, Validators.min(8)]],
    });
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();

    if (this.formGroup.invalid) {
      return;
    }
    this.usuarioService.crearUsuario(this.formGroup.value).subscribe(
      (response: any) => {
        this.matDialog.closeAll();
        this.notificationService.showToast({
          type: "info",
          title: "Creacion de usuario",
          subtitle: "Usuario creado correctamente",
          duration: 3000,
        })
      }, (error) => {
        this.notificationService.showToast({
          type: "error",
          title: "Hubo un error al procesar tu solicitud",
          subtitle: error.error.message,
          duration: 3000,
        })
      }
    );
  }

  onClose() {
    this.matDialog.closeAll();
  }
}
