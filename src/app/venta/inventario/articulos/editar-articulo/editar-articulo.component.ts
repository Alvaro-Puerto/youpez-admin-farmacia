import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ArticuloService } from 'src/app/venta/services/inventario/articulo.service';
import { UmService } from 'src/app/venta/services/um/um.service';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.scss']
})
export class EditarArticuloComponent implements OnInit {
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

      this.articuloService.updateArticulo(formData, this.articuloService.articuloSeleccionado?.id).subscribe((res) => {
        this.matDialog.closeAll();
      }, (error) => {
        console.log(error);
      });
    
  }

  generarFormulario(){
    this.formGroup = this.fb.group({
      nombre:       [this.articuloService.articuloSeleccionado?.nombre, Validators.required],
      descripcion:  [this.articuloService.articuloSeleccionado?.descripcion, Validators.required],
      UM:           [this.articuloService.articuloSeleccionado.um_id, Validators.required],
      precio_venta: [this.articuloService.articuloSeleccionado?.precio_venta, Validators.required],
      iva:          [this.articuloService.articuloSeleccionado?.iva, Validators.required],
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
          content: um.nombre,
          selected: um.id === this.articuloService.articuloSeleccionado.um_id
        });
      });
      
      this.listarUM = tempo;      
    });
  }

  onClose(){
    this.matDialog.closeAll();
  }

  onSubmit(){
    console.log(this.formGroup.errors);
  
    this.onUpload();
  }
}
