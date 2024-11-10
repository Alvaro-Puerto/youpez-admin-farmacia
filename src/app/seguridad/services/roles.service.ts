import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/venta/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService extends BaseService{

  public data: any;
  constructor(
    private readonly http: HttpClient
  ) { 
    super();
  }

  obtenerRoles() {
    return this.http.get(this.baseUrl + 'roles', {headers: this.httpOptions});
  }

  crearRol(data) {
    return this.http.post(this.baseUrl + 'roles', data, {headers: this.httpOptions});
  }

  actualizarRol(data, id) {
    return this.http.put(this.baseUrl + 'roles/' + id, data, {headers: this.httpOptions});
  }

  eliminarRol(id) {
    return this.http.delete(this.baseUrl + 'roles/' + id, {headers: this.httpOptions});
  }

  obtenerDetalleRol(id) {
    return this.http.get(this.baseUrl + 'roles/' + id, {headers: this.httpOptions});
  }

  obtenerUsuariosRol(id) {
    return this.http.get(this.baseUrl + 'roles/' + id + '/users', {headers: this.httpOptions});
  }

  agregarPermiso(id, permiso) {
    const data = {
      permission_id: permiso,
      role_id: id
    }
    return this.http.post(this.baseUrl + 'roles/permissions', data, {headers: this.httpOptions});
  }

  eliminarPermiso(id, permiso) {
    return this.http.delete(this.baseUrl + 'roles/' + id + '/permissions/' + permiso, {headers: this.httpOptions});
  }

  asignarRolUsuario(id, usuario) {
    const data = {
      user_id: usuario,
    }
    return this.http.post(this.baseUrl + 'roles/'+ id +'/users', data, {headers: this.httpOptions});
  }
}
