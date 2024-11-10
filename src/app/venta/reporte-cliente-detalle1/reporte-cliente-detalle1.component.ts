import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/clientes/services/cliente.service';
import Grid from 'tui-grid';

@Component({
  selector: 'app-reporte-cliente-detalle1',
  templateUrl: './reporte-cliente-detalle1.component.html',
  styleUrls: ['./reporte-cliente-detalle1.component.scss']
})
export class ReporteClienteDetalle1Component implements OnInit {
  id: string;
  total_ventas = 0;
  cliente: any;
  grid: Grid;
  facturaSeleccionada: any;
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) 
  {
   

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    
    this.obtenerDatos(this.id);
    
   }
  obtenerDatos(id) {
    this.clienteService.getCliente(id).subscribe(
      (response: any) => {
        this.crearGrid();
        this.cliente = response?.cliente;
        this.total_ventas = response?.total_ventas;
        this.grid.resetData(response?.ventas);
      }
    );
  }

  ngOnInit(): void {
  }

  exportarVentas() {
    this.grid.export('xlsx', { fileName: 'ventas.xlsx' });
  }

  factura() {
    window.open('/venta/factura/imprimir/' + this.facturaSeleccionada?.id, '_blank');

  }


  crearGrid() {
    this.grid = new Grid({
      el: document.getElementById('grid-cliente-venta-reporte'),
      data: [],
      scrollX: false,
      scrollY: false,
      rowHeaders: ['checkbox'],
      columns: [
        { header: 'Fecha', name: 'fecha', width: 150, filter: 'date'},
        { header: 'Factura', name: 'id', width: 150, filter: 'text'},
        {header: 'Vendedor', name: 'usuario', width: 200, filter: 'text'},
        { header: 'Subtotal', name: 'subtotal', width: 100 , filter: 'text'},
        { header: 'Iva', name: 'iva', width: 100,  filter: 'text'},
        { header: 'Total', name: 'total', width: 100 , filter: 'text'},
      ]
    });

    this.grid.on('check', (ev: any) => {
      this.facturaSeleccionada = this.grid.getRow(ev.rowKey);
    });
  }
}
