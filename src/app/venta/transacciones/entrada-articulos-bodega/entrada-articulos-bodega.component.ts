import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../../services/bodega/bodega.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ArticuloService } from '../../services/inventario/articulo.service';

@Component({
  selector: 'app-entrada-articulos-bodega',
  templateUrl: './entrada-articulos-bodega.component.html',
  styleUrls: ['./entrada-articulos-bodega.component.scss']
})
export class EntradaArticulosBodegaComponent implements OnInit {
  listarBodega: any[] =[];
  formGroup: FormGroup;
  constructor(
    private readonly bodegaService: BodegaService,
    private readonly fb: FormBuilder,
    private readonly matDialog: MatDialog,
    private readonly articuloService: ArticuloService
  ) { }

  ngOnInit(): void {
    this.obtenerBodega();
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
        'bodega_id': ['', [Validators.required]],
        'observacion': ['', ],
        'producto_id': [''],
        'cantidad': ['',],
        'precio': [''],
        'iva': [''],
        'subtotal': [''],
        'total': ['']
    });
  }

  obtenerBodega() {
    this.bodegaService.getBodegas()
      .subscribe((data:any[]) => {
        const tempo = [];

        data.forEach(x => {
          tempo.push({
            'id' : x.id,
            'content': x.nombre
          })
        })

        this.listarBodega = tempo;
      }, err => {

      });
  }

  onClose() {
    this.matDialog.closeAll();
  }

  onSubmit() {
    let value = this.formGroup.value;

    value['bodega_id'] = value.bodega_id?.id;

    value['lines'] = [
      {
        'producto_id': this.articuloService.articuloSeleccionado?.id ,
        'cantidad': value?.cantidad,
        'precio' : value?.precio,
        'subtotal': value?.subtotal,
        'iva': value?.iva,
        'total': value?.total
      }
    ];
    this.bodegaService.entradaBodega(value)
      .subscribe((dta:any) => {
        this.onClose();
      }, err => {

      });
  }
}
