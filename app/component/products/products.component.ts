import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { filter } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public changeText : any;
  constructor(private cartService : CartService) { this.changeText=true; }
  public toggles = [true,false,false,false];
  products=[] as any;
  searchKey:string = ""; 
  public filterCategory : any;
  productInitalizer() : void
  {
    this.products.push({
                        id:0,
                        title:"Iron Man Pop",
                        price: 50,
                        description:"Beautiful Pop",
                        category:"Marvel Pops",
                        image:"https://www.techinn.com/f/13820/138203491/funko-pop-marvel-avengers-endgame-iron-man-exclusive.jpg",
                        quantity:0,
                        total: 50,
                      },
                      
                      {
                        id:1,
                        title:"Spider-Man Pop",
                        price: 50,
                        description:"Amazing Pop so good omg my name is also inspireman",
                        category:"Marvel Pops",
                        image:"https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/0ad7ba6247fe4685a22502403a119d09_Large.jpg",
                        quantity:0,
                        total: 50,
                      },
                      
                      {id:2,
                      title:"Captain America Shirt",
                      price: 80,
                      description:"100% cotton shirt, Size=XXL",
                      category:"Marvel Shirts",
                      image:"https://cdn.tzy.li/tzy/previews/images/001/925/520/002/original/marvel-captain-america-avengers-shield-flag-graphic-t-shirt-t-shirt.jpg?1582102567",
                      quantity:0,
                      total: 80,
                      },
                      {
                        id:4,
                        title:"Supreme Strange Pop",
                        price: 110,
                        description:"Unique and Special edition pop",
                        category:"Marvel Pops",
                        image:"https://abgame.it/111087-large_default/pop-figure-marvel-what-if-doctor-strange-supreme.jpg",
                        quantity:0,
                        total: 110,
                      },{
                        id:5,
                        title:"The white Vision",
                        price: 50,
                        description:"Beautiful Pop",
                        category:"Marvel Pops",
                        image:"https://www.tradeinn.com/f/13813/138135766/funko-pop-marvel-wandavision-the-vision.jpg",
                        quantity:0,
                        total: 50,
                      },
                      {
                        id:6,
                        title:"Guardians Of the Galaxy Dancing Groot 45 cm",
                        price: 150,
                        description:"Beautiful Pop",
                        category:"Marvel Pops",
                        image:"https://www.tradeinn.com/f/13767/137678239/funko-pop-marvel-guardians-of-the-galaxy-dancing-groot-45-cm.jpg",
                        quantity:0,
                        total: 150,
                      },
                      {
                        id:7,
                        title:"Supreme strange",
                        price: 100,
                        description:"Beautiful Pop",
                        category:"Marvel Pops",
                        image:"https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/461011984893?fmt=jpeg&qlt=90&wid=652&hei=652&defaultImage=no-image-image_uk",
                        quantity:0,
                        total: 100,
                      },
                      {
                        id:8,
                        title:"Marvel Loki Logo",
                        price: 80,
                        description:"Beautiful T-shirt",
                        category:"Marvel Shirts",
                        image:"https://www.tradeinn.com/f/13819/138199014/difuzed-marvel-loki-logo-short-sleeve-t-shirt.jpg",
                        quantity:0,
                        total: 80,
                      },
                      {
                        id:9,
                        title:"Difuzed Marvel Avengers Thor",
                        price: 80,
                        description:"Beautiful T-shirt",
                        category:"Marvel Shirts",
                        image:"https://www.tradeinn.com/f/13778/137785680/difuzed-marvel-avengers-thor-short-sleeve-t-shirt.jpg",
                        quantity:0,
                        total: 80,
                      },
                      {
                        id:10,
                        title:"Infinity Gauntlet Mug",
                        price: 40,
                        description:"Beautiful Mug",
                        category:"Marvel Merch",
                        image:"https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/465031308134?fmt=webp&qlt=70&wid=1030&hei=1030&defaultImage=no-image-image_uk",
                        quantity:0,
                        total: 40,
                      },
                      {
                        id:11,
                        title:"Groot Mug",
                        price: 40,
                        description:"Beautiful Mug",
                        category:"Marvel Merch",
                        image:"https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/465031662885?fmt=webp&qlt=70&wid=1030&hei=1030&defaultImage=no-image-image_uk",
                        quantity:0,
                        total: 40,
                      },
                      {
                        id:12,
                        title:"Pyramid Marvel Deadpool Metal 500ml Bottle",
                        price: 40,
                        description:"Beautiful Bottle",
                        category:"Marvel Merch",
                        image:"https://www.tradeinn.com/f/13779/137799296/pyramid-marvel-deadpool-metal-500ml-bottle.jpg",
                        quantity:0,
                        total: 40,
                      },
                      {
                        id:13,
                        title:"Group Marvel Short",
                        price: 40,
                        description:"Beautiful Bottle",
                        category:"Marvel Shirts",
                        image:"https://www.tradeinn.com/f/13874/138740313/cerda-group-marvel-short-sleeve-t-shirt.jpg?_gl=1*1moiknv*_up*MQ..&gclid=CjwKCAjw0a-SBhBkEiwApljU0kvytW4qTfGfB39_m1UL9YcpSsU6cXUTZ23JJCEb_Ti5QD3Pa0E-VBoCwXwQAvD_BwE&gclsrc=aw.ds",
                        quantity:0,
                        total: 40,
                      },
                      {
                        id:14,
                        title:"Group Marvel Short",
                        price: 40,
                        description:"Beautiful Bottle",
                        category:"Marvel Shirts",
                        image:"https://www.tradeinn.com/f/13874/138740313/cerda-group-marvel-short-sleeve-t-shirt.jpg?_gl=1*1moiknv*_up*MQ..&gclid=CjwKCAjw0a-SBhBkEiwApljU0kvytW4qTfGfB39_m1UL9YcpSsU6cXUTZ23JJCEb_Ti5QD3Pa0E-VBoCwXwQAvD_BwE&gclsrc=aw.ds",
                        quantity:0,
                        total: 40,
                      },
                      {
                        id:15,
                        title:"adidas x Marvel Spider-Man",
                        price: 40,
                        description:"Beautiful Bottle",
                        category:"Marvel Merch",
                        image:"https://www.tradeinn.com/f/13789/137899661/adidas-x-marvel-spider-man-short-sleeve-t-shirt.jpg?_gl=1*1ppcz18*_up*MQ..&gclid=CjwKCAjw0a-SBhBkEiwApljU0kvytW4qTfGfB39_m1UL9YcpSsU6cXUTZ23JJCEb_Ti5QD3Pa0E-VBoCwXwQAvD_BwE&gclsrc=aw.ds",
                        quantity:0,
                        total: 40,
                      },{
                        id:16,
                        title:"HAMMER OF THOR - MJOLNIR",
                        price: 40,
                        description:"Beautiful Bottle",
                        category:"Marvel Merch",
                        image:"https://cdn.webshopapp.com/shops/305440/files/334089699/image.jpg",
                        quantity:0,
                        total: 40,
                      },
                      {
                        id:17,
                        title:"Captain America-shockproof Shield",
                        price: 40,
                        description:"Beautiful Bottle",
                        category:"Marvel Merch",
                        image:"https://img.fruugo.com/product/7/57/183299577_max.jpg",
                        quantity:0,
                        total: 40,
                      }
                      );
   this.filterCategory=this.products;
  }
  addtocart(item: any)
  {
    this.cartService.addtoCart(item);
    //Object.assign;
  }
  filter( category : string)
  {
    this.filterCategory = this.products.filter((a:any)=>{
      if(a.category == category || category ==''){return a;}

    })
  }
  ngOnInit(): void
   {
    this.productInitalizer();
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })

  }
  Toggle(n : number)
  {
    for(let i = 0 ; i<this.toggles.length;i++)
    {
      if(i===n) this.toggles[i]=true;
      else this.toggles[i]=false;
    }
  }


}
