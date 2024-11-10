import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UmService extends BaseService{

  public UmSeleccionado: any;

  constructor(private http: HttpClient) { 
    super();
  }

  getUms() {
    return this.http.get(`${this.baseUrl}um`,  {headers: this.httpOptions});
  }

  getUmById(id: number) {
    return this.http.get(`${this.baseUrl}um/${id}`,  {headers: this.httpOptions});
  }

  createUm(um: any) {
    return this.http.post(`${this.baseUrl}um`,um ,  {headers: this.httpOptions});
  }

  updateUm(um: any) {
    return this.http.put(`${this.baseUrl}um/` + um?.id, um, {headers: this.httpOptions});
  }

  deleteUm(id: number) {
    return this.http.delete(`${this.baseUrl}um/${id}`,  {headers: this.httpOptions});
  }


}
