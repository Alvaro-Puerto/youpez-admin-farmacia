import { Component, OnInit } from '@angular/core';
import { FacturacionService } from '../services/facturacion/facturacion.service';
import { NotificationService } from 'carbon-components-angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-factura-imprimir',
  templateUrl: './factura-imprimir.component.html',
  styleUrls: ['./factura-imprimir.component.scss']
})
export class FacturaImprimirComponent implements OnInit {

  detalleFactura: any;
  lineasDetalle = [];
  constructor(
    private facturaService: FacturacionService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe(params => {
      this.obtenerFacturaDetalle(params['id']);
    });
  }

  ngOnInit(): void {
  }

  obtenerFacturaDetalle(id){
    this.facturaService.imprimirFactura(id)
      .subscribe((data:any) => {
        console.log(data)
        this.detalleFactura = data['cabecera'];
        this.lineasDetalle = data['lineas'];

        setTimeout(() => {
          window.print();
        }, 3000);
       
      }, err => {
        console.log(err);
      });
  }

}
