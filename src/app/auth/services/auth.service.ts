import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/venta/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService{

  constructor(private http: HttpClient) {
    super();
   }

   iniciarSesion(data) {
      return this.http.post(this.baseUrl + 'login', data, {headers: this.httpOptions});
   }

   cerrarSesion() {
      return this.http.get(this.baseUrl + 'logout', {headers: this.httpOptions});
   }
}
