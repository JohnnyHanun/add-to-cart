import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { HomeComponent } from './component/home/home.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'cart', component:CartComponent},
  {path:'products', component:ProductsComponent},
  {path:'addMovie',component:AddMovieComponent},
  {path:'home',component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
