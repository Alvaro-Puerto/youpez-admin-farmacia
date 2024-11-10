import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ArticuloService } from 'src/app/venta/services/inventario/articulo.service';
import { UmService } from 'src/app/venta/services/um/um.service';

@Component({
  selector: 'app-nuevo-articulo-modal',
  templateUrl: './nuevo-articulo-modal.component.html',
  styleUrls: ['./nuevo-articulo-modal.component.scss']
})
export class NuevoArticuloModalComponent implements OnInit {
  listarUM : any[] = [];
  formGroup: FormGroup;

  selectedFile: File | null = null;
  filePreview: string | ArrayBuffer | null = null;

  consecutivoInput = new FormControl('', [Validators.required])
  constructor(
    private fb: FormBuilder,
    private umService: UmService,
    private matDialog: MatDialog,
    private articuloService: ArticuloService
  ) { }

  ngOnInit(): void {
    this.obtenerUm();
    this.generarFormulario();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.filePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('nombre', this.formGroup.get('nombre')?.value);
      formData.append('descripcion', this.formGroup.get('descripcion')?.value);
      formData.append('um_id', this.formGroup.get('UM')?.value?.id);
      formData.append('precio_venta', this.formGroup.get('precio_venta')?.value);
      formData.append('iva', this.formGroup.get('iva')?.value);
      formData.append('ref1', this.formGroup.get('ref1')?.value);
      formData.append('ref2', this.formGroup.get('ref2')?.value);
      formData.append('ref3', this.formGroup.get('ref3')?.value);
      formData.append('ref4', this.formGroup.get('ref4')?.value);

      formData.append('image', this.selectedFile, this.selectedFile.name);

      this.articuloService.createArticulo(this.formGroup.value).subscribe((res) => {
        console.log(res);
        this.matDialog.closeAll();
      }, (error) => {
        console.log(error);
      });
      
    }
  }

  generarFormulario(){
    this.formGroup = this.fb.group({
      nombre:       ['', Validators.required],
      descripcion:  ['', Validators.required],
      UM:           ['', Validators.required],
      precio_venta: ['', Validators.required],
      iva:          ['', Validators.required],
      image:        [''],
      ref1:         [''],
      ref2:         [''],
      ref3:         [''],
      ref4:         [''],
      ref5:         [''],
    })
  }

  obtenerUm(){
    this.umService.getUms().subscribe((res:any[]) => {
      console.log(res);
      const tempo = [];
      res.forEach(um => {
        tempo.push({
          id: um.id,
          content: um.nombre
        });
      });
      
      this.listarUM = tempo;      
    });
  }

  onClose(){
    this.matDialog.closeAll();
  }

  onSubmit(){
    if (this.formGroup.invalid) {
      return;
    }

    this.onUpload();
  }
}
