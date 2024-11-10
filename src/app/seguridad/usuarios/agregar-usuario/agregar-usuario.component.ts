import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { MatDialog } from '@angular/material/dialog';
import {NotificationService} from "carbon-components-angular"
import { error } from 'console';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.scss']
})
export class AgregarUsuarioComponent implements OnInit {
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
      identificacion: ['', [Validators.required, Validators.minLength(14),]],
    });
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();

    if (this.formGroup.invalid) {
      this.notificationService.showToast({
        type: "error",
        title: "Formulario inválido",
        subtitle: "Por favor, complete los campos requeridos",
        duration: 3000,
      })
      return;
    }

    if (!this.validarIdentidad(this.formGroup.value.identificacion)) {
      console.log('entro');	
      alert('La identificación debe tener el formato 000-000000-000A');
      this.notificationService.showToast({
        type: "error",
        title: "Identificación inválida",
        subtitle: "La identificación debe tener el formato 000-000000-000A",
        duration: 3000,
      })
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

  
  validarIdentidad(campo: string) { 
    console.log(campo);
    // Expresión regular para validar el formato
    const regex = /^(\d{3})-?(\d{6})-?(\d{3}[A-Z])$/;
  // Verificar si la identificaión cumple con el patrón
    return regex.test(campo);  
  }

  onClose() {
    this.matDialog.closeAll();
  }

}
