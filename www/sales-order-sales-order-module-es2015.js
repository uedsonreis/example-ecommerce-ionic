(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-order-sales-order-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sales-order/sales-order.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sales-order/sales-order.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\"> <ion-back-button></ion-back-button> </ion-buttons>\n        <ion-title>Pedido Nº {{salesOrder.id}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n        <ion-item *ngFor=\"let item of salesOrder.items\">\n            <ion-label>\n                {{item.product.factory.name}} {{item.product.name}}\n                <p>{{item.amount}} un * {{item.price.toFixed(2)}} = R$ {{item.price.toFixed(2)}}</p>\n            </ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Total do Pedido: R$ {{total.toFixed(2)}}</ion-label>\n        </ion-item>\n    </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/sales-order/sales-order.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sales-order/sales-order.module.ts ***!
  \***************************************************/
/*! exports provided: SalesOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOrderPageModule", function() { return SalesOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sales_order_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sales-order.page */ "./src/app/sales-order/sales-order.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let SalesOrderPageModule = class SalesOrderPageModule {
};
SalesOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                { path: '', component: _sales_order_page__WEBPACK_IMPORTED_MODULE_5__["SalesOrderPage"] }
            ])
        ],
        declarations: [_sales_order_page__WEBPACK_IMPORTED_MODULE_5__["SalesOrderPage"]]
    })
], SalesOrderPageModule);



/***/ }),

/***/ "./src/app/sales-order/sales-order.page.scss":
/*!***************************************************!*\
  !*** ./src/app/sales-order/sales-order.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVzLW9yZGVyL3NhbGVzLW9yZGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sales-order/sales-order.page.ts":
/*!*************************************************!*\
  !*** ./src/app/sales-order/sales-order.page.ts ***!
  \*************************************************/
/*! exports provided: SalesOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOrderPage", function() { return SalesOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SalesOrderPage = class SalesOrderPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.salesOrder = this.router.getCurrentNavigation().extras.state.salesOrder;
        let total = 0.0;
        this.salesOrder.items.forEach((item) => {
            total += item.price * item.amount;
        });
        this.total = total;
    }
};
SalesOrderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SalesOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales-order',
        template: __webpack_require__(/*! raw-loader!./sales-order.page.html */ "./node_modules/raw-loader/index.js!./src/app/sales-order/sales-order.page.html"),
        styles: [__webpack_require__(/*! ./sales-order.page.scss */ "./src/app/sales-order/sales-order.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SalesOrderPage);



/***/ })

}]);
//# sourceMappingURL=sales-order-sales-order-module-es2015.js.map