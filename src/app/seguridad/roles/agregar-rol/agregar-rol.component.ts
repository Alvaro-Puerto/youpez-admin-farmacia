import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RolesService } from '../../services/roles.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-rol',
  templateUrl: './agregar-rol.component.html',
  styleUrls: ['./agregar-rol.component.scss']
})
export class AgregarRolComponent implements OnInit {

  formGroup: FormGroup;
  consecutivoInput = new FormControl('', [Validators.required])
  constructor(
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private rolService: RolesService,
    //private toastr: ToastrService 
  ) { }

  ngOnInit(): void {
    this.generarFormulario();
  }

  generarFormulario(){
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      guard: ['web', Validators.required],
    })
  }


  onClose(){
    this.matDialog.closeAll();
  }
  onSubmit(){ 
    const data = {
      name: this.formGroup.get('name').value,
      guard: this.formGroup.get('guard').value,
    }

    this.rolService.crearRol(data).subscribe(
      (response) => {
        this.onClose();
        //this.toastr.success('Rol creado correctamente');
      },
      (error) => {
        console.error(error);
        //this.toastr.error('Error al crear el rol');
      }
    );

    this.matDialog.closeAll();
  }

}
