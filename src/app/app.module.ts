import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-6-datatable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

import { environment } from './../environments/environment';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductsFormComponent } from './admin/products-form/products-form.component';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductsComponent } from './products/products.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminAuthGuard } from 'shared/services/admin-auth-guard.service';

// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    LoginComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    DataTableModule,
    CustomFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'' ,component:ProductsComponent},
      {path:'products' ,component:ProductsComponent},
      {path:'shopping-cart' ,component:ShoppingCartComponent},
      {path:'login' ,component:LoginComponent},

      {path:'check-out' ,component:CheckOutComponent, canActivate: [AuthGuard]},
      {path:'order-success/:id' ,component:OrderSuccessComponent, canActivate: [AuthGuard]},
      {path:'my/orders' ,component:MyOrdersComponent, canActivate: [AuthGuard]},
        {
          path:'admin/products/new' ,
          component:ProductsFormComponent, 
          canActivate: [AuthGuard]
        },
        {
          path:'admin/products/:id' ,
          component:ProductsFormComponent, 
          canActivate: [AuthGuard]
        },
        {
          path:'admin/products' ,
          component:AdminProductsComponent,
           canActivate: [AuthGuard]
          },
      {
        path:'admin/orders',
        component:AdminOrdersComponent, 
        canActivate: [AuthGuard]
      }
    ])
  ],
  providers: [
    AdminAuthGuard,
    
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
