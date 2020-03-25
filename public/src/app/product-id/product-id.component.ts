import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.css']
})
export class ProductIdComponent implements OnInit {
  id:any;
  product:any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.id = params['id']

      
    })
    this.get_product_id()
  }
  get_product_id(){
    console.log(this.id)
    this._httpService.get_product_id(this.id).subscribe(data=>{
      console.log(data)
      this.product = data;
    })
  }
  delete(id){
    this._httpService.delete(id).subscribe(data=>{
      console.log("deleted",data);
      this.product = data;
    })
    this.get_product_id();
  }
}
