import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:'product', component:ProductComponent, children: [
    {path:'new', component:NewProductComponent},
    {path:':id', component:ProductIdComponent},
    {path:':id/edit', component:UpdateComponent}
  ]},
  { path: '**', redirectTo: '/product' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
