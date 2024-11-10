import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { InfiniteRowModelModule } from '@ag-grid-community/infinite-row-model';
import { Component, OnInit } from '@angular/core';
import {getTablaConsecutivo}  from '../datatable.consecutivo'
import { ConsecutivoService } from '../../services/consecutivo.service'
import { MatDialog } from '@angular/material/dialog';
import { CrearConsecutivoModalComponent } from '../crear-consecutivo-modal/crear-consecutivo-modal.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public modules = [InfiniteRowModelModule, ClientSideRowModelModule]
  public model = getTablaConsecutivo()
  public searchModel
  public size = ''
  public offset = {x: 0, y: 0}
  public batchText = 'Fila selecionada'
  gridOptions: any 


  constructor(
    private readonly consecutivoServices: ConsecutivoService,
    private readonly matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getConsecutivos();
  }


  getConsecutivos() {
    this.consecutivoServices.getConsecutivos()
      .subscribe((data:any) => {
        console.log(data);
        this.model.data = data;
      }, err => { console.log(err) });
  }
  nuevoConsecutivo() {  
    this.matDialog.open(CrearConsecutivoModalComponent, {  width: '900px', height: '600px' });
  }
}
