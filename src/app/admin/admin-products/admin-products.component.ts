import { Product } from 'shared/models/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular5-data-table';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products:Product[];
  filteredProductes: any[];
  subscirption:Subscription;
  tableResource:DataTableResource<Product>;
  items: Product[] = [];
  itemCount:number;

  constructor(private productService:ProductService) { 
    this.subscirption =  this.productService.getAll()
     .subscribe(products =>{
        this.filteredProductes = this.products = products
        this.initializeTable(products);
      });
  }

  private initializeTable(products: Product[]){
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset:0 })
    .then(items => this.items = items);
    this.tableResource.count()
    .then(counst => this.itemCount = counst)
  }

  reloadItems(params){
    if(!this.tableResource) return;

    this.tableResource.query(params)
    .then(items => this.items = items);
  }

 filter(query: string) {
   this.filteredProductes = (query) ?
    this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
    this.products;

    this.initializeTable(this.filteredProductes);
}

  ngOnDestroy(){
    this.subscirption.unsubscribe();
  }

  ngOnInit() {
  }

}
