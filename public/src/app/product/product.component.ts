import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any;
  no:boolean = false;
  no_edit:boolean = false;

  constructor(private _httpService: HttpService,
    private _router: Router) { }

  ngOnInit() {
    this.getproducts();
  }

  getproducts(){
    this._httpService.getproducts().subscribe(data=>{
      this.products = data;
    })
    
  }
  child(){

    console.log('this is from the parent')
    this.getproducts();

  }
  show(){
    this.no = true;
  }
  show_edit(){
    this.no_edit = true;
  }
}
