(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\"> <ion-menu-button></ion-menu-button> </ion-buttons>\n        <ion-title>Autenticar</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-segment (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"login\" checked>\n            <ion-label>Entrar</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"signup\">\n            <ion-label>Registrar</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n\n    <ion-list *ngIf=\"!isSignup\">\n        <ion-item>\n            <ion-label>Email</ion-label>\n            <ion-input type=\"email\" required=\"true\" [(ngModel)]=\"user.login\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Senha</ion-label>\n            <ion-input type=\"password\" required=\"true\" [(ngModel)]=\"user.password\"></ion-input>\n        </ion-item>\n        <ion-button expand=\"block\" (click)=\"login()\">Entrar</ion-button>\n    </ion-list>\n\n    <ion-list *ngIf=\"isSignup\">\n        <ion-item>\n            <ion-label>Email</ion-label>\n            <ion-input type=\"email\" required=\"true\" [(ngModel)]=\"customer.email\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Senha</ion-label>\n            <ion-input type=\"password\" required=\"true\" [(ngModel)]=\"user.password\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Confirmar Senha</ion-label>\n            <ion-input type=\"password\" required=\"true\" [(ngModel)]=\"confirmPassword\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Nome</ion-label>\n            <ion-input type=\"text\" required=\"true\" [(ngModel)]=\"customer.name\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Idade</ion-label>\n            <ion-input type=\"number\" required=\"true\" [(ngModel)]=\"customer.age\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Endereço</ion-label>\n            <ion-input type=\"text\" required=\"false\" [(ngModel)]=\"customer.address\"></ion-input>\n        </ion-item>\n\n        <ion-button expand=\"block\" (click)=\"signup()\">Registrar</ion-button>\n    </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                    { path: '', component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"] }
                ])
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment {\n  padding: 1px;\n}\n\nion-button {\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91ZWRzb25yZWlzL0RvY3VtZW50cy9Qcm9qZXRvcy9mYWN1bGRhZGVzL2V4YW1wbGUtZWNvbW1lcmNlLWlvbmljL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudCB7XG4gICAgcGFkZGluZzogMXB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDE1cHg7XG59IiwiaW9uLXNlZ21lbnQge1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW46IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/model/user */ "./src/model/user.ts");
/* harmony import */ var src_model_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/model/customer */ "./src/model/customer.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var LoginPage = /** @class */ (function () {
    function LoginPage(http, userService, router) {
        var _this = this;
        this.http = http;
        this.userService = userService;
        this.router = router;
        this.isSignup = false;
        this.confirmPassword = "";
        this.successCallback = function (token) {
            _this.userService.login(_this.user.login, token).then(function () {
                _this.router.navigate(['home/tab2']);
            });
        };
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.ngOnInit = function () {
        this.user = new src_model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.customer = new src_model_customer__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
    };
    LoginPage.prototype.signup = function () {
        if (!this.validateForm())
            return;
        this.user.login = this.customer.email;
        this.customer.user = this.user;
        this.http.post(_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BASE_URL"] + 'user/customer/add', this.customer, { responseType: "text" })
            .subscribe(this.successCallback, function (error) { return alert(error.error); });
    };
    LoginPage.prototype.login = function () {
        this.http.post(_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BASE_URL"] + "user/login", this.user, { responseType: "text" })
            .subscribe(this.successCallback, function (error) { return alert("Email / Senha inválido(a)!"); });
    };
    LoginPage.prototype.validateForm = function () {
        if (this.customer.email === undefined || this.customer.email.trim() === '') {
            alert("Este email é inválido!");
            return false;
        }
        if (!this.customer.email.includes("@") || !this.customer.email.includes(".")) {
            alert("Este email é inválido!");
            return false;
        }
        if (this.customer.age === undefined || this.customer.age <= 0) {
            alert("Esta idade não é permitida!");
            return false;
        }
        if (this.user.password !== this.confirmPassword) {
            alert("As senhas não conferem!");
            return false;
        }
        return true;
    };
    LoginPage.prototype.segmentChanged = function (event) {
        if (event.detail.value === LoginPage_1.SIGNUP) {
            this.isSignup = true;
        }
        else {
            this.isSignup = false;
        }
    };
    var LoginPage_1;
    LoginPage.SIGNUP = "signup";
    LoginPage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    LoginPage = LoginPage_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/model/customer.ts":
/*!*******************************!*\
  !*** ./src/model/customer.ts ***!
  \*******************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());



/***/ }),

/***/ "./src/model/user.ts":
/*!***************************!*\
  !*** ./src/model/user.ts ***!
  \***************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map