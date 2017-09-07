webpackJsonp([4],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, alertCtrl, navParams, projectService, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.projectService = projectService;
        this.storage = storage;
        this.email = "";
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.getdata(val);
        });
    }
    ProfilePage.prototype.accessGallery = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].getPicture({
            sourceType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].DestinationType.DATA_URL
        }).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.projectService.changeStatus({ email: _this.email,
                image: _this.base64Image })
                .subscribe(function (datas) {
                _this.getdata(_this.email);
            });
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.changeName = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Name',
            inputs: [
                {
                    name: 'name',
                    placeholder: this.name
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Done',
                    handler: function (data) {
                        if (data.name) {
                            _this.projectService.changeName({ email: _this.email,
                                name: data.name })
                                .subscribe(function (datas) {
                                _this.name = data.name;
                                _this.getdata(_this.email);
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.changeStatus = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'change Status',
            inputs: [
                {
                    name: 'status',
                    placeholder: this.status
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Done',
                    handler: function (data) {
                        if (data.status) {
                            _this.projectService.changeStatus({ email: _this.email,
                                status: data.status })
                                .subscribe(function (datas) {
                                _this.status = data.status;
                                _this.getdata(_this.email);
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.changeMobileNumber = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Mobile Number',
            inputs: [
                {
                    name: 'mobile',
                    placeholder: this.mobileNumber
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Done',
                    handler: function (data) {
                        console.log(data.mobile);
                        if (data.mobile) {
                            _this.projectService.changeMobileNumber({ email: _this.email,
                                mobile: data.mobile })
                                .subscribe(function (datas) {
                                _this.mobileNumber = data.mobile;
                                _this.getdata(_this.email);
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.getdata = function (email) {
        var _this = this;
        this.projectService.getProfileInfo({ email: email })
            .subscribe(function (datas) {
            console.log(datas);
            _this.name = datas.user.name;
            _this.mobileNumber = datas.user.mobile;
            _this.status = datas.user.status;
            _this.base64Image = datas.user.image;
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/home/jamal/Desktop/Facebook Clone/client/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>profile</ion-title>\n    <ion-buttons right>\n    <button (click)="onClickSettings()" >\n<ion-icon ios="ios-settings" md="md-settings"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n <img *ngIf="!base64Image" (click)="accessGallery()" src="assets/icon/fb_logo.png" height="100px" style="\n  border-radius: 50%;\n    display: block;\n  margin-left: auto;\n  margin-right: auto " >\n\n <img  [src]="base64Image" *ngIf="base64Image" (click)="accessGallery()" height="100px" style="\n  border-radius: 50%;\n    display: block;\n  margin-left: auto;\n  margin-right: auto " >\n	 <div text-center>\n\n    \n    <i text-center style="text-align: center;"> {{name}} </i><br>\n 	<small>{{status}}</small>\n  </div>\n  <p>{{email}}</p>\n  <p>{{mobileNumber}}</p>\n\n  <ion-list>\n\n  <ion-list-header>\n    Info:\n  </ion-list-header>\n\n\n  <button ion-item (click)="changeName()">\n	Change Name\n  </button>\n\n\n  <button ion-item (click)="changeStatus()">\n    Change Status\n  </button>\n  <button ion-item (click)="changeMobileNumber()">\n    Change Mobile Number\n  </button>\n\n\n</ion-list>\n\n	\n\n\n</ion-content>\n'/*ion-inline-end:"/home/jamal/Desktop/Facebook Clone/client/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__app_app_service__["a" /* ProjectService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignUpPage = (function () {
    function SignUpPage(navCtrl, navParams, projectService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projectService = projectService;
        this.storage = storage;
        this.msg = "";
    }
    SignUpPage.prototype.signUp = function (name, mobile, email, password) {
        var _this = this;
        this.msg = "";
        this.projectService.signUp({ name: name,
            mobile: mobile,
            email: email,
            password: password })
            .subscribe(function (datas) {
            if (datas == "signup") {
                _this.storage.set("email " + email, email);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__main_main__["a" /* MainPage */]);
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            }
            else
                _this.msg = datas;
        });
    };
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sign-up',template:/*ion-inline-start:"/home/jamal/Desktop/Facebook Clone/client/src/pages/sign-up/sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n<img src="assets/icon/fb_logo.png" height="100px"  style="display: block;\n	margin-left: auto;\n	margin-right: auto">\n	<form   #f="ngForm">\n		<ion-item style="margin-bottom: 30px">\n			<ion-label>Name:</ion-label>\n			<ion-input type="text" name="name" [(ngModel)]="name"  placeholder="@someone" required></ion-input>\n		</ion-item>\n		<ion-item style="margin-bottom: 30px">\n			<ion-label>Mobile:</ion-label>\n			<ion-input type="text" name="mobile" [(ngModel)]="mobile"  placeholder="07########" required></ion-input>\n		</ion-item>\n		<ion-item style="margin-bottom: 30px">\n			<ion-label>E-mail:</ion-label>\n			<ion-input type="email" name="email" [(ngModel)]="email"  placeholder="someone@example.com" required></ion-input>\n		</ion-item>\n\n		<ion-item style="margin-bottom: 30px">\n			<ion-label>password:</ion-label>\n			<ion-input type="password" name="password" [(ngModel)]="password" placeholder="********" required></ion-input>\n		</ion-item>\n	</form>\n	<p style="color: red">{{msg}}</p>\n	<button type="submit" (click)="signUp(name,mobile,email,password)" ion-button block [disabled]="!f.valid">SiginIn</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/jamal/Desktop/Facebook Clone/client/src/pages/sign-up/sign-up.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], SignUpPage);

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_main__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, projectService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projectService = projectService;
        this.storage = storage;
        this.msg = "";
    }
    LoginPage.prototype.logIn = function (email, pass) {
        var _this = this;
        this.msg = "";
        this.projectService.logIn({ email: email,
            password: pass })
            .subscribe(function (datas) {
            if (datas == "signin") {
                _this.storage.set('email', email);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__main_main__["a" /* MainPage */]);
            }
            else
                _this.msg = datas;
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('email').then(function (val) {
            if (val) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__main_main__["a" /* MainPage */]);
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            }
        });
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.siginUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/jamal/Desktop/Facebook Clone/client/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n	<img src="assets/icon/fb_logo.png" height="100px"  style="display: block;\n	margin-left: auto;\n	margin-right: auto">\n	<form   #f="ngForm">\n		<ion-item style="margin-bottom: 30px">\n			<ion-label>E-mail</ion-label>\n			<ion-input type="email" name="email" [(ngModel)]="email"  placeholder="someone@example.com" required></ion-input>\n		</ion-item>\n\n		<ion-item style="margin-bottom: 30px">\n			<ion-label>password</ion-label>\n			<ion-input type="password" name="password" [(ngModel)]="password" placeholder="********" required></ion-input>\n		</ion-item>\n	</form>\n	<p style="color: red">{{msg}}</p>\n	<button type="submit" (click)="logIn(email,password)" ion-button block [disabled]="!f.valid">SiginIn</button>\n	<a (click)="siginUp()">are you new user?</a>\n</ion-content>\n'/*ion-inline-end:"/home/jamal/Desktop/Facebook Clone/client/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		714,
		3
	],
	"../pages/main/main.module": [
		712,
		2
	],
	"../pages/profile/profile.module": [
		711,
		1
	],
	"../pages/sign-up/sign-up.module": [
		713,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(396);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sign_up_sign_up__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_main_main__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_sign_up_sign_up__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_sign_up_sign_up__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        console.log("Injectable");
    }
    ProjectService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('a20e6aca-ee83-44bc-8033-b41f3078c2b6:c199f9c8-0548-4be79655-7ef7d7bf9d20'));
    };
    ProjectService.prototype.logIn = function (record) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        //var content = JSON.stringify(record);
        return this.http.post('/api/login', record, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.signUp = function (record) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        //var content = JSON.stringify(record);
        return this.http.post('/api/signup', record, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.getProfileInfo = function (record) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        //var content = JSON.stringify(record);
        return this.http.post('/api/getprofileinfo', record, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.changeMobileNumber = function (record) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        //var content = JSON.stringify(record);
        return this.http.post('/api/changemobilenumber', record, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.changeStatus = function (record) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        //var content = JSON.stringify(record);
        return this.http.post('/api/changestatus', record, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.changeName = function (record) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        //var content = JSON.stringify(record);
        return this.http.post('/api/changename', record, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.onPostData = function (record) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        //var content = JSON.stringify(record);
        return this.http.post('/api/onpostdata', record, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.changeImage = function (record) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        //var content = JSON.stringify(record);
        return this.http.post('/api/changeimage', record, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.postMethod = function (record) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        //var content = JSON.stringify(record);
        return this.http.post('/api/postmethod', record, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.getMethod = function () {
        return this.http.get('/api/getMethod').map(function (res) { return res.json(); });
    };
    return ProjectService;
}());
ProjectService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProjectService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MainPage = (function () {
    function MainPage(navCtrl, navParams, storage, geolocation, projectService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.geolocation = geolocation;
        this.projectService = projectService;
        this.storage.get('email').then(function (val) {
            _this.email = val;
        });
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.onViewProfilePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */]);
    };
    MainPage.prototype.getPost = function (typeRequest) {
        if (typeRequest == 'allStory') {
            console.log(typeRequest);
        }
        else if (typeRequest == 'allStory') {
            console.log(typeRequest);
        }
        else {
            console.log(typeRequest);
        }
    };
    MainPage.prototype.onNavigate = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (location) {
            console.log('location fetched successfully ' + location);
            _this.locationLat = location.coords.latitude,
                _this.locationLong = location.coords.longitude;
            console.log("Location data fetched correctly!!");
        })
            .catch(function (err) {
            console.log('An error ocurred');
        });
    };
    MainPage.prototype.onSelectImage = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].getPicture({
            sourceType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].DestinationType.DATA_URL
        }).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        });
    };
    MainPage.prototype.onPostData = function () {
        this.projectService.onPostData({
            email: this.email,
            postText: this.postText,
            image: this.base64Image,
            location: { latitude: this.locationLat,
                longitude: this.locationLong }
        })
            .subscribe(function (data) {
        });
    };
    MainPage.prototype.getFavPost = function (email) {
    };
    MainPage.prototype.getAllPost = function () {
    };
    MainPage.prototype.getProfilePost = function (email) {
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"/home/jamal/Desktop/Facebook Clone/client/src/pages/main/main.html"*/'<!--\n  Generated template for the MainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<style type="text/css">\n	.opaque {\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\n.opaque .toolbar-background {\n  background-color: rgba(#f8f8f8, 0.55);\n}\n</style>\n<ion-header class="opaque">\n  <ion-navbar no-border-bottom>\n    <ion-title>Toy Story</ion-title>\n    <ion-buttons right>\n      <button (click)="onViewProfilePage()">\n        <ion-icon name="menu" ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="apps" primary>\n      <ion-segment-button value="allStory" (click)="getPost(\'allStory\')" >All</ion-segment-button>\n      <ion-segment-button value="favsStory"(click)="getPost(\'favsStory\')" >favs</ion-segment-button>\n      <ion-segment-button value="myStory" (click)="getPost(\'myStory\')">My</ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n  <ion-item>\n    <ion-label floating>Write something...</ion-label>\n    <ion-textarea [(ngModel)]="postText"></ion-textarea>\n  </ion-item>\n  \n  <div style="float: right;">\n\n    <button ion-button icon-only  color="light" (click)="onNavigate()" > \n      <ion-icon ios="ios-navigate" md="md-navigate"></ion-icon>\n    </button>\n\n    <button ion-button icon-only  color="light" (click)="onSelectImage()"> \n      <ion-icon ios="ios-images" md="md-images"></ion-icon>\n    </button>\n\n    <button ion-button round outline (click)="onPostData()">Post</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/jamal/Desktop/Facebook Clone/client/src/pages/main/main.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__app_app_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_app_service__["a" /* ProjectService */]) === "function" && _e || Object])
], MainPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_main_main__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.storage = storage;
        //rootPage:any ;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_main_main__["a" /* MainPage */];
        // this.storage.get('email').then((val) => {
        //   if (val) {
        //       this.rootPage = MainPage;
        //     }
        //   else{
        //     this.rootPage  = LoginPage;
        //   }
        // });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/jamal/Desktop/Facebook Clone/client/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/jamal/Desktop/Facebook Clone/client/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, projectService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.projectService = projectService;
        this.something = "";
        navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        this.projectService.getMethod()
            .subscribe(function (datas) {
            console.log(datas);
            _this.something = datas.name;
        });
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/jamal/Desktop/Facebook Clone/client/src/pages/home/home.html"*/'<ion-header>\n </ion-header>\n\n<ion-content padding>\n  \n</ion-content>\n'/*ion-inline-end:"/home/jamal/Desktop/Facebook Clone/client/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* ProjectService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[391]);
//# sourceMappingURL=main.js.map