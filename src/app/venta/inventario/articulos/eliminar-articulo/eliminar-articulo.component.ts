import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticuloService } from 'src/app/venta/services/inventario/articulo.service';

@Component({
  selector: 'app-eliminar-articulo',
  templateUrl: './eliminar-articulo.component.html',
  styleUrls: ['./eliminar-articulo.component.scss']
})
export class EliminarArticuloComponent implements OnInit {
  constructor(
    private readonly matDialog: MatDialog,
    private readonly articuloService: ArticuloService
    
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.matDialog.closeAll();
  }

  onSubmit() {
    this.articuloService.deleteArticulo(this.articuloService.articuloSeleccionado.id).subscribe(
      (response: any) => {
        this.matDialog.closeAll();
      }, (error) => {
        console.log(error);
      }
    );
  }
}
