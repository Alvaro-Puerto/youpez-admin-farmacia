import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UmService } from 'src/app/venta/services/um/um.service';

@Component({
  selector: 'app-eliminar-um',
  templateUrl: './eliminar-um.component.html',
  styleUrls: ['./eliminar-um.component.scss']
})
export class EliminarUmComponent implements OnInit {
  constructor(
    private readonly matDialog: MatDialog,
    private readonly umService: UmService
    
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.matDialog.closeAll();
  }

  onSubmit() {
    this.umService.deleteUm(this.umService.UmSeleccionado.id).subscribe(
      (response: any) => {
        this.matDialog.closeAll();
      }, (error) => {
        console.log(error);
      }
    );
  }

}
