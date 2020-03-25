import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  postproduct(product){
    return this._http.post('/product',product);

  }
  getproducts(){
    return this._http.get('/products');
  }
  get_product_id(id){
    return this._http.get('/product/'+id);
  }
  delete(id){
    return this._http.delete('/product/'+id);
  }
  update(id,update){
    console.log(id,update)
    return this._http.put('/product/'+id,update)
  }

}
