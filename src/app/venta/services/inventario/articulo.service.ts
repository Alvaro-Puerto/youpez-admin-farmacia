import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService extends BaseService{

  public articuloSeleccionado: any;
  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  getArticulos(){
    return this.http.get(this.baseUrl + 'producto',  {headers: this.httpOptions})
  }

  getArticulo(id){
    return this.http.get(this.baseUrl + 'producto/' + id,  {headers: this.httpOptions})
  }

  createArticulo(articulo){
    return this.http.post(this.baseUrl + 'producto', articulo, {headers: this.httpOptions})
  }

  updateArticulo(articulo, id){
    return this.http.put(this.baseUrl + 'producto/' + id, articulo, {headers: this.httpOptions})
  }

  deleteArticulo(id){
    return this.http.delete(this.baseUrl + 'producto/' + id,  {headers: this.httpOptions})
  }


}
