import { Subscription } from 'rxjs/Subscription';
import { async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { Product } from 'shared/models/product';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filterProducts: Product[] = [];
  category:string;
  cart$:Observable<ShoppingCart>;

  constructor(
              private route: ActivatedRoute,
              private productService:ProductService,
              private shoppingCartService:ShoppingCartService
            ) {}

  async  ngOnInit(){
  this.cart$ = await this.shoppingCartService.getCart();
  this. populatProducts();
  }

  private populatProducts(){
    this.productService
      .getAll()
      .pipe(switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
      });
  }

 private applyFilter(){
  this.filterProducts = (this.category) ?
  this.products.filter(p => p.category === this.category) :
  this.products;
 }

}
