import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/venta/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseService {

  public clienteSeleccionado: any;
  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  getClientes() {
    return this.http.get(this.baseUrl + 'clientes', { headers: this.httpOptions });
  }

  getCliente(id: number) {
    return this.http.get(this.baseUrl + 'clientes/' + id, { headers: this.httpOptions });
  }

  addCliente(cliente: any) {
    return this.http.post(this.baseUrl + 'clientes', cliente, { headers: this.httpOptions });
  }

  updateCliente(cliente: any, id) {
    return this.http.put(this.baseUrl + 'clientes/' + id, cliente, { headers: this.httpOptions });
  }

  deleteCliente(id: number) {
    return this.http.delete(this.baseUrl + 'clientes/' + id, { headers: this.httpOptions });
  }
  


}
