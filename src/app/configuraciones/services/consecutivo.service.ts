import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/venta/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ConsecutivoService extends BaseService{

  constructor(
    private http: HttpClient
  ) {
    super();
   }


   getConsecutivos(){
      return this.http.get(`${this.baseUrl}consecutivos`); 
    }

    getConsecutivo(id){
      return this.http.get(`${this.baseUrl}consecutivos/${id}`)
    }

    createConsecutivo(consecutivo){
      return this.http.post(`${this.baseUrl}consecutivos`, consecutivo, {headers: this.httpOptions})
    }

    updateConsecutivo(consecutivo){
      return this.http.put(`${this.baseUrl}consecutivos/${consecutivo.id}`, consecutivo)
    }

    deleteConsecutivo(id){
      return this.http.delete(`${this.baseUrl}consecutivos/${id}`)
    }
}
