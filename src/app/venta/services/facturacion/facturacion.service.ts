import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService extends BaseService{

  constructor(
    private http: HttpClient
  ) {
    super();
   }


   crearVenta(venta){
    return this.http.post(this.baseUrl + 'ventas', venta, {headers: this.httpOptions});
   }

   obtenerVentas(fechaInicio, fechaFin){
    return this.http.get(this.baseUrl + 'ventas?fecha_inicio=' + fechaInicio + '&fecha_fin=' + fechaFin, {headers: this.httpOptions});
   }

   indicadorVenta(fecha_inicio, fecha_fin){
    return this.http.get(this.baseUrl + 'indicador/ventas?fecha_inicio=' + fecha_inicio + '&fecha_fin=' + fecha_fin, {headers: this.httpOptions});
   }

   indicadorVendedor(fecha_inicio, fecha_fin){
    return this.http.get(this.baseUrl + 'indicador/vendedor?fecha_inicio=' + fecha_inicio + '&fecha_fin=' + fecha_fin, {headers: this.httpOptions});
   }


   imprimirFactura(id) {
    return this.http.get(this.baseUrl + 'ventas/' + id + '/imprimir', {headers: this.httpOptions});
   }
}
