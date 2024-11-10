import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/venta/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class PermisosService extends BaseService {

  public permisosAsignados = [];
  constructor(
    private http: HttpClient
  ) { 
    super(); 
  }

  obtenerPermisos() {
    return this.http.get(this.baseUrl + 'permisos', {headers: this.httpOptions});
  }

  obtenerUsuarioPermisos() {
    return this.http.get(this.baseUrl + 'user', {headers: this.httpOptions});
  }

  generarBackup() {
    return this.http.get(this.baseUrl + 'backups', {headers: this.httpOptions});
  }

  obtenerBackup() {
    return this.http.get(this.baseUrl + 'backups/all',  {headers: this.httpOptions});
    
  }

  restore() {
    return this.http.get(this.baseUrl + 'restore', {headers: this.httpOptions});
  }
}
