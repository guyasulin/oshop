import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'shared/services/category.service';
import { ProductService } from 'shared/services/product.service';
import { take } from 'rxjs/internal/operators/take';
// import { take } from 'rxjs/operators';


@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {
  categories$;
  product = {};
  id;

  
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private categoryService:CategoryService,
    private  productService:ProductService ) { 

    this.categories$ = categoryService.getCategories();

    this.id =  this.route.snapshot.paramMap.get('id');
   if(this.id) this.productService.get(this.id).pipe(take(1)).subscribe(p => this.product = p);
  }

  save(product){
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }
  belete(){
    if(!confirm('Are you sure you want to dalate this produc?'))return;
    
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
  }
  ngOnInit() {
  }

}
