import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService 
{
  public cartItemList : any = [];

  //reference to observable explanations https://stackoverflow.com/questions/39494058/behaviorsubject-vs-observable
  public colorsBehaviour = new BehaviorSubject<any>(['default','default','default','default']);
  public productList = new BehaviorSubject<any>([]); //Requires an initial value and emits the current value to new subscribers
  public search = new BehaviorSubject<string>(""); //A variant of Subject that requires an initial value and emits its current value whenever it is subscribed to.
  constructor() { }
  getProducts(){
    return this.productList.asObservable();// as datastream that we can listen to some changes, data changes async
  }
  setProduct(product : any)
  {
    this.cartItemList.push(...product);
    this.productList.next(product);//daka 52

  }
  addtoCart(product : any)
  {
    for(let i=0;i<this.cartItemList.length;i++)//if the product already exist, i just update his quantitiy and return;
    {
      if(this.cartItemList[i].id===product.id){this.getTotalPrice();this.cartItemList[i].quantity++; return;}
    }
    //otherwise append it to our observable to update our list of products
    product.quantity++;
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();//update the price.
  }
  getTotalPrice() : number
  {
    let Totalcost = 0;
    this.cartItemList.map((a:any)=>{
      Totalcost+=(a.total*a.quantity);
    })
    return Totalcost;
  }

  removeCartItem(product : any)
  {
    //remove item by id
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id)
      {
        // product.quantity--;
        // if(product.quantity===0){this.cartItemList.splice(index,1);}
        product.quantity=0;
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    //clean the list -> means clear all the cart
    this.cartItemList =  [];
    this.productList.next(this.cartItemList);
  }

}
