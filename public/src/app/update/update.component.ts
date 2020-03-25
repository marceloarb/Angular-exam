import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:any;
  error:any;
  product:any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.product = {name:"",qty:'',price:''}
    this.error = [];

    this._route.params.subscribe((params:Params)=>{
      this.id = params['id']
      
    })
    this.get_product_id();
  }

  get_product_id(){
    this._httpService.get_product_id(this.id).subscribe(data=>{
      this.product = data;
    })
  }

  update(){
    this._httpService.update(this.id,this.product).subscribe(data=>{
      if (data instanceof Array){
        this.error = data;
      }
      else{
        this.product = data;
        this._router.navigate([''])
      }
    })
  }

}
