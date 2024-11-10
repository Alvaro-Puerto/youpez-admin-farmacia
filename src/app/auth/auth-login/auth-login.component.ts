import {Component, OnInit} from '@angular/core'
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators
} from "@angular/forms"
import {Router} from '@angular/router'

import {AuthService} from "../services/auth.service"
import {NotificationService} from "carbon-components-angular"

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  public formGroup: FormGroup

  constructor(protected formBuilder: FormBuilder,
              private router: Router,
              private notificationService: NotificationService,
              private authService: AuthService
            ) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    }, {updateOn: 'blur'})
  }

  onSubmit() {
    this.formGroup.markAllAsTouched()

    if (this.formGroup.invalid) {
      return
    }

    const data = {
      email: this.formGroup.get('email').value,
      password: this.formGroup.get('password').value
    }

    this.authService.iniciarSesion(data).subscribe(
      (response) => {
        this.router.navigate(['/app/ventas/ventas'])
        localStorage.setItem('token', response['token'])
      },
      (error) => {
        this.notificationService.showToast({
          type: "error",
          title: "Error",
          subtitle:  error.error.message,
          target: "#notificationHolder",
          message: error.error.message,
          duration: 2000,
        })
      }
    )
    
  }

  isValid(name) {
    const instance = this.formGroup.get(name)
    return instance.invalid && (instance.dirty || instance.touched)
  }
}
