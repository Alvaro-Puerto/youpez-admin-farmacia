import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BodegaService extends BaseService {

  public bodegaSeleccionado: any;
  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  getBodegas() {
    return this.http.get(`${this.baseUrl}bodegas`, {headers: this.httpOptions});
  }

  getBodega(id: number) {
    return this.http.get(`${this.baseUrl}bodegas/${id}`, {headers: this.httpOptions});
  }

  createBodega(data: any) {
    return this.http.post(`${this.baseUrl}bodegas`, data, {headers: this.httpOptions});
  }

  updateBodega(id: number, data: any) {
    return this.http.put(`${this.baseUrl}bodegas/${id}`, data, {headers: this.httpOptions});
  }

  deleteBodega(id: number) {
    return this.http.delete(`${this.baseUrl}bodegas/${id}`,   {headers: this.httpOptions});
  }
  
  entradaBodega(data) {
    return this.http.post(`${this.baseUrl}bodegas/entrada/inventario`, data, {headers: this.httpOptions});
  }

  consultarInventario(id_bodega, id_producto) {
    return this.http.get(`${this.baseUrl}bodegas/inventario/${id_bodega}/${id_producto}`, {headers: this.httpOptions});
  }

  
}
