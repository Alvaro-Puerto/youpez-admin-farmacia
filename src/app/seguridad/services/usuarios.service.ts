import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/venta/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends BaseService {
  data: any;

  constructor(private http: HttpClient) { 
    super();
  }

  obtenerUsuario() {
    return this.http.get(this.baseUrl + 'users', {headers: this.httpOptions});
  }

  crearUsuario(data) {
    return this.http.post(this.baseUrl + 'users', data, {headers: this.httpOptions});
  }

  actualizarUsuario(data, id) {
    return this.http.put(this.baseUrl + 'users/' + id, data, {headers: this.httpOptions});
  }

  eliminarUsuario(id) {
    return this.http.delete(this.baseUrl + 'users/' + id, {headers: this.httpOptions});
  }

  obtenerDetalleUsuario(id) {
    return this.http.get(this.baseUrl + 'users/' + id, {headers: this.httpOptions});
  }
  
}
