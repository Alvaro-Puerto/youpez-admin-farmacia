import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.scss']
})
export class EliminarClienteComponent implements OnInit {

  constructor(
    private readonly matDialog: MatDialog,
    private readonly clienteService: ClienteService
    
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.matDialog.closeAll();
  }

  onSubmit() {
    this.clienteService.deleteCliente(this.clienteService.clienteSeleccionado.id).subscribe(
      (response: any) => {
        this.matDialog.closeAll();
      }, (error) => {
        console.log(error);
      }
    );
  }
}
