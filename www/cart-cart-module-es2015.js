(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\"> <ion-menu-button></ion-menu-button> </ion-buttons>\n        <ion-title>Carrinho de Compras</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor=\"let item of items\">\n            <ion-item>\n                <ion-label>\n                    {{item.product.factory.name}} {{item.product.name}}\n                    <p>{{item.amount}} un * {{item.price.toFixed(2)}} = R$ {{item.price.toFixed(2)}}</p>\n                </ion-label>\n            </ion-item>\n\n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"danger\" expandable>\n                    <ion-icon name=\"trash\" size=\"large\" (click)=\"delete(item)\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n\n        <ion-item>\n            <ion-label>Total do Pedido: R$ {{total.toFixed(2)}}</ion-label>\n        </ion-item>\n\n    </ion-list>\n\n    <ion-button expand=\"block\" (click)=\"invoice()\"> Fechar o Pedido </ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let CartPageModule = class CartPageModule {
};
CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                { path: '', component: _cart_page__WEBPACK_IMPORTED_MODULE_5__["CartPage"] }
            ])
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_5__["CartPage"]]
    })
], CartPageModule);



/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/constants */ "./src/utils/constants.ts");






let CartPage = class CartPage {
    constructor(router, route, cartService, http) {
        this.router = router;
        this.route = route;
        this.cartService = cartService;
        this.http = http;
    }
    ngOnInit() {
        this.items = this.route.snapshot.data['items'];
        this.token = this.route.snapshot.data['token'];
        let total = 0.0;
        this.items.forEach((item) => {
            total += item.price * item.amount;
        });
        this.total = total;
    }
    invoice() {
        if (this.isEmpty())
            return;
        const options = {
            headers: { Authorization: "Bearer " + this.token }
        };
        this.http.post(src_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BASE_URL"] + "sales/order/invoice", this.items, options)
            .subscribe((data) => {
            console.log(data);
            this.cartService.clear();
            this.router.navigate(['list']);
        }, (error) => {
            console.error(error);
            if (error.status === src_utils_constants__WEBPACK_IMPORTED_MODULE_5__["HttpCode"].BAD_REQUEST) {
                alert(error.error);
                this.router.navigate(['login']);
            }
            else if (error.status === src_utils_constants__WEBPACK_IMPORTED_MODULE_5__["HttpCode"].FORBIDDEN) {
                alert("Você precisa logar para fechar o pedido!");
                this.router.navigate(['login']);
            }
            else {
                alert("Erro ao buscar os pedidos: " + error.error);
            }
        });
    }
    isEmpty() {
        return (this.items.length <= 0);
    }
    delete(item) {
        this.cartService.remove(item).then((items) => {
            this.items = items;
        });
    }
};
CartPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html"),
        styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], CartPage);



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map