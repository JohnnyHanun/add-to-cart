import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { FilterPipe } from './shared/filter.pipe';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { ButtonComponent } from './component/button/button.component';
import { HomeComponent } from './component/home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    FooterComponent,
    AddMovieComponent,
    ButtonComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
