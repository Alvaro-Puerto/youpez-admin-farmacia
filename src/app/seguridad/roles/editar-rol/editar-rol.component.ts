import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-editar-rol',
  templateUrl: './editar-rol.component.html',
  styleUrls: ['./editar-rol.component.scss']
})
export class EditarRolComponent implements OnInit {
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
      name: [this.rolService.data?.name, Validators.required],
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

    this.rolService.actualizarRol(data, this.rolService.data?.id).subscribe(
      (response) => {
        this.onClose();
        
      },
      (error) => {
        console.error(error);
      }
    );

    this.matDialog.closeAll();
  }

}
