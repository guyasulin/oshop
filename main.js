(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Orders</h1>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Customer</th>\n      <th>Date</th>\n      <th></th>\n    </tr>\n  </thead> \n  <tbody>\n    <tr *ngFor=\"let order of orders$ | async\">\n      <td>{{ order.shipping.name }}</td>\n      <td>{{ order.datePlaced | date}}</td>\n      <td>\n        <a href=\"#\">View</a>\n      </td>\n    </tr>\n  </tbody> \n</table>"

/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var shared_services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminOrdersComponent = /** @class */ (function () {
    function AdminOrdersComponent(orderService) {
        this.orderService = orderService;
        this.orders$ = orderService.getOrders();
    }
    AdminOrdersComponent.prototype.ngOnInit = function () {
    };
    AdminOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-orders',
            template: __webpack_require__(/*! ./admin-orders.component.html */ "./src/app/admin/admin-orders/admin-orders.component.html"),
            styles: [__webpack_require__(/*! ./admin-orders.component.css */ "./src/app/admin/admin-orders/admin-orders.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_order_service__WEBPACK_IMPORTED_MODULE_0__["OrderService"]])
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>\n  <a routerLink=\"/admin/products/new\" class=\"btn btn-primary\">\n    New Product\n  </a>\n</p>\n<p>\n  <input\n  #query\n  (keyup)=\"filter(query.value)\"\n  type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n</p>\n\n<table  class=\"table\">\n    <thead>\n    <tr>\n      <th>Title</th>\n      <th>Price</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let p of filteredProductes\">\n      <td>{{ p.title }}</td>\n      <td>{{ p.price }}</td>\n      <td>\n        <a [routerLink]=\"['/admin/products/', p.$key]\">Edit</a>\n      </td>\n    </tr>\n  </tbody>\n  </table>\n<!-- <data-table\n  [items]=\"items\"\n  [itemCount]=\"itemCount\"\n  (reload)=\"reloadItems($event)\"\n>\n  <data-table-column\n    [property]=\"title\"\n    [header]=\"'Title'\"\n    [sortable]=\"true\"\n    [resizable]=\"true\"\n  >\n  <data-table-column\n    [property]=\"price\"\n    [header]=\"'Price'\"\n    [sortable]=\"true\"\n    [resizable]=\"true\"\n  >\n    <ng-template #dataTableCell let-item=\"item\">\n       {{ item.price | currency:'USD':true }}\n    </ng-template>\n  </data-table-column>\n\n  <data-table-column\n    [property]=\"$key\"\n>\n  <ng-template #dataTableCell let-item=\"item\">\n      <a [routerLink]=\"['/admin/products/', item.$key]\">Edit</a>\n  </ng-template>\n  </data-table-column>\n</data-table> -->\n"

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var angular5_data_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular5-data-table */ "./node_modules/angular5-data-table/esm5/angular5-data-table.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.items = [];
        this.subscirption = this.productService.getAll()
            .subscribe(function (products) {
            _this.filteredProductes = _this.products = products;
            _this.initializeTable(products);
        });
    }
    AdminProductsComponent.prototype.initializeTable = function (products) {
        var _this = this;
        this.tableResource = new angular5_data_table__WEBPACK_IMPORTED_MODULE_2__["DataTableResource"](products);
        this.tableResource.query({ offset: 0 })
            .then(function (items) { return _this.items = items; });
        this.tableResource.count()
            .then(function (counst) { return _this.itemCount = counst; });
    };
    AdminProductsComponent.prototype.reloadItems = function (params) {
        var _this = this;
        if (!this.tableResource)
            return;
        this.tableResource.query(params)
            .then(function (items) { return _this.items = items; });
    };
    AdminProductsComponent.prototype.filter = function (query) {
        this.filteredProductes = (query) ?
            this.products.filter(function (p) { return p.title.toLowerCase().includes(query.toLowerCase()); }) :
            this.products;
        this.initializeTable(this.filteredProductes);
    };
    AdminProductsComponent.prototype.ngOnDestroy = function () {
        this.subscirption.unsubscribe();
    };
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    AdminProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__(/*! ./admin-products.component.html */ "./src/app/admin/admin-products/admin-products.component.html"),
            styles: [__webpack_require__(/*! ./admin-products.component.css */ "./src/app/admin/admin-products/admin-products.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/admin/products-form/products-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/products-form/products-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/products-form/products-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/products-form/products-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n            <form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\" >\n            <div class=\"form-group\">\n                <label for=\"title\">Title</label>\n                <input #title=\"ngModel\" [(ngModel)]=\"product.title\" name=\"title\" id=\"title\"  type=\"text\" class=\"form-control\" required>\n                <div class=\"alert alert-danger\" *ngIf=\"title.touched && title.invalid\">\n                    Title is required.\n                </div>\n            </div>\n            <div class=\"form-group\">\n                    <label for=\"price\">Price</label>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-text\">$</span>\n                        <input #price=\"ngModel\" [(ngModel)]=\"product.price\" name=\"price\" id=\"price\" type=\"number\" class=\"form-control\" required [min]=\"0\">\n                    </div>\n                    <div class=\"alert alert-danger\" *ngIf=\"price.touched && price.invalid\">\n                    <div *ngIf=\"price.errors.required\">Price is required.</div>\n                    <div *ngIf=\"price.errors.min\">Price should be 0 or higher.</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                        <label for=\"category\">Category</label>\n                        <select  #category=\"ngModel\"  [(ngModel)]=\"product.category\" name=\"category\" id=\"category\" class=\"form-control\" required>\n                            <option value=\"\"></option>   \n                            <option *ngFor=\"let c of categories$ | async\" [value]=\"c.$key\">\n                                {{ c.name }}\n                            </option>   \n                        </select>\n                        <div class=\"alert alert-danger\" *ngIf=\"category.touched && category.invalid\" >\n                                category is required.\n                        </div>\n                </div>\n                <div class=\"form-group\">\n                        <label for=\"imageUrl\">Image Url</label>\n                        <input #imageUrl=\"ngModel\" [(ngModel)]=\"product.imageUrl\" name=\"imageUrl\" id=\"imageUrl\" type=\"text\" class=\"form-control\" required url>\n                        <div class=\"alert alert-danger\" *ngIf=\"imageUrl.touched && imageUrl.invalid\">\n                        <div *ngIf=\"imageUrl.errors.required\">imageUrl is required.</div>    \n                        <div *ngIf=\"imageUrl.errors.url\">plese enter a valid URL.</div>      \n                    </div>\n                </div>\n                <button class=\"btn btn-primary\">Save</button>\n                <button type=\"button\" (click)=\"belete()\" class=\"btn btn-danger\">Delete</button>\n                </form>\n    </div>\n    <div class=\"col-md-6\">\n        <product-card [product]=\"product\" [show-actions]=\"false\"></product-card>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/products-form/products-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/products-form/products-form.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsFormComponent", function() { return ProductsFormComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/take */ "./node_modules/rxjs/internal/operators/take.js");
/* harmony import */ var rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { take } from 'rxjs/operators';
var ProductsFormComponent = /** @class */ (function () {
    function ProductsFormComponent(router, route, categoryService, productService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.categoryService = categoryService;
        this.productService = productService;
        this.product = {};
        this.categories$ = categoryService.getCategories();
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.productService.get(this.id).pipe(Object(rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (p) { return _this.product = p; });
    }
    ProductsFormComponent.prototype.save = function (product) {
        if (this.id)
            this.productService.update(this.id, product);
        else
            this.productService.create(product);
        this.router.navigate(['/admin/products']);
    };
    ProductsFormComponent.prototype.belete = function () {
        if (!confirm('Are you sure you want to dalate this produc?'))
            return;
        this.productService.delete(this.id);
        this.router.navigate(['/admin/products']);
    };
    ProductsFormComponent.prototype.ngOnInit = function () {
    };
    ProductsFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-form',
            template: __webpack_require__(/*! ./products-form.component.html */ "./src/app/admin/products-form/products-form.component.html"),
            styles: [__webpack_require__(/*! ./products-form.component.css */ "./src/app/admin/products-form/products-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], ProductsFormComponent);
    return ProductsFormComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bs-navbar></bs-navbar>\n\n<div class=\"container\">\n\n  <div class=\"starter-template\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(auth, router, userService) {
        this.auth = auth;
        this.userService = userService;
        auth.user$.subscribe(function (user) {
            if (!user)
                return;
            userService.save(user);
            var returnUrl = localStorage.getItem('returnUrl');
            if (!returnUrl)
                return;
            localStorage.removeItem('returnUrl');
            router.navigateByUrl(returnUrl);
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin-orders/admin-orders.component */ "./src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin-products/admin-products.component */ "./src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var _admin_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/products-form/products-form.component */ "./src/app/admin/products-form/products-form.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bs-navbar/bs-navbar.component */ "./src/app/bs-navbar/bs-navbar.component.ts");
/* harmony import */ var _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./check-out/check-out.component */ "./src/app/check-out/check-out.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "./src/app/my-orders/my-orders.component.ts");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./order-success/order-success.component */ "./src/app/order-success/order-success.component.ts");
/* harmony import */ var _products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./products/product-filter/product-filter.component */ "./src/app/products/product-filter/product-filter.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shipping-form/shipping-form.component */ "./src/app/shipping-form/shipping-form.component.ts");
/* harmony import */ var _shopping_cart_summary_shopping_cart_summary_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shopping-cart-summary/shopping-cart-summary.component */ "./src/app/shopping-cart-summary/shopping-cart-summary.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var shared_services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! shared/services/admin-auth-guard.service */ "./src/app/shared/services/admin-auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_18__["BsNavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_25__["ProductsComponent"],
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_28__["ShoppingCartComponent"],
                _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_19__["CheckOutComponent"],
                _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_23__["OrderSuccessComponent"],
                _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_22__["MyOrdersComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_24__["ProductFilterComponent"],
                _shopping_cart_summary_shopping_cart_summary_component__WEBPACK_IMPORTED_MODULE_27__["ShoppingCartSummaryComponent"],
                _shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_26__["ShippingFormComponent"],
                _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_15__["AdminProductsComponent"],
                _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_14__["AdminOrdersComponent"],
                _admin_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_16__["ProductsFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_10__["CustomFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', component: _products_products_component__WEBPACK_IMPORTED_MODULE_25__["ProductsComponent"] },
                    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_25__["ProductsComponent"] },
                    { path: 'shopping-cart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_28__["ShoppingCartComponent"] },
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"] },
                    { path: 'check-out', component: _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_19__["CheckOutComponent"], canActivate: [shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
                    { path: 'order-success/:id', component: _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_23__["OrderSuccessComponent"], canActivate: [shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
                    { path: 'my/orders', component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_22__["MyOrdersComponent"], canActivate: [shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
                    {
                        path: 'admin/products/new',
                        component: _admin_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_16__["ProductsFormComponent"],
                        canActivate: [shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
                    },
                    {
                        path: 'admin/products/:id',
                        component: _admin_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_16__["ProductsFormComponent"],
                        canActivate: [shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
                    },
                    {
                        path: 'admin/products',
                        component: _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_15__["AdminProductsComponent"],
                        canActivate: [shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
                    },
                    {
                        path: 'admin/orders',
                        component: _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_14__["AdminOrdersComponent"],
                        canActivate: [shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
                    }
                ])
            ],
            providers: [
                shared_services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"],
            ],
            // schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/bs-navbar/bs-navbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.dropdown-toggle{\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/bs-navbar/bs-navbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      <i class=\"fas fa-leaf\" aria-hidden=\"true\"></i>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/shopping-cart\">\n            <i class=\"fas fa-shopping-cart\"></i>\n            <span class=\"badge badge-warning badge-pill\" *ngIf=\"cart$| async as cart\">\n              {{ cart.totalItemsCount }}\n            </span>\n          </a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav\">\n          <ng-template #anonymousUser>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n            </li>\n          </ng-template>\n          <li ngbDropdown *ngIf=\"appUser; else anonymousUser\" class=\"nav-item dropdown \">\n            <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{ appUser.name }}\n            </a>\n            <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n              <a class=\"dropdown-item\" routerLink=\"/my/orders\">My-Orders</a>\n              <ng-container *ngIf=\"appUser.isAdmin\">\n                <a class=\"dropdown-item\" routerLink=\"/admin/orders\">Manage-Orders</a>\n                <a class=\"dropdown-item\" routerLink=\"/admin/products\">Manage-Products</a>\n              </ng-container>\n              <a class=\"dropdown-item\" (click)=\"logout()\">Log-Out</a>\n            </div>\n          </li>\n        </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bs-navbar/bs-navbar.component.ts ***!
  \**************************************************/
/*! exports provided: BsNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsNavbarComponent", function() { return BsNavbarComponent; });
/* harmony import */ var shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var BsNavbarComponent = /** @class */ (function () {
    function BsNavbarComponent(auth, shoppingCartService) {
        this.auth = auth;
        this.shoppingCartService = shoppingCartService;
    }
    BsNavbarComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.auth.appUser$.subscribe(function (appUser) { return _this.appUser = appUser; });
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BsNavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    BsNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'bs-navbar',
            template: __webpack_require__(/*! ./bs-navbar.component.html */ "./src/app/bs-navbar/bs-navbar.component.html"),
            styles: [__webpack_require__(/*! ./bs-navbar.component.css */ "./src/app/bs-navbar/bs-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartService"]])
    ], BsNavbarComponent);
    return BsNavbarComponent;
}());



/***/ }),

/***/ "./src/app/check-out/check-out.component.css":
/*!***************************************************!*\
  !*** ./src/app/check-out/check-out.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/check-out/check-out.component.html":
/*!****************************************************!*\
  !*** ./src/app/check-out/check-out.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>Shipping</h2>\n  <div class=\"row\" *ngIf=\"cart$ | async as cart\">\n    <div class=\"col-6\">\n      <shipping-form [cart]=\"cart\"></shipping-form>\n    </div>\n    <div class=\"col-6\">\n      <shopping-cart-summary [cart]=\"cart\"></shopping-cart-summary>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/check-out/check-out.component.ts":
/*!**************************************************!*\
  !*** ./src/app/check-out/check-out.component.ts ***!
  \**************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    CheckOutComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckOutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-check-out',
            template: __webpack_require__(/*! ./check-out.component.html */ "./src/app/check-out/check-out.component.html"),
            styles: [__webpack_require__(/*! ./check-out.component.css */ "./src/app/check-out/check-out.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartService"]])
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button \n(click)=\"login()\"\nclass=\"btn btn-primary\">Login with Google</button>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.auth.login();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/my-orders/my-orders.component.css":
/*!***************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Orders</h1>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Customer</th>\n      <th>Date</th>\n      <th></th>\n    </tr>\n  </thead> \n  <tbody>\n    <tr *ngFor=\"let order of orders$ | async\">\n      <td>{{ order.shipping.name }}</td>\n      <td>{{ order.datePlaced | date}}</td>\n      <td>\n        <a href=\"#\">View</a>\n      </td>\n    </tr>\n  </tbody> \n</table>"

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.ts ***!
  \**************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent(authService, orderService) {
        this.authService = authService;
        this.orderService = orderService;
        this.orders$ = authService.user$
            .pipe(Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (u) { return orderService.getOrdersByUser(u.uid); }));
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    MyOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! ./my-orders.component.html */ "./src/app/my-orders/my-orders.component.html"),
            styles: [__webpack_require__(/*! ./my-orders.component.css */ "./src/app/my-orders/my-orders.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/order-success/order-success.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-success/order-success.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order-success/order-success.component.html":
/*!************************************************************!*\
  !*** ./src/app/order-success/order-success.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order-success works!\n</p>\n"

/***/ }),

/***/ "./src/app/order-success/order-success.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-success/order-success.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent() {
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    OrderSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__(/*! ./order-success.component.html */ "./src/app/order-success/order-success.component.html"),
            styles: [__webpack_require__(/*! ./order-success.component.css */ "./src/app/order-success/order-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "./src/app/products/product-filter/product-filter.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/products/product-filter/product-filter.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.sticky-top{\r\n    top: 80px;\r\n}"

/***/ }),

/***/ "./src/app/products/product-filter/product-filter.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/products/product-filter/product-filter.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\n<div class=\"list-group\">\n    <a\n     class=\"list-group-item list-group-item-action\"\n     [class.action]=\"!category\"\n     routerLink=\"/\"\n     >All Categogries</a>\n    <a \n    *ngFor=\"let c of categories$ | async\" \n    routerLink=\"/\"\n    [queryParams]=\"{ category: c.$key }\"\n     class=\"list-group-item list-group-item-action\"\n     [class.active]=\"category === c.$key\"\n     >\n      {{ c.name }}\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/product-filter/product-filter.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/products/product-filter/product-filter.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/category.service */ "./src/app/shared/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent(categoryService) {
        this.categories$ = categoryService.getAll();
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('category'),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "category", void 0);
    ProductFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-filter',
            template: __webpack_require__(/*! ./product-filter.component.html */ "./src/app/products/product-filter/product-filter.component.html"),
            styles: [__webpack_require__(/*! ./product-filter.component.css */ "./src/app/products/product-filter/product-filter.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-3 {  \r\n    padding-right: 71px;\r\n    padding: 10px;\r\n}"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-3\">\n    <product-filter [category]=\"category\" ></product-filter>\n  </div>\n  <div class=\"col\">\n      <div class=\"row\" *ngIf=\"cart$ | async as cart\">\n          <ng-container *ngFor=\"let p of filterProducts;let i = index\">\n              <div class=\"col\">\n               <product-card [product]=\"p\" [shopping-cart]=\"cart\" ></product-card>\n               </div>\n                  <div  *ngIf=\"(i + 1) % 2 ===0\" class=\"w-100\"></div>\n          </ng-container>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(route, productService, shoppingCartService) {
        this.route = route;
        this.productService = productService;
        this.shoppingCartService = shoppingCartService;
        this.products = [];
        this.filterProducts = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        this.populatProducts();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsComponent.prototype.populatProducts = function () {
        var _this = this;
        this.productService
            .getAll()
            .pipe(Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (products) {
            _this.products = products;
            return _this.route.queryParamMap;
        }))
            .subscribe(function (params) {
            _this.category = params.get('category');
            _this.applyFilter();
        });
    };
    ProductsComponent.prototype.applyFilter = function () {
        var _this = this;
        this.filterProducts = (this.category) ?
            this.products.filter(function (p) { return p.category === _this.category; }) :
            this.products;
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.card{\r\n    margin-bottom: 30px;\r\n}\r\n.card-footer{\r\n    padding: 0;\r\n}\r\n.card-footer button{\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div  *ngIf=\"product.title\" class=\"card\">\n    <img *ngIf=\"product.imageUrl\" class=\"card-img-top\" [src]=\" product.imageUrl \" alt=\"{{ product.title }}\">\n     <div class=\"card-body\">\n    <h5 class=\"card-title\"> {{ product.title }} </h5>\n    <p class=\"card-text\">{{ product.price | currency:'USD': true }}</p>\n  </div>\n  <div *ngIf=\"showActions && shoppingCart\" class=\"card-footer\">\n      <button  \n      *ngIf=\"shoppingCart.getQuantity(product) === 0;else updateQuantity\"\n      (click)=\"addToCart()\"\n      class=\"btn btn-secondary btn-block\">Add to Card</button>\n      <ng-template #updateQuantity>\n        <product-quantity [product]=\"product\" [shopping-cart]=\"shoppingCart\">\n        </product-quantity>\n      </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(cartService) {
        this.cartService = cartService;
        this.showActions = true;
    }
    ProductCardComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('product'),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('show-actions'),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "showActions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('shopping-cart'),
        __metadata("design:type", shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"])
    ], ProductCardComponent.prototype, "shoppingCart", void 0);
    ProductCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/shared/components/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.css */ "./src/app/shared/components/product-card/product-card.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/product-quantity/product-quantity.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/product-quantity/product-quantity.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/product-quantity/product-quantity.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/product-quantity/product-quantity.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\">\n    <div class=\"col-2\">\n        <button\n        (click)=\"removeFromCart()\"\n         class=\"btn btn-secondary btn-block\">-</button>  \n    </div>\n    <div class=\"col text-center\">\n        {{ shoppingCart.getQuantity(product) }} in cart\n    </div>\n    <div class=\"col-2\">\n        <button \n        (click)=\"addToCart()\"\n        class=\"btn btn-secondary btn-block\">+</button>  \n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/product-quantity/product-quantity.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/product-quantity/product-quantity.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductQuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQuantityComponent", function() { return ProductQuantityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductQuantityComponent = /** @class */ (function () {
    function ProductQuantityComponent(cartService) {
        this.cartService = cartService;
    }
    ProductQuantityComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    ProductQuantityComponent.prototype.removeFromCart = function () {
        this.cartService.removeFromCart(this.product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('product'),
        __metadata("design:type", Object)
    ], ProductQuantityComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('shopping-cart'),
        __metadata("design:type", Object)
    ], ProductQuantityComponent.prototype, "shoppingCart", void 0);
    ProductQuantityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-quantity',
            template: __webpack_require__(/*! ./product-quantity.component.html */ "./src/app/shared/components/product-quantity/product-quantity.component.html"),
            styles: [__webpack_require__(/*! ./product-quantity.component.css */ "./src/app/shared/components/product-quantity/product-quantity.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], ProductQuantityComponent);
    return ProductQuantityComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/order.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/order.ts ***!
  \****************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order(userId, shipping, shoppingCart) {
        this.userId = userId;
        this.shipping = shipping;
        this.shoppingCart = shoppingCart;
        this.datePlaced = new Date().getTime();
        this.items = shoppingCart.items.map(function (i) {
            return {
                product: {
                    title: i.title,
                    imageUrl: i.imageUrl,
                    price: i.price,
                },
                quantity: i.quantity,
                totalPrice: i.totalPrice
            };
        });
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/shared/models/shopping-cart-item.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/shopping-cart-item.ts ***!
  \*****************************************************/
/*! exports provided: ShoppingCartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartItem", function() { return ShoppingCartItem; });
var ShoppingCartItem = /** @class */ (function () {
    function ShoppingCartItem(init) {
        Object.assign(this, init);
    }
    Object.defineProperty(ShoppingCartItem.prototype, "totalPrice", {
        get: function () {
            return this.price * this.quantity;
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingCartItem;
}());



/***/ }),

/***/ "./src/app/shared/models/shopping-cart.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/shopping-cart.ts ***!
  \************************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
/* harmony import */ var _shopping_cart_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart-item */ "./src/app/shared/models/shopping-cart-item.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(itemsMap) {
        this.itemsMap = itemsMap;
        this.items = [];
        this.itemsMap = itemsMap || {};
        for (var productId in itemsMap) {
            var item = itemsMap[productId];
            this.items.push(new _shopping_cart_item__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartItem"](__assign({}, item, { $key: productId })));
        }
    }
    ShoppingCart.prototype.getQuantity = function (product) {
        console.log;
        var item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    };
    Object.defineProperty(ShoppingCart.prototype, "totalPrice", {
        get: function () {
            var sum = 0;
            for (var productId in this.items)
                sum += this.items[productId].totalPrice;
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "totalItemsCount", {
        get: function () {
            var count = 0;
            for (var productId in this.itemsMap)
                count += this.itemsMap[productId].quantity;
            return count;
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingCart;
}());



/***/ }),

/***/ "./src/app/shared/services/admin-auth-guard.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/admin-auth-guard.service.ts ***!
  \*************************************************************/
/*! exports provided: AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminAuthGuard = /** @class */ (function () {
    function AdminAuthGuard(auth) {
        this.auth = auth;
    }
    AdminAuthGuard.prototype.canActivate = function (route, state) {
        return this.auth.appUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (appUser) { return appUser.isAdmin; }));
    };
    AdminAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user)
                return true;
            _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/firebase-browser.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(userService, afAuth, route) {
        this.userService = userService;
        this.afAuth = afAuth;
        this.route = route;
        this.user$ = afAuth.authState;
    }
    AuthService.prototype.login = function () {
        var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        this.afAuth.auth.signInWithRedirect(new firebase__WEBPACK_IMPORTED_MODULE_6__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    Object.defineProperty(AuthService.prototype, "appUser$", {
        get: function () {
            var _this = this;
            return this.user$.pipe(Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (user) {
                if (user)
                    return _this.userService.get(user.uid);
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].of(null);
            }));
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AuthService);
    return AuthService;
}());

// return this.user$,
// switchMap(user => this.userService.get(user.uid));
// return this.user$
// .switchMap(user => {
//   if (user) return this.userService.get(user.uid);
//   return Observable.of(null);
// });   


/***/ }),

/***/ "./src/app/shared/services/category.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/category.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = /** @class */ (function () {
    function CategoryService(db) {
        this.db = db;
    }
    CategoryService.prototype.getAll = function () {
        return this.db.list('/categories', {
            query: {
                orderByChild: 'name'
            }
        });
    };
    CategoryService.prototype.getCategories = function () {
        return this.db.list('/products', {
            query: {
                orderByChild: 'name'
            }
        });
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabase"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/shared/services/order.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var OrderService = /** @class */ (function () {
    function OrderService(db, shoppingCartService) {
        this.db = db;
        this.shoppingCartService = shoppingCartService;
    }
    //placeOrder
    OrderService.prototype.placeOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.list('/orders').push(order)];
                    case 1:
                        result = _a.sent();
                        this.shoppingCartService.clearCart();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    OrderService.prototype.getOrders = function () {
        return this.db.list('/orders');
    };
    OrderService.prototype.getOrdersByUser = function (userId) {
        return this.db.list('/orders', {
            query: {
                orderByChild: 'userId',
                equalTo: userId
            }
        });
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _shopping_cart_service__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartService"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(db) {
        this.db = db;
    }
    ProductService.prototype.create = function (product) {
        return this.db.list('/products').push(product);
    };
    ProductService.prototype.getAll = function () {
        return this.db.list('/products');
    };
    ProductService.prototype.get = function (productId) {
        return this.db.object('/products/' + productId);
    };
    ProductService.prototype.update = function (productId, product) {
        return this.db.object('/products/' + productId).update(product);
    };
    ProductService.prototype.delete = function (productId) {
        return this.db.object('/products/' + productId).remove();
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/services/shopping-cart.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/shopping-cart.service.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(db) {
        this.db = db;
    }
    ShoppingCartService.prototype.getCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        return [2 /*return*/, this.db.object('/shopping-carts/' + cartId)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return new shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["ShoppingCart"](x.items); }))];
                }
            });
        });
    };
    ShoppingCartService.prototype.addToCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateItem(product, 1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.removeFromCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateItem(product, -1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.clearCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        this.db.object('/shopping-carts/' + cartId + '/items').remove();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.prototype.create = function () {
        return this.db.list('/shopping-carts').push({
            dateCreated: new Date().getTime()
        });
    };
    ShoppingCartService.prototype.getItem = function (cartId, productId) {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    };
    ShoppingCartService.prototype.getOrCreateCartId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cartId = localStorage.getItem('cartId');
                        if (cartId)
                            return [2 /*return*/, cartId];
                        return [4 /*yield*/, this.create()];
                    case 1:
                        result = _a.sent();
                        localStorage.setItem('cartId', result.key);
                        return [2 /*return*/, result.key];
                }
            });
        });
    };
    ShoppingCartService.prototype.updateItem = function (product, change) {
        return __awaiter(this, void 0, void 0, function () {
            var cartId, item$;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        item$ = this.getItem(cartId, product.$key);
                        item$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (item) {
                            var quantity = (item.quantity || 0) + change;
                            if (quantity === 0)
                                item$.remove();
                            else
                                item$.update({
                                    title: product.title,
                                    imageUrl: product.imageUrl,
                                    price: product.price,
                                    quantity: quantity
                                });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.save = function (user) {
        this.db.object('/users/' + user.uid).update({
            name: user.displayName,
            email: user.email
        });
    };
    UserService.prototype.get = function (uid) {
        return this.db.object('/users/' + uid);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/components/product-card/product-card.component */ "./src/app/shared/components/product-card/product-card.component.ts");
/* harmony import */ var shared_components_product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/components/product-quantity/product-quantity.component */ "./src/app/shared/components/product-quantity/product-quantity.component.ts");
/* harmony import */ var shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var shared_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var shared_services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var shared_services_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/services/order.service */ "./src/app/shared/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_2__["ProductCardComponent"],
                shared_components_product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_3__["ProductQuantityComponent"],
            ],
            exports: [
                shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_2__["ProductCardComponent"],
                shared_components_product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_3__["ProductQuantityComponent"],
            ],
            providers: [
                shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
                shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
                shared_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"],
                shared_services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"],
                shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_9__["ShoppingCartService"],
                shared_services_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shipping-form/shipping-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shipping-form/shipping-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shipping-form/shipping-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/shipping-form/shipping-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"\">Name</label>\n      <input #name=\"ngModel\" name=\"name\" [(ngModel)]=\"shipping.name\" type=\"text\" class=\"form-control\" required>\n      <div class=\"alert alert-danger\" *ngIf=\"name.touched && name.invalid\">\n        <div *ngIf=\"name.errors.required\">Name is required.</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">Address</label>\n      <input #addressLine1=\"ngModel\" name=\"addressLine1\" [(ngModel)]=\"shipping.addressLine1\" type=\"text\" class=\"form-control\" placeholder=\"Line 1\" required>\n      <div class=\"alert alert-danger\" *ngIf=\"addressLine1.touched && addressLine1.invalid\">\n        <div *ngIf=\"addressLine1.errors.required\">Address Line 1 is required.</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\"></label>\n      <input #addressLine2=\"ngModel\" name=\"addressLine2\" [(ngModel)]=\"shipping.addressLine2\" type=\"text\" class=\"form-control\" placeholder=\"Line 2\" required>\n      <div class=\"alert alert-danger\" *ngIf=\"addressLine2.touched && addressLine2.invalid\">\n        <div *ngIf=\"addressLine2.errors.required\">Address Line 2 is required.</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">City</label>\n      <input #city=\"ngModel\" name=\"city\" [(ngModel)]=\"shipping.city\" type=\"text\" class=\"form-control\" required>\n      <div class=\"alert alert-danger\" *ngIf=\"city.touched && city.invalid\">\n        <div *ngIf=\"city.errors.required\">City is required.</div>\n      </div>\n    </div>\n    <button \n      [disabled]=\"!f.valid\"\n      (click)=\"placeOrder()\"\n      class=\"btn btn-primary\">Place Order</button>\n  </form>"

/***/ }),

/***/ "./src/app/shipping-form/shipping-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shipping-form/shipping-form.component.ts ***!
  \**********************************************************/
/*! exports provided: ShippingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFormComponent", function() { return ShippingFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var shared_models_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/models/order */ "./src/app/shared/models/order.ts");
/* harmony import */ var shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ShippingFormComponent = /** @class */ (function () {
    function ShippingFormComponent(router, authService, orderService) {
        this.router = router;
        this.authService = authService;
        this.orderService = orderService;
        this.shipping = {};
    }
    ShippingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription = this.authService.user$.subscribe(function (user) { return _this.userId = user.uid; });
    };
    ShippingFormComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    ShippingFormComponent.prototype.placeOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var order, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        order = new shared_models_order__WEBPACK_IMPORTED_MODULE_4__["Order"](this.userId, this.shipping, this.cart);
                        return [4 /*yield*/, this.orderService.placeOrder(order)];
                    case 1:
                        result = _a.sent();
                        this.router.navigate(['/order-success', result.$key]);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('cart'),
        __metadata("design:type", shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_5__["ShoppingCart"])
    ], ShippingFormComponent.prototype, "cart", void 0);
    ShippingFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shipping-form',
            template: __webpack_require__(/*! ./shipping-form.component.html */ "./src/app/shipping-form/shipping-form.component.html"),
            styles: [__webpack_require__(/*! ./shipping-form.component.css */ "./src/app/shipping-form/shipping-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]])
    ], ShippingFormComponent);
    return ShippingFormComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart-summary/shopping-cart-summary.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shopping-cart-summary/shopping-cart-summary.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping-cart-summary/shopping-cart-summary.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shopping-cart-summary/shopping-cart-summary.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Order Summary</h5>\n      <p class=\"card-text\">You have {{ cart.totalItemsCount }} items in yuor shopping cart.</p>\n      <ul class=\"list-group list-group-flush\">\n        <li *ngFor=\"let item of cart.items\" class=\"list-group-item\">\n          {{ item.quantity }} x  {{ item.title }}\n          <div class=\"float-right\">\n            {{ item.totalPrice | currency:'USD':true }}\n          </div>\n        </li>\n        <li class=\"list-group-item font-weight-bold\">\n            Total\n            <div class=\"float-right\">\n              {{ cart.totalPrice | currency:'USD':true }}\n            </div>\n        </li>\n      </ul>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/shopping-cart-summary/shopping-cart-summary.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shopping-cart-summary/shopping-cart-summary.component.ts ***!
  \**************************************************************************/
/*! exports provided: ShoppingCartSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartSummaryComponent", function() { return ShoppingCartSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartSummaryComponent = /** @class */ (function () {
    function ShoppingCartSummaryComponent() {
    }
    ShoppingCartSummaryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('cart'),
        __metadata("design:type", shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_1__["ShoppingCart"])
    ], ShoppingCartSummaryComponent.prototype, "cart", void 0);
    ShoppingCartSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shopping-cart-summary',
            template: __webpack_require__(/*! ./shopping-cart-summary.component.html */ "./src/app/shopping-cart-summary/shopping-cart-summary.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart-summary.component.css */ "./src/app/shopping-cart-summary/shopping-cart-summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingCartSummaryComponent);
    return ShoppingCartSummaryComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.thumbnail{\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 100%;\r\n    background-size: cover;\r\n}"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>Shopping Cart</h1>\n<div class=\"row col-10\" *ngIf=\"cart$ | async as cart\">\n    <p>\n        You have {{ cart.totalItemsCount }} items in your shopping cart.\n        <button\n        *ngIf=\"cart.items.length\"\n         (click)=\"clearCart()\"\n         class=\"btn btn-light btn-sm\">Clear Shopping Cart</button>\n      </p>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th></th>\n            <th>Product</th>\n            <th  class=\"text-center\" style=\"width: 230px\">Quantity</th>\n            <th class=\"text-right\" style=\"width: 200px\">Price</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of cart.items\">\n            <td>\n              <div [style.backgroundImage]=\"'url(' + item.imageUrl + ')'\" class=\"thumbnail\"></div>\n            </td>\n            <td>\n              {{ item.title }}\n            </td>\n            <td>\n               <product-quantity [product]=\"item\" [shopping-cart]=\"cart\" >\n               </product-quantity>\n            </td>\n            <td  class=\"text-right\">{{ item.totalPrice | currency: 'USD':true }}</td>\n          </tr>\n        </tbody>\n        <tfoot>\n          <tr>\n            <th></th>\n            <th></th>\n            <th  class=\"text-right\">{{ cart.totalPrice | currency: 'USD':true }}</th>\n          </tr>\n        </tfoot>\n      </table>\n      <a\n      *ngIf=\"cart.items.length\"\n      routerLink=\"/check-out\"\n      class=\"btn btn-primary btn-sm\">Check Out</a>\n</div>\n"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartComponent.prototype.clearCart = function () {
        this.shoppingCartService.clearCart();
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyANuE7WjzWLlYgxR3_HmgU4Ua7iFoTkjs4",
        authDomain: "oshop2-2d4f5.firebaseapp.com",
        databaseURL: "https://oshop2-2d4f5.firebaseio.com",
        projectId: "oshop2-2d4f5",
        storageBucket: "oshop2-2d4f5.appspot.com",
        messagingSenderId: "36136795046"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\גיא\Desktop\kors WebPack\Project-OrganicShop\oshop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map