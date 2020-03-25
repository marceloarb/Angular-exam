import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  create_product:any;
  error:any;
  @Input() no:boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.create_product = {name:"",qty:'',price:''}
    
  }

  postproduct(){
    this._httpService.postproduct(this.create_product).subscribe(data=>{
      if (data instanceof Array){
        this.error = data;
      }
      else{
        this.create_product = data;
        this.toggled.next(this.create_product)
        this.no = false;
        this._router.navigate([''])
      }
    })
  }
  // send(create_product){
  //   this.myEvent.emit(this.create_product)
  //   console.log(this.create_product)
  // }
}
