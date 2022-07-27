import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public totalCounter : number = 0;
  public searchTerm : string = "";
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.totalCounter = res.length;
    })
  }

  search(event : any){
    this.searchTerm = (event.target as HTMLInputElement).value; // getting the value from the htmlinput
    this.cartService.search.next(this.searchTerm); // using our service to search the item
  }
}
