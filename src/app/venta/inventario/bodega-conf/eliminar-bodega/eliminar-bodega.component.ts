import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BodegaService } from 'src/app/venta/services/bodega/bodega.service';

@Component({
  selector: 'app-eliminar-bodega',
  templateUrl: './eliminar-bodega.component.html',
  styleUrls: ['./eliminar-bodega.component.scss']
})
export class EliminarBodegaComponent implements OnInit {
  constructor(
    private readonly matDialog: MatDialog,
    private readonly bodegaService: BodegaService
    
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.matDialog.closeAll();
  }

  onSubmit() {
    this.bodegaService.deleteBodega(this.bodegaService.bodegaSeleccionado?.id).subscribe(
      (response: any) => {
        this.matDialog.closeAll();
      }, (error) => {
        console.log(error);
      }
    );
  }

}
