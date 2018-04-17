webpackJsonp([0],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contractor_jobs_contractor_jobs__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_jobs_customer_jobs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authentication_authentication__ = __webpack_require__(53);
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
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authProvider, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.statusBar = statusBar;
        this.user = { email: "", password: "", error: "", loading: false };
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.statusBar.backgroundColorByHexString("#5697ab");
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.user.loading = true;
        this.user.error = "";
        console.log("here");
        this.authProvider.login(this.user).then(function (token) {
            _this.authProvider.getUserData().then(function (user) {
                _this.user.loading = false;
                if (user["permission"] === "contractor") {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__contractor_jobs_contractor_jobs__["a" /* ContractorJobsPage */]);
                    _this.navCtrl.popToRoot();
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__customer_jobs_customer_jobs__["a" /* CustomerJobsPage */]);
                    _this.navCtrl.popToRoot();
                }
            }).catch(function (e) {
                _this.user.loading = false;
            });
        }).catch(function (e) {
            console.log(e);
            _this.user.loading = false;
            if (e && e.status === 401) {
                _this.user.error = "Invalid credentials";
            }
            else if (e && e.status === 422) {
                for (var _i = 0, _a = e.error.error.errors; _i < _a.length; _i++) {
                    var error = _a[_i];
                    _this.user.error = _this.user.error + error + " ";
                }
            }
            else {
                _this.user.error = e.message;
            }
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\pages\login\login.html"*/'<ion-content>\n    \n    <div class="login-top-section">\n    \n        <h1 class="logo-text">Mow My Lawn</h1>\n\n        <img class="logo" src="assets/imgs/logo-icon.png" />\n        \n        <p>Find or post lawn mowing jobs</p>\n        <div class=\'bg\'></div>\n        <div class="nectar-shape-divider-wrap " data-front="" data-style="curve_opacity" data-position="top"><svg class="nectar-shape-divider" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"> <path d="M 0 14 s 88.64 3.48 300 36 c 260 40 514 27 703 -10 l 12 28 l 3 36 h -1018 z"></path> <path d="M 0 45 s 271 45.13 500 32 c 157 -9 330 -47 515 -63 v 86 h -1015 z"></path> <path d="M 0 58 s 188.29 32 508 32 c 290 0 494 -35 494 -35 v 45 h -1002 z"></path> </svg></div>\n    </div>\n\n\n\n    \n    \n    <ion-list class="login-form" ion-card>\n\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input clearInput type="text" [(ngModel)]="user.email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input clearInput type="password" [(ngModel)]="user.password"></ion-input>\n        </ion-item>\n        \n        <button ion-button full color=\'secondary\' class="login-button" (click)="login()" [disabled]="user.loading">\n            Log In\n            <ion-spinner *ngIf="user.loading"></ion-spinner>\n        </button>\n        \n        <p class="login-error" *ngIf="user.error">{{user.error}}</p>\n         \n        <p>Don\'t have an account? <a (click)="signup()">Sign up</a></p>\n   \n        \n        \n    </ion-list>\n    \n\n</ion-content>\n\n\n'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__providers_authentication_authentication__["a" /* AuthenticationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_authentication_authentication__["a" /* AuthenticationProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindAddressModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FindAddressModal = /** @class */ (function () {
    function FindAddressModal(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.address = params.data.location;
    }
    FindAddressModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FindAddressModal.prototype.detail = function (address) {
        console.log(address);
        this.viewCtrl.dismiss(address[0]);
    };
    FindAddressModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'find-address',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\modals\find-address\find-address.html"*/'<ion-header>\n    <ion-toolbar color="primary">\n        <ion-title>\n            Find Address\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n    \n    <ion-list>      \n\n        \n        <google-places-autocomplete (callback)="detail($event)" key="AIzaSyBnYKCTzKwkOjRmnyuzKNSmDopgI2yWbns" [(ngModel)]="address"></google-places-autocomplete>\n \n\n    </ion-list>  \n        \n        \n</ion-content>\n\n'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\modals\find-address\find-address.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], FindAddressModal);
    return FindAddressModal;
}());

//# sourceMappingURL=find-address.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var google;
var GoogleMapsComponent = /** @class */ (function () {
    function GoogleMapsComponent(renderer, element, _document, storage, events) {
        this.renderer = renderer;
        this.element = element;
        this._document = _document;
        this.storage = storage;
        this.events = events;
        this.markers = [];
        this.circles = [];
        this.mapsLoaded = false;
    }
    GoogleMapsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("user").then(function (user) {
            if (user) {
                _this.profile = user.profile;
            }
            else {
                _this.profile = { latitude: -36.89479598377308, longitude: 174.752310118, radius: 20 };
            }
            if (_this.latitude) {
                _this.profile.latitude = _this.latitude;
            }
            if (_this.longitude) {
                _this.profile.longitude = _this.longitude;
            }
            if (_this.radius) {
                _this.profile.radius = _this.radius;
            }
            _this.init().then(function (res) {
                console.log("Google Maps ready.");
            }, function (err) {
                console.log(err);
            });
        });
    };
    GoogleMapsComponent.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadSDK().then(function (res) {
                _this.initMap().then(function (res) {
                    resolve(true);
                }, function (err) {
                    reject(err);
                });
            }, function (err) {
                reject(err);
            });
        });
    };
    GoogleMapsComponent.prototype.loadSDK = function () {
        var _this = this;
        console.log("Loading Google Maps SDK");
        return new Promise(function (resolve, reject) {
            if (!_this.mapsLoaded) {
                _this.injectSDK().then(function (res) {
                    resolve(true);
                }, function (err) {
                    reject(err);
                });
            }
            else {
                reject('SDK already loaded');
            }
        });
    };
    GoogleMapsComponent.prototype.injectSDK = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            window['mapInit'] = function () {
                _this.mapsLoaded = true;
                google = window["google"];
                resolve(true);
            };
            if (document.getElementById("googleMaps")) {
                _this.mapsLoaded = true;
                google = window["google"];
                resolve(true);
            }
            else {
                var script = _this.renderer.createElement('script');
                script.id = 'googleMaps';
                if (_this.apiKey) {
                    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + _this.apiKey + '&callback=mapInit';
                }
                else {
                    script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
                }
                _this.renderer.appendChild(_this._document.body, script);
            }
        });
    };
    GoogleMapsComponent.prototype.initMap = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var latLng = new google.maps.LatLng(_this.profile.latitude, _this.profile.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 8
            };
            _this.map = new google.maps.Map(_this.element.nativeElement, mapOptions);
            _this.map.addListener('click', function (event) {
                _this.addMarker(event.latLng);
                _this.events.publish("location:updated", event);
            });
            _this.addMarker(latLng);
            resolve(true);
        });
    };
    GoogleMapsComponent.prototype.updateRadius = function (radius, lat, lng) {
        this.profile.radius = radius;
        this.profile.latitude = lat;
        this.profile.longitude = lng;
        console.log(this.profile);
        var latLng = new google.maps.LatLng(this.profile.latitude, this.profile.longitude);
        this.addMarker(latLng);
    };
    GoogleMapsComponent.prototype.addMarker = function (latLng) {
        //clear existing markers
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
        this.markers = [];
        //add the market
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        this.markers.push(marker);
        //clear existing circles
        for (var x = 0; x < this.circles.length; x++) {
            this.circles[x].setMap(null);
        }
        this.circles = [];
        //add the circle
        var circle = new google.maps.Circle({
            strokeColor: '#79b402',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#79b402',
            fillOpacity: 0.35,
            map: this.map,
            center: latLng,
            radius: (this.profile.radius / 6378.1) * 6378100
        });
        this.circles.push(circle);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('apiKey'),
        __metadata("design:type", String)
    ], GoogleMapsComponent.prototype, "apiKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('latitude'),
        __metadata("design:type", String)
    ], GoogleMapsComponent.prototype, "latitude", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('longitude'),
        __metadata("design:type", String)
    ], GoogleMapsComponent.prototype, "longitude", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('radius'),
        __metadata("design:type", String)
    ], GoogleMapsComponent.prototype, "radius", void 0);
    GoogleMapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'google-maps',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\components\google-maps\google-maps.html"*/'<!-- Generated template for the GoogleMapsComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\components\google-maps\google-maps.html"*/
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], Object, __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
    ], GoogleMapsComponent);
    return GoogleMapsComponent;
}());

//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ 133:
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
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 174:
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
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contractor_jobs_contractor_jobs__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_jobs_customer_jobs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_settings__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_google_maps_google_maps__ = __webpack_require__(122);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, statusBar, events, authProvider, profileProvider, alertCtrl, camera, transfer, toastCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statusBar = statusBar;
        this.events = events;
        this.authProvider = authProvider;
        this.profileProvider = profileProvider;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.profile = { avatar: "https://www.drupal.org/files/issues/default-avatar.png", radius: 20, latitude: -36.89479598377308, longitude: 174.75231011873302 };
        this.user = { email: "", password: "", permission: "customer", loading: false };
        this.stage = 1;
        this.events.subscribe("location:updated", function (event) {
            _this.profile.latitude = event.latLng.lat();
            _this.profile.longitude = event.latLng.lng();
        });
    }
    SignupPage.prototype.ionViewDidEnter = function () {
        this.statusBar.backgroundColorByHexString("#3c5a01");
    };
    SignupPage.prototype.nextStage = function () {
        if (this.stage === 2 && (!this.profile.public_email || !this.validateEmail(this.profile.public_email))) {
            var alert = this.alertCtrl.create({
                title: 'Invalid Email',
                subTitle: 'A valid email is required to sign up.',
                buttons: ['Dismiss']
            });
            alert.present();
            return;
        }
        else if (this.stage === 2 && this.user.permission === "customer") {
            this.stage += 2;
        }
        else {
            this.stage += 1;
        }
    };
    SignupPage.prototype.changeStage = function (stage) {
        this.stage = stage;
    };
    SignupPage.prototype.selectUserType = function (userType) {
        this.user.permission = userType;
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        this.user.loading = true;
        this.user.error = "";
        this.user.email = this.profile.public_email;
        this.authProvider.register(this.user).then(function () {
            _this.profileProvider.updateProfile(_this.profile).then(function () {
                _this.user.loading = false;
                _this.authProvider.getUserData();
                _this.navigateToJobs();
            }).catch(function () {
                _this.user.loading = true;
            });
        }).catch(function (e) {
            console.log(e);
            _this.user.loading = false;
            if (e && e.error) {
                for (var _i = 0, _a = e.error.error.errors; _i < _a.length; _i++) {
                    var error = _a[_i];
                    _this.user.error = _this.user.error + error + " ";
                }
            }
            else {
                _this.user.error = e.message;
            }
        });
    };
    SignupPage.prototype.navigateToJobs = function () {
        if (this.user.permission === 'customer') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__customer_jobs_customer_jobs__["a" /* CustomerJobsPage */]);
        }
        else if (this.user.permission === 'contractor') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__contractor_jobs_contractor_jobs__["a" /* ContractorJobsPage */]);
        }
    };
    SignupPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    SignupPage.prototype.updateRadius = function () {
        this.mapComponent.updateRadius(this.profile.radius, this.profile.latitude, this.profile.longitude);
    };
    SignupPage.prototype.changeAvatar = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            quality: 25
        };
        this.camera.getPicture(cameraOptions)
            .then(function (image) {
            var loading = _this.loadingCtrl.create({
                content: 'Your image is being uploaded. Please wait...'
            });
            loading.present();
            var fileTransfer = _this.transfer.create();
            var options = {
                fileKey: "fileToUpload",
                fileName: Math.random().toString(36).substring(2),
                params: {},
                mimeType: "image/jpeg"
            };
            fileTransfer.upload(image, encodeURI(__WEBPACK_IMPORTED_MODULE_9__app_app_settings__["a" /* AppSettings */].uploadUrl), options).then(function (data) {
                loading.dismiss();
                console.log(data);
                var response = JSON.parse(data.response);
                if (response.success === true) {
                    _this.profile.avatar = response.data;
                }
                else {
                    var alert = _this.alertCtrl.create({
                        title: "Error",
                        subTitle: "There was a problem uploading your image",
                        message: JSON.stringify(response),
                        buttons: [
                            {
                                text: 'Dismiss',
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                }
            }, function (err) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "Error",
                    subTitle: "There was a problem uploading your image",
                    message: err,
                    buttons: [
                        {
                            text: 'Dismiss',
                            role: 'cancel'
                        }
                    ]
                });
                alert.present();
            });
        }, function (err) {
            //console.log(err)
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_10__components_google_maps_google_maps__["a" /* GoogleMapsComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__components_google_maps_google_maps__["a" /* GoogleMapsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__components_google_maps_google_maps__["a" /* GoogleMapsComponent */]) === "function" && _a || Object)
    ], SignupPage.prototype, "mapComponent", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n        <ion-title>Signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n    <ul class=\'signup-progress\'>\n        <li class=\'active\' (click)="changeStage(1)">What Are You?</li>\n        <li [ngClass]="{\'active\' : stage > 1}" (click)="changeStage(2)">About You</li>\n        <li *ngIf="user.permission === \'contractor\'" [ngClass]="{\'active\' : stage > 2}" (click)="changeStage(3)">Location</li>\n        <li [ngClass]="{\'active\' : stage > 3}" (click)="changeStage(4)">Security</li>\n    </ul>\n    \n    \n    <div class="card-background-page signup-types" *ngIf="!stage || stage === 1">\n        <ion-list-header>\n            <h1>What Are You?</h1>\n        </ion-list-header>  \n        <ion-card (click)="selectUserType(\'customer\')"  [ngClass]="{\'active\' : user.permission === \'customer\'}">\n          <img src="assets/imgs/lawn.jpg"/>\n          <div class="card-title">Customer</div>\n          <div class="card-subtitle">I need my lawns mowed</div>\n        </ion-card>\n\n        <ion-card (click)="selectUserType(\'contractor\')" [ngClass]="{\'active\' : user.permission === \'contractor\'}">\n          <img src="assets/imgs/mow.jpg"/>\n          <div class="card-title">Contractor</div>\n          <div class="card-subtitle">I want to mow lawns</div>\n        </ion-card>\n\n\n    </div>  \n       \n    \n    <ion-list *ngIf="stage === 2">\n        <ion-list-header>\n            <h1>About You</h1>\n        </ion-list-header>        \n        \n        <ion-item>\n            <ion-avatar item-start>\n                <img [src]="profile.avatar">\n            </ion-avatar>\n            <button ion-button color=\'secondary\' (click)="changeAvatar()">Change Photo</button>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label floating>First Name</ion-label>\n            <ion-input type="text" [(ngModel)]="profile.first_name"></ion-input>\n        </ion-item>    \n        \n        <ion-item>\n            <ion-label floating>Last Name</ion-label>\n            <ion-input type="text" [(ngModel)]="profile.last_name"></ion-input>\n        </ion-item>         \n        \n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" [(ngModel)]="profile.public_email"></ion-input>\n        </ion-item>   \n\n        <ion-item>\n            <ion-label floating>Phone</ion-label>\n            <ion-input type="tel" [(ngModel)]="profile.phone"></ion-input>\n        </ion-item> \n        \n        <ion-item>\n          <ion-label floating>Gender</ion-label>\n          <ion-select [(ngModel)]="profile.gender">\n            <ion-option value="Male">Male</ion-option>\n            <ion-option value="Female">Female</ion-option>\n            <ion-option value="Other">Other</ion-option>\n          </ion-select>\n        </ion-item>        \n        \n        <ion-item>\n            <ion-label floating>Date Of Birth</ion-label>\n            <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="profile.dob"></ion-datetime>\n        </ion-item>        \n        \n    </ion-list>    \n    \n\n    \n    \n    <ion-list *ngIf="stage === 3">\n        \n    <ion-list-header class="radius-header">\n        Radius Serviced (km)\n        <ion-badge item-end>{{profile.radius}}km</ion-badge>\n    </ion-list-header>         \n        <ion-item>\n            <ion-range min="1" max="100" step="10" [(ngModel)]="profile.radius" pin="true" (ionChange)="updateRadius()">\n                \n                <ion-icon small range-left name="locate"></ion-icon>\n                <ion-icon range-right name="locate"></ion-icon>\n            </ion-range>\n         </ion-item>   \n        \n        \n        <google-maps apiKey="AIzaSyDkvDS9y2q27OyDfnrJdMk0xh_flzbAzhc" latitude="{{profile.latitude}}" longitude="{{profile.longitude}}" radius="{{profile.radius}}"></google-maps>\n        \n    </ion-list>\n    \n    <ion-list *ngIf="stage === 4">\n        <ion-list-header>\n            <h1>Security</h1>\n        </ion-list-header>        \n        \n        <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n        </ion-item> \n        \n        <p class="login-error" *ngIf="user.error">{{user.error}}</p>\n        \n    </ion-list>     \n    \n    \n</ion-content>\n\n\n<ion-footer>\n    <button ion-button full color=\'secondary\' (click)="nextStage()" *ngIf="!stage || stage < 4">Next&nbsp;&nbsp;<ion-icon name="arrow-forward"></ion-icon></button>\n\n    <button ion-button full color=\'secondary\' class="login-button" [disabled]="user.loading" (click)="signup()" *ngIf="stage === 4">\n        Get Started&nbsp;&nbsp;\n        <ion-icon name="arrow-forward"></ion-icon>\n        <ion-spinner *ngIf="user.loading"></ion-spinner>\n    </button>\n</ion-footer>'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _m || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    //public static apiUrl = 'http://websites.localhost/lawnmower/api/public/api';
    //public static uploadUrl = 'http://websites.localhost/lawnmower/api/uploads';
    AppSettings.apiUrl = 'http://dev.taylorhamling.com/mowmylawns/api/public/api';
    AppSettings.uploadUrl = 'http://dev.taylorhamling.com/mowmylawns/api/uploads';
    return AppSettings;
}());

//# sourceMappingURL=app.settings.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JobProvider = /** @class */ (function () {
    function JobProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    JobProvider.prototype.createJob = function (job) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/jobrequests?token=" + token, job).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    JobProvider.prototype.updateJob = function (job) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.put(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/jobrequests/" + job.id + "?token=" + token, job).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    JobProvider.prototype.deleteJob = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.delete(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/jobrequests/" + id + "?token=" + token).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    JobProvider.prototype.acceptJob = function (jobId, profileId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/acceptjob?token=" + token, { job_id: jobId, profile_id: profileId }).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    JobProvider.prototype.declineJob = function (jobId, profileId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/declinejob?token=" + token, { job_id: jobId, profile_id: profileId }).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    JobProvider.prototype.completeJob = function (jobId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/completejob?token=" + token, { job_id: jobId }).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    JobProvider.prototype.getCreatedJobs = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/jobrequests?token=" + token).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    JobProvider.prototype.getJobs = function (filters) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/jobrequests?token=" + token + "&pricelow=" + filters.priceLow + "&pricehigh=" + filters.priceHigh + "&orderby=" + filters.orderBy + "&orderdirection=" + filters.orderDirection).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    JobProvider.prototype.getJob = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/jobrequests/" + id + "?token=" + token).subscribe(function (res) {
                        resolve(res["job_request"]);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    JobProvider.prototype.apply = function (jobId, profileId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/jobapplications?token=" + token, { job_id: jobId, profile_id: profileId }).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    JobProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], JobProvider);
    return JobProvider;
}());

//# sourceMappingURL=job.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_settings__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditProfileModal = /** @class */ (function () {
    function EditProfileModal(platform, params, modalCtrl, loadingCtrl, viewCtrl, camera, storage, alertCtrl, events, transfer, toastCtrl, nativeGeocoder) {
        this.platform = platform;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.profile = {};
        Object.assign(this.profile, this.params.data.profile);
        this.profile.dob = this.profile.dob ? __WEBPACK_IMPORTED_MODULE_7_moment__(this.profile.dob).toISOString() : null;
    }
    EditProfileModal.prototype.update = function () {
        this.viewCtrl.dismiss(this.profile);
    };
    EditProfileModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditProfileModal.prototype.changeAvatar = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            quality: 25
        };
        this.camera.getPicture(cameraOptions)
            .then(function (image) {
            var loading = _this.loadingCtrl.create({
                content: 'Your image is being uploaded. Please wait...'
            });
            loading.present();
            var fileTransfer = _this.transfer.create();
            var options = {
                fileKey: "fileToUpload",
                fileName: Math.random().toString(36).substring(2),
                params: {},
                mimeType: "image/jpeg"
            };
            fileTransfer.upload(image, encodeURI(__WEBPACK_IMPORTED_MODULE_5__app_app_settings__["a" /* AppSettings */].uploadUrl), options).then(function (data) {
                loading.dismiss();
                var response = JSON.parse(data.response);
                if (response.success === true) {
                    _this.profile.avatar = response.data;
                }
                else {
                    var alert = _this.alertCtrl.create({
                        title: "Error",
                        subTitle: "There was a problem uploading your image",
                        message: JSON.stringify(response),
                        buttons: [
                            {
                                text: 'Dismiss',
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                }
            }, function (err) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "Error",
                    subTitle: "There was a problem uploading your image",
                    message: err,
                    buttons: [
                        {
                            text: 'Dismiss',
                            role: 'cancel'
                        }
                    ]
                });
                alert.present();
            });
        }, function (err) {
            //console.log(err)
        });
    };
    EditProfileModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'edit-profile',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\modals\edit-profile\edit-profile.html"*/'<ion-header>\n    <ion-toolbar [color]="profile.permission === \'contractor\' ? \'secondary\' : \'primary\'">\n        <ion-title>\n            Edit Profile\n        </ion-title>\n        <ion-buttons start>\n\n\n            \n            <button ion-button (click)="dismiss()">\n                <span ion-text showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n  \n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n    \n    <ion-list>      \n\n        \n        <ion-item>\n            <ion-avatar item-start>\n                <img [src]="profile.avatar">\n            </ion-avatar>\n            <button ion-button [color]="profile.permission === \'contractor\' ? \'secondary\' : \'primary\'" (click)="changeAvatar()">Change Photo</button>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label floating>First Name</ion-label>\n            <ion-input type="text" [(ngModel)]="profile.first_name"></ion-input>\n        </ion-item>    \n        \n        <ion-item>\n            <ion-label floating>Last Name</ion-label>\n            <ion-input type="text" [(ngModel)]="profile.last_name"></ion-input>\n        </ion-item>         \n        \n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" [(ngModel)]="profile.public_email"></ion-input>\n        </ion-item>   \n\n        <ion-item>\n            <ion-label floating>Phone</ion-label>\n            <ion-input type="tel" [(ngModel)]="profile.phone"></ion-input>\n        </ion-item> \n        \n        <ion-item>\n          <ion-label floating>Gender</ion-label>\n          <ion-select [(ngModel)]="profile.gender">\n            <ion-option value="male">Male</ion-option>\n            <ion-option value="female">Female</ion-option>\n            <ion-option value="other">Other</ion-option>\n          </ion-select>\n        </ion-item>        \n        \n        <ion-item>\n            <ion-label floating>Date Of Birth</ion-label>\n            <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="profile.dob"></ion-datetime>\n        </ion-item>   \n        \n        \n        <div *ngIf="profile.permission === \'contractor\'">\n            \n            \n            <ion-item>\n                <ion-label floating>Website</ion-label>\n                <ion-input type="text" [(ngModel)]="profile.website"></ion-input>\n            </ion-item>   \n            \n            <ion-item>\n                <ion-label floating>Business Hours</ion-label>\n                <ion-input type="text" [(ngModel)]="profile.business_hours"></ion-input>\n            </ion-item>              \n            \n\n            <ion-item>\n                <ion-label floating>Biography/About You</ion-label>\n                <ion-textarea [(ngModel)]="profile.biography"></ion-textarea>\n            </ion-item>\n            \n        </div>\n        \n        \n    </ion-list>  \n        \n        \n</ion-content>\n\n\n\n<ion-footer>\n    <button ion-button full [color]="profile.permission === \'contractor\' ? \'secondary\' : \'primary\'" (click)="update()">Update Profile</button>\n\n</ion-footer>'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\modals\edit-profile\edit-profile.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__["a" /* NativeGeocoder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__["a" /* NativeGeocoder */]) === "function" && _m || Object])
    ], EditProfileModal);
    return EditProfileModal;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FiltersModal = /** @class */ (function () {
    function FiltersModal(platform, params, viewCtrl, toastCtrl, storage, alertCtrl, events) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.filters = {};
        Object.assign(this.filters, params.data.filters);
        console.log(this.filters);
    }
    FiltersModal.prototype.update = function () {
        this.viewCtrl.dismiss(this.filters);
    };
    FiltersModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FiltersModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'filters',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\modals\filters\filters.html"*/'<ion-header>\n    <ion-toolbar color="secondary">\n        <ion-title>\n            Filters\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n    \n    <ion-item>\n      <ion-label floating>Order By</ion-label>\n      <ion-select [(ngModel)]="filters.orderBy">\n        <ion-option value="created_at">Date Created</ion-option>\n        <ion-option value="price">Price</ion-option>\n        <ion-option value="title">Title</ion-option>\n        <ion-option value="preferred_time">Preferred Date & Time</ion-option>\n      </ion-select>\n    </ion-item>        \n    \n    <ion-item>\n      <ion-label floating>Order Direction</ion-label>\n      <ion-select [(ngModel)]="filters.orderDirection">\n        <ion-option value="DESC">Descending</ion-option>\n        <ion-option value="ASC">Ascending</ion-option>\n      </ion-select>\n    </ion-item> \n    \n    <ion-item>\n        <ion-label floating>Lowest Price</ion-label>\n        <ion-input type="number" [(ngModel)]="filters.priceLow"></ion-input>\n    </ion-item>     \n\n\n    <ion-item>\n        <ion-label floating>Highest Price</ion-label>\n        <ion-input type="number" [(ngModel)]="filters.priceHigh"></ion-input>\n    </ion-item> \n    \n</ion-content>\n\n\n<ion-footer class=\'filter-footer\'>\n    <button ion-button color=\'secondary\' (click)="update()">Update Filters</button>\n\n</ion-footer>'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\modals\filters\filters.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], FiltersModal);
    return FiltersModal;
}());

//# sourceMappingURL=filters.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateJobModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_find_address_find_address__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_settings__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateJobModal = /** @class */ (function () {
    function CreateJobModal(platform, params, modalCtrl, loadingCtrl, viewCtrl, camera, storage, alertCtrl, events, transfer, toastCtrl, nativeGeocoder) {
        this.platform = platform;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.job = { imagesArray: ["http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/house-icon.png"] };
    }
    CreateJobModal.prototype.create = function () {
        console.log(this.job);
        this.job.images = JSON.stringify(this.job.imagesArray);
        this.viewCtrl.dismiss(this.job);
    };
    CreateJobModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CreateJobModal.prototype.openFindAddress = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modals_find_address_find_address__["a" /* FindAddressModal */], { location: this.job.location });
        modal.onDidDismiss(function (address) {
            if (address) {
                console.log(address);
                _this.job.location = address.description;
                _this.nativeGeocoder.forwardGeocode(address.description)
                    .then(function (coordinates) {
                    _this.job.latitude = coordinates.latitude;
                    _this.job.longitude = coordinates.longitude;
                }).catch(function (error) { return console.log(error); });
            }
        });
        modal.present();
    };
    CreateJobModal.prototype.openImageOptions = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Modify Image',
            cssClass: "button-only-alert",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    },
                    cssClass: "cancel-button"
                },
                {
                    text: 'Edit',
                    handler: function () {
                        _this.updateImage(index);
                    },
                    cssClass: "edit-button"
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.job.imagesArray.splice(index, 1);
                    },
                    cssClass: "remove-button"
                }
            ]
        });
        alert.present();
    };
    CreateJobModal.prototype.addImage = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            quality: 25
        };
        this.camera.getPicture(cameraOptions)
            .then(function (image) {
            var loading = _this.loadingCtrl.create({
                content: 'Your image is being uploaded. Please wait...'
            });
            loading.present();
            var fileTransfer = _this.transfer.create();
            var options = {
                fileKey: "fileToUpload",
                fileName: Math.random().toString(36).substring(2),
                params: {},
                mimeType: "image/jpeg"
            };
            fileTransfer.upload(image, encodeURI(__WEBPACK_IMPORTED_MODULE_6__app_app_settings__["a" /* AppSettings */].uploadUrl), options).then(function (data) {
                loading.dismiss();
                var response = JSON.parse(data.response);
                if (response.success === true) {
                    _this.job.imagesArray.push(response.data);
                }
                else {
                    var alert = _this.alertCtrl.create({
                        title: "Error",
                        subTitle: "There was a problem uploading your image",
                        message: JSON.stringify(response),
                        buttons: [
                            {
                                text: 'Dismiss',
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                }
            }, function (err) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "Error",
                    subTitle: "There was a problem uploading your image",
                    message: err,
                    buttons: [
                        {
                            text: 'Dismiss',
                            role: 'cancel'
                        }
                    ]
                });
                alert.present();
            });
        }, function (err) {
            //console.log(err)
        });
    };
    CreateJobModal.prototype.updateImage = function (index) {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            quality: 25
        };
        this.camera.getPicture(cameraOptions)
            .then(function (image) {
            var fileTransfer = _this.transfer.create();
            var options = {
                fileKey: "fileToUpload",
                fileName: Math.random().toString(36).substring(2),
                params: {},
                mimeType: "image/jpeg"
            };
            var toast = _this.toastCtrl.create({
                message: 'Your image is being uploaded...',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            fileTransfer.upload(image, encodeURI(__WEBPACK_IMPORTED_MODULE_6__app_app_settings__["a" /* AppSettings */].uploadUrl), options).then(function (data) {
                var response = JSON.parse(data.response);
                if (response.success === true) {
                    _this.job.imagesArray[index] = response.data;
                }
                else {
                    var alert = _this.alertCtrl.create({
                        title: "Error",
                        subTitle: "There was a problem uploading your image",
                        message: JSON.stringify(response),
                        buttons: [
                            {
                                text: 'Dismiss',
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                }
            }, function (err) {
                var alert = _this.alertCtrl.create({
                    title: "Error",
                    subTitle: "There was a problem uploading your image",
                    message: err,
                    buttons: [
                        {
                            text: 'Dismiss',
                            role: 'cancel'
                        }
                    ]
                });
                alert.present();
            });
        }, function (err) {
            //console.log(err)
        });
    };
    CreateJobModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'create-job',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\modals\create-job\create-job.html"*/'<ion-header>\n    <ion-toolbar color="primary">\n        <ion-title>\n            Create Job\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n    \n    <ion-list>      \n\n        \n        <ion-item>\n            <ion-label floating>Price ($)</ion-label>\n            <ion-input type="number" [(ngModel)]="job.price"></ion-input>\n        </ion-item>   \n        \n        \n    \n        <ion-item>\n            <ion-label floating>Location</ion-label>\n            <ion-input type="text" [(ngModel)]="job.location" (ionFocus)="openFindAddress()"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Preferred Date & Time</ion-label>\n            <ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="job.preferred_time"></ion-datetime>\n        </ion-item>      \n        \n        <ion-item>\n            <ion-label floating>Job Title</ion-label>\n            <ion-input type="text" [(ngModel)]="job.title"></ion-input>\n        </ion-item>          \n        \n        \n        <ion-item>\n            <ion-label floating>Description</ion-label>\n            <ion-textarea [(ngModel)]="job.description"></ion-textarea>\n        </ion-item>         \n        \n        <ion-item>\n            <p>Gallery</p>\n            <div class="job-add-images">\n                \n                <div class="job-image" *ngFor="let image of job.imagesArray;let i = index" (click)="openImageOptions(i)">\n                     <img [src]="image">\n                </div>\n                <div class="job-add-image" (click)="addImage()"><ion-icon name="add"></ion-icon></div>\n                \n            </div>    \n                \n        </ion-item>\n    </ion-list>  \n        \n        \n</ion-content>\n\n\n\n<ion-footer>\n    <button ion-button full color=\'primary\' (click)="create()" [disabled]="!job.price || !job.location || !job.description">Create Job</button>\n\n</ion-footer>'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\modals\create-job\create-job.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */]) === "function" && _m || Object])
    ], CreateJobModal);
    return CreateJobModal;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=create-job.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditJobModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_find_address_find_address__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_settings__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditJobModal = /** @class */ (function () {
    function EditJobModal(platform, params, modalCtrl, viewCtrl, camera, storage, alertCtrl, events, transfer, toastCtrl, nativeGeocoder, loadingCtrl) {
        this.platform = platform;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.loadingCtrl = loadingCtrl;
        this.job = {};
        Object.assign(this.job, this.params.data.job);
        console.log(this.job);
        this.job.imagesArray = JSON.parse(this.job.images);
        this.job.preferred_time = __WEBPACK_IMPORTED_MODULE_8_moment__(this.job.preferred_time).toISOString();
        console.log(this.job.preferred_time);
    }
    EditJobModal.prototype.update = function () {
        this.job.images = JSON.stringify(this.job.imagesArray);
        this.viewCtrl.dismiss(this.job);
    };
    EditJobModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditJobModal.prototype.openDelete = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            subTitle: 'Are you sure you want to delete this job?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.job.deleted = true;
                        _this.viewCtrl.dismiss(_this.job);
                    }
                }
            ]
        });
        alert.present();
    };
    EditJobModal.prototype.openFindAddress = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modals_find_address_find_address__["a" /* FindAddressModal */], { location: this.job.location });
        modal.onDidDismiss(function (address) {
            if (address) {
                console.log(address);
                _this.job.location = address.description;
                _this.nativeGeocoder.forwardGeocode(address.description)
                    .then(function (coordinates) {
                    _this.job.latitude = coordinates.latitude;
                    _this.job.longitude = coordinates.longitude;
                }).catch(function (error) { return console.log(error); });
            }
        });
        modal.present();
    };
    EditJobModal.prototype.openImageOptions = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Modify Image',
            cssClass: "button-only-alert",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    },
                    cssClass: "cancel-button"
                },
                {
                    text: 'Edit',
                    handler: function () {
                        _this.updateImage(index);
                    },
                    cssClass: "edit-button"
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.job.imagesArray.splice(index, 1);
                    },
                    cssClass: "remove-button"
                }
            ]
        });
        alert.present();
    };
    EditJobModal.prototype.addImage = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            quality: 25
        };
        this.camera.getPicture(cameraOptions)
            .then(function (image) {
            var loading = _this.loadingCtrl.create({
                content: 'Your image is being uploaded. Please wait...'
            });
            loading.present();
            var fileTransfer = _this.transfer.create();
            var options = {
                fileKey: "fileToUpload",
                fileName: Math.random().toString(36).substring(2),
                params: {},
                mimeType: "image/jpeg"
            };
            fileTransfer.upload(image, encodeURI(__WEBPACK_IMPORTED_MODULE_6__app_app_settings__["a" /* AppSettings */].uploadUrl), options).then(function (data) {
                loading.dismiss();
                var response = JSON.parse(data.response);
                if (response.success === true) {
                    _this.job.imagesArray.push(response.data);
                }
                else {
                    var alert = _this.alertCtrl.create({
                        title: "Error",
                        subTitle: "There was a problem uploading your image",
                        message: JSON.stringify(response),
                        buttons: [
                            {
                                text: 'Dismiss',
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                }
            }, function (err) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "Error",
                    subTitle: "There was a problem uploading your image",
                    message: err,
                    buttons: [
                        {
                            text: 'Dismiss',
                            role: 'cancel'
                        }
                    ]
                });
                alert.present();
            });
        }, function (err) {
            //console.log(err)
        });
    };
    EditJobModal.prototype.updateImage = function (index) {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            quality: 25
        };
        this.camera.getPicture(cameraOptions)
            .then(function (image) {
            var fileTransfer = _this.transfer.create();
            var options = {
                fileKey: "fileToUpload",
                fileName: Math.random().toString(36).substring(2),
                params: {},
                mimeType: "image/jpeg"
            };
            var toast = _this.toastCtrl.create({
                message: 'Your image is being uploaded...',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            fileTransfer.upload(image, encodeURI(__WEBPACK_IMPORTED_MODULE_6__app_app_settings__["a" /* AppSettings */].uploadUrl), options).then(function (data) {
                var response = JSON.parse(data.response);
                if (response.success === true) {
                    _this.job.imagesArray[index] = response.data;
                }
                else {
                    var alert = _this.alertCtrl.create({
                        title: "Error",
                        subTitle: "There was a problem uploading your image",
                        message: JSON.stringify(response),
                        buttons: [
                            {
                                text: 'Dismiss',
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                }
            }, function (err) {
                var alert = _this.alertCtrl.create({
                    title: "Error",
                    subTitle: "There was a problem uploading your image",
                    message: err,
                    buttons: [
                        {
                            text: 'Dismiss',
                            role: 'cancel'
                        }
                    ]
                });
                alert.present();
            });
        }, function (err) {
            //console.log(err)
        });
    };
    EditJobModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'edit-job',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\modals\edit-job\edit-job.html"*/'<ion-header>\n    <ion-toolbar color="primary">\n        <ion-title>\n            Edit Job\n        </ion-title>\n        <ion-buttons start>\n            \n            <button icon-start ion-button (click)="openDelete()" showWhen="android, windows">\n                <ion-icon name="md-trash"></ion-icon>\n                Delete\n            </button> \n\n            \n            <button ion-button (click)="dismiss()">\n                <span ion-text showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n        \n        \n        <ion-buttons showWhen="ios" end>    \n            <button ion-button (click)="openDelete()">\n                <span ion-text>Delete</span>\n            </button>              \n        </ion-buttons>        \n        \n        \n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n    \n    <ion-list>      \n\n        \n        <ion-item>\n            <ion-label floating>Price ($)</ion-label>\n            <ion-input type="number" [(ngModel)]="job.price"></ion-input>\n        </ion-item>   \n \n        \n    \n        <ion-item>\n            <ion-label floating>Location</ion-label>\n            <ion-input type="text" [(ngModel)]="job.location" (ionFocus)="openFindAddress()"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Preferred Date & Time</ion-label>\n            <ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="job.preferred_time"></ion-datetime>\n        </ion-item>         \n\n        <ion-item>\n            <ion-label floating>Job Title</ion-label>\n            <ion-input type="text" [(ngModel)]="job.title"></ion-input>\n        </ion-item>  \n        \n        <ion-item>\n            <ion-label floating>Description</ion-label>\n            <ion-textarea [(ngModel)]="job.description"></ion-textarea>\n        </ion-item>         \n        \n        <ion-item>\n            <p>Gallery</p>\n            <div class="job-add-images">\n                \n                <div class="job-image" *ngFor="let image of job.imagesArray;let i = index" (click)="openImageOptions(i)">\n                     <img [src]="image">\n                </div>\n                <div class="job-add-image" (click)="addImage()"><ion-icon name="add"></ion-icon></div>\n                \n            </div>    \n                \n        </ion-item>\n    </ion-list>  \n        \n        \n</ion-content>\n\n\n\n<ion-footer>\n    <button ion-button full color=\'primary\' (click)="update()" [disabled]="!job.price || !job.location || !job.title">Update Job</button>\n\n</ion-footer>'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\modals\edit-job\edit-job.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _m || Object])
    ], EditJobModal);
    return EditJobModal;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=edit-job.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_update_radius_update_radius__ = __webpack_require__(347);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, storage, events, emailComposer, modalCtrl, plt, authProvider, alertCtrl, profileProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.events = events;
        this.emailComposer = emailComposer;
        this.modalCtrl = modalCtrl;
        this.plt = plt;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.profileProvider = profileProvider;
        this.user = { permission: "customer" };
        this.storage.get("user").then(function (user) {
            if (user) {
                _this.user = user;
            }
        });
    }
    SettingsPage.prototype.openRate = function () {
        if (this.plt.is("ios")) {
            window.open("https://itunes.apple.com/", '_system');
        }
        else if (this.plt.is("windows")) {
            window.open("https://www.microsoft.com", '_system');
        }
        else {
            window.open("https://play.google.com/", '_system');
        }
    };
    SettingsPage.prototype.openFollow = function () {
        window.open("https://www.facebook.com/", '_system');
    };
    SettingsPage.prototype.openEmail = function () {
        var email = {
            to: ["yonasbrhan@yahoo.com"],
            subject: 'Subject for your support query',
            body: 'Provide details about the support you require.',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    SettingsPage.prototype.openUpdateRadius = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__modals_update_radius_update_radius__["a" /* UpdateRadiusModal */], { profile: this.user.profile });
        modal.onDidDismiss(function (profile) {
            if (profile) {
                //update profile
                _this.user.profile = profile;
                _this.profileProvider.updateProfile(profile);
            }
        });
        modal.present();
    };
    SettingsPage.prototype.openChangePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Password',
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                },
                {
                    name: 'confirmPassword',
                    placeholder: 'Confirm Password',
                    type: 'password'
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
                    text: 'Change',
                    handler: function (data) {
                        if (data.password && data.confirmPassword && data.password === data.confirmPassword) {
                            _this.authProvider.changePassword(_this.user.email, data.password, data.confirmPassword).then(function () {
                                var alert = _this.alertCtrl.create({
                                    title: 'Success',
                                    message: 'Your password has been updated',
                                    buttons: [
                                        {
                                            text: 'Dismiss',
                                            role: 'cancel',
                                            handler: function (data) {
                                            }
                                        }
                                    ]
                                });
                                alert.present();
                            }).catch(function () {
                                var alert = _this.alertCtrl.create({
                                    title: 'Error',
                                    message: 'There was an error while changing your password.',
                                    buttons: [
                                        {
                                            text: 'Cancel',
                                            role: 'cancel',
                                            handler: function (data) {
                                            }
                                        },
                                        {
                                            text: 'Try Again',
                                            handler: function (data) {
                                                setTimeout(function () { _this.openChangePassword(); }, 200);
                                            }
                                        }
                                    ]
                                });
                                setTimeout(function () { alert.present(); }, 200);
                            });
                        }
                        else {
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Error',
                                message: 'Passwords do not match',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        handler: function (data) {
                                        }
                                    },
                                    {
                                        text: 'Try Again',
                                        handler: function (data) {
                                            setTimeout(function () { _this.openChangePassword(); }, 200);
                                        }
                                    }
                                ]
                            });
                            setTimeout(function () { alert_1.present(); }, 200);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.logout = function () {
        this.authProvider.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        this.navCtrl.popToRoot();
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar [color]="user.permission === \'contractor\' ? \'secondary\' : \'primary\'">\n        \n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>         \n        \n        <ion-title>Settings</ion-title>\n    \n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n<ion-list class="settings-list">\n    \n    \n    <ion-list-header>\n        <h2>Support</h2>\n    </ion-list-header>  \n    \n <ion-item>\n    <ion-icon name="heart" item-start></ion-icon>\n    Rate The App\n    <button ion-button outline item-end (click)="openRate()">Rate</button>\n  </ion-item>    \n    \n    \n <ion-item>\n    <ion-icon name="logo-facebook" item-start></ion-icon>\n    Follow Us\n    <button ion-button outline item-end (click)="openFollow()">Follow</button>\n  </ion-item>   \n    \n    \n <ion-item>\n    <ion-icon name="mail" item-start></ion-icon>\n    Contact Support\n    <button ion-button outline item-end (click)="openEmail()">Email</button>\n  </ion-item>     \n    \n    \n    <ion-list-header>\n        <h2>Account Settings</h2>\n    </ion-list-header>      \n    \n    <button ion-item detail-none (click)="openUpdateRadius()" *ngIf="user.permission === \'contractor\'">\n            <ion-icon name="locate" item-start></ion-icon>\n        Change Location & Radius\n        <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n    </button>  \n\n    <button ion-item detail-none (click)="openChangePassword()">\n            <ion-icon name="unlock" item-start></ion-icon>\n        Change Password\n        <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n    </button>  \n  \n\n\n    <button ion-item detail-none (click)="logout()">\n            <ion-icon name="lock" item-start></ion-icon>\n        Logout\n    </button> \n\n     \n</ion-list>    \n \n</ion-content>'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateRadiusModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_google_maps_google_maps__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateRadiusModal = /** @class */ (function () {
    function UpdateRadiusModal(platform, params, modalCtrl, viewCtrl, storage, alertCtrl, events, toastCtrl, nativeGeocoder) {
        var _this = this;
        this.platform = platform;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.profile = {};
        Object.assign(this.profile, this.params.data.profile);
        this.events.subscribe("location:updated", function (event) {
            _this.profile.latitude = event.latLng.lat();
            _this.profile.longitude = event.latLng.lng();
        });
    }
    UpdateRadiusModal.prototype.update = function () {
        this.viewCtrl.dismiss(this.profile);
    };
    UpdateRadiusModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    UpdateRadiusModal.prototype.updateRadius = function () {
        this.mapComponent.updateRadius(this.profile.radius, this.profile.latitude, this.profile.longitude);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__components_google_maps_google_maps__["a" /* GoogleMapsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__components_google_maps_google_maps__["a" /* GoogleMapsComponent */])
    ], UpdateRadiusModal.prototype, "mapComponent", void 0);
    UpdateRadiusModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'update-radius',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\modals\update-radius\update-radius.html"*/'<ion-header>\n    <ion-toolbar color="secondary">\n        <ion-title>\n            Change Location & Radius\n        </ion-title>\n        <ion-buttons start>\n\n\n            \n            <button ion-button (click)="dismiss()">\n                <span ion-text showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n  \n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n    \n    <ion-list>\n        \n    <ion-list-header class="radius-header">\n        Radius Serviced (km)\n        <ion-badge item-end>{{profile.radius}}km</ion-badge>\n    </ion-list-header>         \n        <ion-item>\n            <ion-range min="1" max="100" step="10" [(ngModel)]="profile.radius" pin="true" (ionChange)="updateRadius()">\n                \n                <ion-icon small range-left name="locate"></ion-icon>\n                <ion-icon range-right name="locate"></ion-icon>\n            </ion-range>\n         </ion-item>   \n        \n        \n        <google-maps apiKey="AIzaSyDkvDS9y2q27OyDfnrJdMk0xh_flzbAzhc" latitude="{{profile.latitude}}" longitude="{{profile.longitude}}" radius="{{profile.radius}}"></google-maps>\n        \n        \n    </ion-list> \n        \n        \n</ion-content>\n\n\n\n<ion-footer>\n    <button ion-button full color="secondary" (click)="update()">Update</button>\n\n</ion-footer>'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\modals\update-radius\update-radius.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], UpdateRadiusModal);
    return UpdateRadiusModal;
}());

//# sourceMappingURL=update-radius.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notification_notification__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_job_job__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contractor_job_contractor_job__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_customer_job_customer_job__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PopoverPage = /** @class */ (function () {
    function PopoverPage(nav, viewCtrl, modalCtrl, notificationProvider, storage, jobProvider, profileProvider, events) {
        var _this = this;
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.notificationProvider = notificationProvider;
        this.storage = storage;
        this.jobProvider = jobProvider;
        this.profileProvider = profileProvider;
        this.events = events;
        this.properties = {};
        this.notifications = [];
        this.notificationProvider.getNotifications().then(function (data) {
            _this.notifications = data;
        });
        this.user = {};
        this.storage.get("user").then(function (user) {
            if (user) {
                _this.user = user;
            }
        });
        this.events.subscribe("notification:received", function (notification) {
            if (_this.notifications.length > 5) {
                _this.notifications.pop();
            }
            notification.read = false;
            _this.notifications.push(notification);
            _this.notificationProvider.addNotification(notification).then(function () {
                _this.events.publish("notification:updatecount");
            });
        });
    }
    PopoverPage.prototype.viewNotification = function (index, notification) {
        var _this = this;
        notification.read = true;
        this.notificationProvider.updateNotification(index).then(function () {
            _this.events.publish("notification:updatecount");
        });
        this.close();
        if (notification.type === "job" && this.user.permission === "contractor") {
            this.jobProvider.getJob(notification.id).then(function (job) {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_contractor_job_contractor_job__["a" /* ContractorJobPage */], { job: job });
            });
        }
        else if (notification.type === "job" && this.user.permission === "customer") {
            this.jobProvider.getJob(notification.id).then(function (job) {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_customer_job_customer_job__["a" /* CustomerJobPage */], { job: job });
            });
        }
        else if (notification.type === "profile") {
            if (notification.id) {
                this.profileProvider.getProfile(notification.id).then(function (profile) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */], { profile: profile });
                });
            }
            else {
                setTimeout(function () { _this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */], {}); }, 500);
            }
        }
    };
    PopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'notifications-popover',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\components\notifications\popover.html"*/'<ion-list class="tools-popover">\n    <ion-item class=\'empty-notifications\' *ngIf="notifications.length < 1">\n        <h2>No Notifications</h2>\n    </ion-item>\n    <button ion-item *ngFor="let notification of notifications" (click)="viewNotification(i, notification)" [ngClass]="{\'unread\':!notification.read}">\n            {{notification.title}}\n    </button>\n</ion-list>'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\components\notifications\popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_job_job__["a" /* JobProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(373);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contractor_jobs_contractor_jobs__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_customer_jobs_customer_jobs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_customer_job_customer_job__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contractor_job_contractor_job__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modals_filters_filters__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modals_create_job_create_job__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modals_edit_job_edit_job__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modals_find_address_find_address__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modals_create_review_create_review__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modals_edit_profile_edit_profile__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modals_update_radius_update_radius__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_onesignal__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_transfer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic2_google_places_autocomplete__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_native_geocoder__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_email_composer__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_notifications_notifications__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_notifications_popover__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_components_module__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_authentication_authentication__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_job_job__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_review_review__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_notification_notification__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contractor_jobs_contractor_jobs__["a" /* ContractorJobsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_customer_jobs_customer_jobs__["a" /* CustomerJobsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_customer_job_customer_job__["a" /* CustomerJobPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contractor_job_contractor_job__["a" /* ContractorJobPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__modals_filters_filters__["a" /* FiltersModal */],
                __WEBPACK_IMPORTED_MODULE_15__modals_create_job_create_job__["a" /* CreateJobModal */],
                __WEBPACK_IMPORTED_MODULE_16__modals_edit_job_edit_job__["a" /* EditJobModal */],
                __WEBPACK_IMPORTED_MODULE_18__modals_create_review_create_review__["a" /* CreateReviewModal */],
                __WEBPACK_IMPORTED_MODULE_17__modals_find_address_find_address__["a" /* FindAddressModal */],
                __WEBPACK_IMPORTED_MODULE_19__modals_edit_profile_edit_profile__["a" /* EditProfileModal */],
                __WEBPACK_IMPORTED_MODULE_20__modals_update_radius_update_radius__["a" /* UpdateRadiusModal */],
                __WEBPACK_IMPORTED_MODULE_29__components_notifications_notifications__["a" /* NotificationsDirective */],
                __WEBPACK_IMPORTED_MODULE_30__components_notifications_popover__["a" /* PopoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_31__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_26_ionic2_google_places_autocomplete__["a" /* GooglePlacesAutocompleteComponentModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contractor_jobs_contractor_jobs__["a" /* ContractorJobsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_customer_jobs_customer_jobs__["a" /* CustomerJobsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_customer_job_customer_job__["a" /* CustomerJobPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contractor_job_contractor_job__["a" /* ContractorJobPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__modals_filters_filters__["a" /* FiltersModal */],
                __WEBPACK_IMPORTED_MODULE_15__modals_create_job_create_job__["a" /* CreateJobModal */],
                __WEBPACK_IMPORTED_MODULE_16__modals_edit_job_edit_job__["a" /* EditJobModal */],
                __WEBPACK_IMPORTED_MODULE_18__modals_create_review_create_review__["a" /* CreateReviewModal */],
                __WEBPACK_IMPORTED_MODULE_17__modals_find_address_find_address__["a" /* FindAddressModal */],
                __WEBPACK_IMPORTED_MODULE_19__modals_edit_profile_edit_profile__["a" /* EditProfileModal */],
                __WEBPACK_IMPORTED_MODULE_20__modals_update_radius_update_radius__["a" /* UpdateRadiusModal */],
                __WEBPACK_IMPORTED_MODULE_30__components_notifications_popover__["a" /* PopoverPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_32__providers_authentication_authentication__["a" /* AuthenticationProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_job_job__["a" /* JobProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_review_review__["a" /* ReviewProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_notification_notification__["a" /* NotificationProvider */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_email_composer__["a" /* EmailComposer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProfileProvider = /** @class */ (function () {
    function ProfileProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    ProfileProvider.prototype.saveProfile = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/profiles?token=" + token, data).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    ProfileProvider.prototype.updateProfile = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.put(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/profiles/update?token=" + token, data).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    ProfileProvider.prototype.getProfile = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/profiles/" + id + "?token=" + token).subscribe(function (res) {
                        resolve(res["profile"]);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contractor_jobs_contractor_jobs__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_customer_jobs_customer_jobs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contractor_job_contractor_job__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_customer_job_customer_job__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_authentication_authentication__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_job_job__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_profile_profile__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, authProvider, storage, oneSignal, events, jobProvider, profileProvider) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authProvider = authProvider;
        this.storage = storage;
        this.oneSignal = oneSignal;
        this.events = events;
        this.jobProvider = jobProvider;
        this.profileProvider = profileProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.user = { profile: {} };
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Jobs', component: __WEBPACK_IMPORTED_MODULE_7__pages_customer_jobs_customer_jobs__["a" /* CustomerJobsPage */] },
            { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */] }
        ];
        this.storage.get("user").then(function (user) {
            if (user) {
                _this.user = user;
                _this.savePushId();
                _this.authProvider.getUserData();
                if (user.permission === "contractor") {
                    _this.pages[0].component = __WEBPACK_IMPORTED_MODULE_6__pages_contractor_jobs_contractor_jobs__["a" /* ContractorJobsPage */];
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_contractor_jobs_contractor_jobs__["a" /* ContractorJobsPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_customer_jobs_customer_jobs__["a" /* CustomerJobsPage */];
                }
            }
            _this.splashScreen.hide();
        }).catch(function () {
            _this.splashScreen.hide();
        });
        this.events.subscribe("user:retreived", function (user) {
            console.log(user);
            _this.user = user;
            if (user.permission === "contractor") {
                _this.pages[0].component = __WEBPACK_IMPORTED_MODULE_6__pages_contractor_jobs_contractor_jobs__["a" /* ContractorJobsPage */];
                _this.statusBar.backgroundColorByHexString("#3c5a01");
            }
            else {
                _this.pages[0].component = __WEBPACK_IMPORTED_MODULE_7__pages_customer_jobs_customer_jobs__["a" /* CustomerJobsPage */];
                _this.statusBar.backgroundColorByHexString("#5697ab");
            }
        });
        this.events.subscribe("user:loggedin", function () {
            _this.savePushId();
        });
    }
    MyApp.prototype.savePushId = function () {
        var _this = this;
        this.oneSignal.getIds().then(function (data) {
            if (data.userId) {
                //save
                _this.authProvider.savePushId(data.userId);
            }
        }).catch(function (e) {
            //console.log(e);
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            if (_this.platform.is("android")) {
                if (_this.user.permission === "contractor") {
                    _this.statusBar.backgroundColorByHexString("#3c5a01");
                }
                else {
                    _this.statusBar.backgroundColorByHexString("#5697ab");
                }
                _this.statusBar.styleLightContent();
            }
            else {
                _this.statusBar.styleLightContent();
            }
            //this.splashScreen.hide();
            if (_this.platform.is('cordova')) {
                _this.oneSignal.startInit("c37e5d83-df30-4cb2-97a3-fdb45dcd08ed", "560659639701");
                _this.oneSignal.handleNotificationOpened().subscribe(function (data) {
                    if (!data.notification.isAppInFocus) {
                        var pushData = data.notification.payload.additionalData;
                        data.notification.payload.additionalData["title"] = data.notification.payload.title;
                        _this.events.publish("notification:received", pushData);
                        if (pushData.type === "job" && _this.user.permission === "contractor") {
                            _this.jobProvider.getJob(pushData.id).then(function (job) {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_contractor_job_contractor_job__["a" /* ContractorJobPage */], { job: job });
                            });
                        }
                        else if (pushData.type === "job" && _this.user.permission === "customer") {
                            _this.jobProvider.getJob(pushData.id).then(function (job) {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_customer_job_customer_job__["a" /* CustomerJobPage */], { job: job });
                            });
                        }
                        else if (pushData.type === "profile") {
                            if (pushData.id) {
                                _this.profileProvider.getProfile(pushData.id).then(function (profile) {
                                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */], { profile: profile });
                                });
                            }
                            else {
                                setTimeout(function () { _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */], {}); }, 500);
                            }
                        }
                    }
                });
                _this.oneSignal.endInit();
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.authProvider.logout();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        this.nav.popToRoot();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header [ngClass]="{contractor:user.permission === \'contractor\'}">\n        <div class="user-dp">\n            <img [src]="user.profile.avatar"/>\n        </div>\n        <div class="username">\n            Hello, {{user.profile.first_name ? user.profile.first_name : " user"}}!\n        </div>      \n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>       \n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_11__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_14__providers_job_job__["a" /* JobProvider */], __WEBPACK_IMPORTED_MODULE_15__providers_profile_profile__["a" /* ProfileProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 218,
	"./af.js": 218,
	"./ar": 219,
	"./ar-dz": 220,
	"./ar-dz.js": 220,
	"./ar-kw": 221,
	"./ar-kw.js": 221,
	"./ar-ly": 222,
	"./ar-ly.js": 222,
	"./ar-ma": 223,
	"./ar-ma.js": 223,
	"./ar-sa": 224,
	"./ar-sa.js": 224,
	"./ar-tn": 225,
	"./ar-tn.js": 225,
	"./ar.js": 219,
	"./az": 226,
	"./az.js": 226,
	"./be": 227,
	"./be.js": 227,
	"./bg": 228,
	"./bg.js": 228,
	"./bm": 229,
	"./bm.js": 229,
	"./bn": 230,
	"./bn.js": 230,
	"./bo": 231,
	"./bo.js": 231,
	"./br": 232,
	"./br.js": 232,
	"./bs": 233,
	"./bs.js": 233,
	"./ca": 234,
	"./ca.js": 234,
	"./cs": 235,
	"./cs.js": 235,
	"./cv": 236,
	"./cv.js": 236,
	"./cy": 237,
	"./cy.js": 237,
	"./da": 238,
	"./da.js": 238,
	"./de": 239,
	"./de-at": 240,
	"./de-at.js": 240,
	"./de-ch": 241,
	"./de-ch.js": 241,
	"./de.js": 239,
	"./dv": 242,
	"./dv.js": 242,
	"./el": 243,
	"./el.js": 243,
	"./en-au": 244,
	"./en-au.js": 244,
	"./en-ca": 245,
	"./en-ca.js": 245,
	"./en-gb": 246,
	"./en-gb.js": 246,
	"./en-ie": 247,
	"./en-ie.js": 247,
	"./en-il": 248,
	"./en-il.js": 248,
	"./en-nz": 249,
	"./en-nz.js": 249,
	"./eo": 250,
	"./eo.js": 250,
	"./es": 251,
	"./es-do": 252,
	"./es-do.js": 252,
	"./es-us": 253,
	"./es-us.js": 253,
	"./es.js": 251,
	"./et": 254,
	"./et.js": 254,
	"./eu": 255,
	"./eu.js": 255,
	"./fa": 256,
	"./fa.js": 256,
	"./fi": 257,
	"./fi.js": 257,
	"./fo": 258,
	"./fo.js": 258,
	"./fr": 259,
	"./fr-ca": 260,
	"./fr-ca.js": 260,
	"./fr-ch": 261,
	"./fr-ch.js": 261,
	"./fr.js": 259,
	"./fy": 262,
	"./fy.js": 262,
	"./gd": 263,
	"./gd.js": 263,
	"./gl": 264,
	"./gl.js": 264,
	"./gom-latn": 265,
	"./gom-latn.js": 265,
	"./gu": 266,
	"./gu.js": 266,
	"./he": 267,
	"./he.js": 267,
	"./hi": 268,
	"./hi.js": 268,
	"./hr": 269,
	"./hr.js": 269,
	"./hu": 270,
	"./hu.js": 270,
	"./hy-am": 271,
	"./hy-am.js": 271,
	"./id": 272,
	"./id.js": 272,
	"./is": 273,
	"./is.js": 273,
	"./it": 274,
	"./it.js": 274,
	"./ja": 275,
	"./ja.js": 275,
	"./jv": 276,
	"./jv.js": 276,
	"./ka": 277,
	"./ka.js": 277,
	"./kk": 278,
	"./kk.js": 278,
	"./km": 279,
	"./km.js": 279,
	"./kn": 280,
	"./kn.js": 280,
	"./ko": 281,
	"./ko.js": 281,
	"./ky": 282,
	"./ky.js": 282,
	"./lb": 283,
	"./lb.js": 283,
	"./lo": 284,
	"./lo.js": 284,
	"./lt": 285,
	"./lt.js": 285,
	"./lv": 286,
	"./lv.js": 286,
	"./me": 287,
	"./me.js": 287,
	"./mi": 288,
	"./mi.js": 288,
	"./mk": 289,
	"./mk.js": 289,
	"./ml": 290,
	"./ml.js": 290,
	"./mn": 291,
	"./mn.js": 291,
	"./mr": 292,
	"./mr.js": 292,
	"./ms": 293,
	"./ms-my": 294,
	"./ms-my.js": 294,
	"./ms.js": 293,
	"./mt": 295,
	"./mt.js": 295,
	"./my": 296,
	"./my.js": 296,
	"./nb": 297,
	"./nb.js": 297,
	"./ne": 298,
	"./ne.js": 298,
	"./nl": 299,
	"./nl-be": 300,
	"./nl-be.js": 300,
	"./nl.js": 299,
	"./nn": 301,
	"./nn.js": 301,
	"./pa-in": 302,
	"./pa-in.js": 302,
	"./pl": 303,
	"./pl.js": 303,
	"./pt": 304,
	"./pt-br": 305,
	"./pt-br.js": 305,
	"./pt.js": 304,
	"./ro": 306,
	"./ro.js": 306,
	"./ru": 307,
	"./ru.js": 307,
	"./sd": 308,
	"./sd.js": 308,
	"./se": 309,
	"./se.js": 309,
	"./si": 310,
	"./si.js": 310,
	"./sk": 311,
	"./sk.js": 311,
	"./sl": 312,
	"./sl.js": 312,
	"./sq": 313,
	"./sq.js": 313,
	"./sr": 314,
	"./sr-cyrl": 315,
	"./sr-cyrl.js": 315,
	"./sr.js": 314,
	"./ss": 316,
	"./ss.js": 316,
	"./sv": 317,
	"./sv.js": 317,
	"./sw": 318,
	"./sw.js": 318,
	"./ta": 319,
	"./ta.js": 319,
	"./te": 320,
	"./te.js": 320,
	"./tet": 321,
	"./tet.js": 321,
	"./tg": 322,
	"./tg.js": 322,
	"./th": 323,
	"./th.js": 323,
	"./tl-ph": 324,
	"./tl-ph.js": 324,
	"./tlh": 325,
	"./tlh.js": 325,
	"./tr": 326,
	"./tr.js": 326,
	"./tzl": 327,
	"./tzl.js": 327,
	"./tzm": 328,
	"./tzm-latn": 329,
	"./tzm-latn.js": 329,
	"./tzm.js": 328,
	"./ug-cn": 330,
	"./ug-cn.js": 330,
	"./uk": 331,
	"./uk.js": 331,
	"./ur": 332,
	"./ur.js": 332,
	"./uz": 333,
	"./uz-latn": 334,
	"./uz-latn.js": 334,
	"./uz.js": 333,
	"./vi": 335,
	"./vi.js": 335,
	"./x-pseudo": 336,
	"./x-pseudo.js": 336,
	"./yo": 337,
	"./yo.js": 337,
	"./zh-cn": 338,
	"./zh-cn.js": 338,
	"./zh-hk": 339,
	"./zh-hk.js": 339,
	"./zh-tw": 340,
	"./zh-tw.js": 340
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 433;

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_popover__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsDirective = /** @class */ (function () {
    function NotificationsDirective(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    NotificationsDirective.prototype.onClick = function (ev) {
        this.presentPopover(ev);
    };
    NotificationsDirective.prototype.presentPopover = function (ev) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__notifications_popover__["a" /* PopoverPage */], {}, { cssClass: "notifications-popover" });
        popover.present({
            ev: ev
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NotificationsDirective.prototype, "onClick", null);
    NotificationsDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[notifications]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], NotificationsDirective);
    return NotificationsDirective;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__google_maps_google_maps__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__google_maps_google_maps__["a" /* GoogleMapsComponent */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__google_maps_google_maps__["a" /* GoogleMapsComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_review_review__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_edit_profile_edit_profile__ = __webpack_require__(341);
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
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, reviewProvider, profileProvider, storage, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reviewProvider = reviewProvider;
        this.profileProvider = profileProvider;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.properties = { activeTab: "profile" };
        this.profile = navParams.data.profile ? navParams.data.profile : {};
        this.profile.reviews = [];
        if (!this.profile.id) {
            this.storage.get("user").then(function (user) {
                if (user) {
                    _this.profile = user.profile;
                    _this.profile.permission = user.permission;
                    _this.profile.isMyProfile = true;
                    _this.profile.reviews = [];
                    _this.getReviews();
                }
            });
        }
        else {
            this.getReviews();
        }
    }
    ProfilePage.prototype.getReviews = function () {
        var _this = this;
        this.reviewProvider.getReviews(this.profile.id).then(function (data) {
            _this.profile.reviews = data ? data : [];
        });
    };
    ProfilePage.prototype.formatDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_4_moment__(date).format("dddd, MMMM Do YYYY");
    };
    ProfilePage.prototype.openEditProfile = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__modals_edit_profile_edit_profile__["a" /* EditProfileModal */], { profile: this.profile });
        modal.onDidDismiss(function (profile) {
            if (profile) {
                //update profile
                _this.profile = profile;
                _this.profileProvider.updateProfile(profile);
            }
        });
        modal.present();
    };
    ProfilePage.prototype.openURL = function (url) {
        window.open(url, '_system');
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar [color]="profile.permission === \'contractor\' ? \'secondary\' : \'primary\'">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button> \n      \n      \n        <ion-title>{{!profile.first_name && !profile.last_name ? "Profile" : ""}}{{profile.first_name}} {{profile.last_name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n<ion-content>\n    \n    <ion-segment [color]="profile.permission === \'contractor\' ? \'secondary\' : \'primary\'" [(ngModel)]="properties.activeTab">\n        <ion-segment-button value="profile">\n            Profile\n        </ion-segment-button>\n      <ion-segment-button value="reviews">\n            Reviews <ion-badge *ngIf="profile.reviews.length > 0" [color]="profile.permission === \'contractor\' ? \'secondary\' : \'primary\'">{{profile.reviews.length}}</ion-badge>\n      </ion-segment-button>       \n    </ion-segment>        \n    \n    \n    <ion-list *ngIf="properties.activeTab === \'profile\'" class=\'profile-details\'>\n\n        <ion-item *ngIf="profile.first_name || profile.last_name">\n            <h2>Name</h2>\n            <p>{{profile.first_name}} {{profile.last_name}}</p>\n        </ion-item>\n        \n        <ion-item *ngIf="profile.dob">\n            <h2>Date Of Birth</h2>\n            <p>{{formatDate(profile.dob)}}</p>\n        </ion-item>      \n        \n        <ion-item *ngIf="profile.gender">\n            <h2>Gender</h2>\n            <p>{{profile.gender}}</p>\n        </ion-item>      \n        \n        <ion-item *ngIf="profile.phone">\n            <h2>Phone</h2>\n            <p><a (click)="openURL(\'tel:\' + profile.phone)">{{profile.phone}}</a></p>\n        </ion-item>         \n\n\n        <ion-item *ngIf="profile.public_email">\n            <h2>Email</h2>\n            <p><a (click)="openURL(\'mailto:\' + profile.public_email)">{{profile.public_email}}</a></p>\n        </ion-item>  \n        \n        <ion-item *ngIf="profile.website">\n            <h2>Website</h2>\n            <p><a (click)="openURL(profile.website)">{{profile.website}}</a></p>\n        </ion-item>    \n        \n        <ion-item *ngIf="profile.business_hours">\n            <h2>Business Hours</h2>\n            <p>{{profile.business_hours}}</p>\n        </ion-item>   \n        \n        <ion-item *ngIf="profile.biography" class="item-long-text">\n            <h2>Biography</h2>\n            <p>{{profile.biography}}</p>\n        </ion-item>          \n        \n        \n    </ion-list>\n    \n    \n    <ion-list *ngIf="properties.activeTab === \'reviews\'" class=\'profile-reviews\'>\n        \n        <div class=\'jobs-list-empty\' *ngIf="profile.reviews.length < 1">\n            <ion-icon name="star"></ion-icon>\n            <h3>No reviews</h3>\n        </div>          \n\n        <ion-item *ngFor="let review of profile.reviews" class="item-long-text">\n            \n            <ion-avatar item-start>\n              <img [src]="review.profile.avatar" />\n            </ion-avatar>            \n            <h2 class="star-ratings"><ion-icon name="star" *ngFor="let dummy of \' \'.repeat(review.rating).split(\'\'), let x = index"></ion-icon></h2>\n            <p>{{review.comment}}</p>\n        </ion-item>\n        \n        \n    </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer *ngIf="profile.isMyProfile" class=\'filter-footer\'>\n    <button ion-button [color]="profile.permission === \'contractor\' ? \'secondary\' : \'primary\'" (click)="openEditProfile()">Edit Profile</button>\n\n</ion-footer>\n'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_review_review__["a" /* ReviewProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReviewProvider = /** @class */ (function () {
    function ReviewProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    ReviewProvider.prototype.getReviews = function (profileId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/reviews?profile_id=" + profileId + "&token=" + token).subscribe(function (res) {
                        resolve(res["reviews"]);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    ReviewProvider.prototype.createReview = function (review) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/reviews?token=" + token, review).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    ReviewProvider.prototype.updateReview = function (review) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.put(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/reviews/" + review.id + "?token=" + token, review).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    ReviewProvider.prototype.deleteReview = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.delete(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/reviews/" + id + "?token=" + token).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    ReviewProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ReviewProvider);
    return ReviewProvider;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthenticationProvider = /** @class */ (function () {
    function AuthenticationProvider(http, storage, events) {
        this.http = http;
        this.storage = storage;
        this.events = events;
    }
    AuthenticationProvider.prototype.login = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log(data);
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/auth/login", data).subscribe(function (res) {
                _this.storage.set("token", res["token"]).then(function () {
                    _this.events.publish("user:loggedin");
                });
                resolve(res["token"]);
            }, function (e) {
                reject(e);
            });
        });
    };
    AuthenticationProvider.prototype.register = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/auth/signup", data).subscribe(function (res) {
                _this.storage.set("token", res["token"]).then(function () {
                    _this.events.publish("user:loggedin");
                });
                resolve(res["token"]);
            }, function (e) {
                reject(e);
            });
        });
    };
    AuthenticationProvider.prototype.getUserData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/user?token=" + token).subscribe(function (res) {
                        _this.storage.set("user", res["user"]);
                        _this.events.publish("user:retreived", res["user"]);
                        resolve(res["user"]);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    AuthenticationProvider.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/auth/logout?token=" + token, {}).subscribe(function (res) {
                        resolve();
                    }, function (e) {
                        resolve();
                    });
                }
                else {
                    resolve();
                }
                _this.storage.clear();
            });
        });
    };
    AuthenticationProvider.prototype.savePushId = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/auth/updatepushid?token=" + token, { push_id: id }).subscribe(function (res) {
                        resolve();
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    AuthenticationProvider.prototype.changePassword = function (email, password, passwordConfirm) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].apiUrl + "/auth/reset?token=" + token, { email: email, password: password, password_confirmation: passwordConfirm }).subscribe(function (res) {
                        resolve();
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    AuthenticationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */]) === "function" && _c || Object])
    ], AuthenticationProvider);
    return AuthenticationProvider;
    var _a, _b, _c;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractorJobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contractor_job_contractor_job__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_filters_filters__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_job_job__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_review_review__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_create_review_create_review__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(11);
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
 * Generated class for the ContractorJobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContractorJobsPage = /** @class */ (function () {
    function ContractorJobsPage(navCtrl, navParams, modalCtrl, jobProvider, events, reviewProvider, alertCtrl, storage, notificationProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.jobProvider = jobProvider;
        this.events = events;
        this.reviewProvider = reviewProvider;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.notificationProvider = notificationProvider;
        this.properties = { activeTab: 'available', loading: false };
        this.filters = { orderBy: "created_at", orderDirection: "DESC", priceLow: 0, priceHigh: 99999 };
        this.notificationCount = 0;
        this.notificationProvider.getNotificationCount().then(function (data) {
            _this.notificationCount = data;
        });
        this.currentJobs = [];
        this.availableJobs = [];
        this.completedJobs = [];
        this.getJobs();
        this.events.subscribe("job:applied", function (data) {
            _this.getJobs();
        });
        this.events.subscribe("job:reviewed", function (data) {
            _this.getJobs();
        });
        this.user = {};
        this.storage.get("user").then(function (user) {
            if (user) {
                _this.user = user;
            }
        });
        this.events.subscribe("notification:updatecount", function (data) {
            _this.notificationProvider.getNotificationCount().then(function (data) {
                _this.notificationCount = data;
            });
        });
    }
    ContractorJobsPage.prototype.getJobs = function () {
        var _this = this;
        this.properties.loading = true;
        this.jobProvider.getJobs(this.filters).then(function (jobs) {
            console.log(jobs);
            _this.properties.loading = false;
            _this.currentJobs = jobs["current"];
            _this.availableJobs = jobs["available"];
            _this.completedJobs = jobs["completed"];
            console.log(_this.currentJobs);
        }).catch(function () {
            _this.properties.loading = false;
        });
    };
    ContractorJobsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.jobProvider.getJobs(this.filters).then(function (jobs) {
            _this.currentJobs = jobs["current"];
            _this.availableJobs = jobs["available"];
            _this.completedJobs = jobs["completed"];
            refresher.complete();
        }).catch(function () {
            refresher.complete();
        });
    };
    ContractorJobsPage.prototype.openJob = function (ev, job) {
        ev.stopPropagation();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contractor_job_contractor_job__["a" /* ContractorJobPage */], { job: job });
    };
    ContractorJobsPage.prototype.openFilters = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modals_filters_filters__["a" /* FiltersModal */], { filters: this.filters });
        modal.onDidDismiss(function (filters) {
            if (filters) {
                _this.filters = filters;
                _this.getJobs();
            }
        });
        modal.present();
    };
    ContractorJobsPage.prototype.getPrimaryImage = function (job) {
        var images = JSON.parse(job.images);
        if (images.length > 0) {
            return images[0];
        }
        return "http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/house-icon.png";
    };
    ContractorJobsPage.prototype.formatTime = function (dateTimeString) {
        return __WEBPACK_IMPORTED_MODULE_8_moment__(dateTimeString).toNow();
    };
    ContractorJobsPage.prototype.formatTime2 = function (dateTimeString) {
        return __WEBPACK_IMPORTED_MODULE_8_moment__(dateTimeString).fromNow();
    };
    ContractorJobsPage.prototype.requiresReview = function (job) {
        if (!job.reviews || job.reviews.length < 1) {
            return true;
        }
        for (var _i = 0, _a = job.reviews; _i < _a.length; _i++) {
            var review = _a[_i];
            if (this.user && this.user.profile && parseInt(review.submitted_by_profile_id) === parseInt(this.user.profile.id)) {
                return false;
            }
        }
        return true;
    };
    ContractorJobsPage.prototype.createReview = function (ev, job) {
        var _this = this;
        ev.stopPropagation();
        var profile = job.profile;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__modals_create_review_create_review__["a" /* CreateReviewModal */], { job: job, profile: profile, permission: "contractor" });
        modal.onDidDismiss(function (review) {
            if (review) {
                console.log(review);
                _this.reviewProvider.createReview(review).then(function () {
                    _this.events.publish("job:reviewed", { job: job });
                    var alert = _this.alertCtrl.create({
                        title: 'Review Submitted',
                        message: 'Thanks for submitting a review. It will be shown publicly on their profile.',
                        buttons: [
                            {
                                text: 'Dismiss',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Cancel clicked');
                                }
                            }
                        ]
                    });
                    alert.present();
                });
            }
        });
        modal.present();
    };
    ContractorJobsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContractorJobsPage');
    };
    ContractorJobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contractor-jobs',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\pages\contractor-jobs\contractor-jobs.html"*/'<!--\n  Generated template for the ContractorJobsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="secondary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>      \n\n        <ion-title>Jobs</ion-title>\n        \n        <ion-buttons end>\n            <button ion-button icon-only notifications tappable>\n                <ion-icon name="notifications" ></ion-icon>\n                <ion-badge color="danger" *ngIf="notificationCount > 0">{{notificationCount}}</ion-badge>\n            </button>\n        </ion-buttons>        \n        \n        \n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>     \n\n    \n    <ion-segment color="secondary" [(ngModel)]="properties.activeTab">\n        <ion-segment-button value="available">\n            Available\n        </ion-segment-button>\n      <ion-segment-button value="current">\n            Current <ion-badge *ngIf="currentJobs.length > 0" color="danger">{{currentJobs.length}}</ion-badge>\n      </ion-segment-button>\n      <ion-segment-button value="completed">\n            Completed\n      </ion-segment-button>        \n    </ion-segment>\n\n    <div class="jobs-loading" *ngIf="properties.loading">\n        <ion-spinner></ion-spinner>\n    </div>\n\n    <ion-list *ngIf="properties.activeTab === \'available\'" class=\'jobs-list\'>\n        <div class=\'jobs-list-empty\' *ngIf="availableJobs.length < 1 && !properties.loading">\n            <ion-icon name="locate"></ion-icon>\n            <h3>No available jobs in your area</h3>\n        </div>\n        <ion-item (click)="openJob($event,job)" *ngFor="let job of availableJobs">\n            <ion-thumbnail item-start>\n                <img [src]="getPrimaryImage(job)">\n            </ion-thumbnail>\n            <h2>\n                <ion-badge *ngIf="job.applied" color="secondary">Applied</ion-badge>\n                {{job.title}}\n            </h2>\n            <p>Listed {{formatTime2(job.created_at)}}</p>\n            <div class=\'listing-price\' item-end>${{job.price}}</div>\n        </ion-item>    \n\n        \n    </ion-list>\n    \n    \n    <ion-list *ngIf="properties.activeTab === \'current\'" class=\'jobs-list\'>\n        <div class=\'jobs-list-empty\' *ngIf="currentJobs.length < 1 && !properties.loading">\n            <ion-icon name="time"></ion-icon>\n            <h3>No jobs currently in progress</h3>\n        </div>        \n        <ion-item (click)="openJob($event,job)" *ngFor="let job of currentJobs">\n            <ion-thumbnail item-start>\n                <img [src]="getPrimaryImage(job)">\n            </ion-thumbnail>\n            <h2>\n                {{job.title}}\n            </h2>\n            <p>To be done {{formatTime(job.created_at)}}</p>\n            <div class=\'listing-price\' item-end>${{job.price}}</div>\n        </ion-item>    \n\n        \n    </ion-list>    \n    \n    <ion-list *ngIf="properties.activeTab === \'completed\'" class=\'jobs-list\'>\n        <div class=\'jobs-list-empty\' *ngIf="completedJobs.length < 1 && !properties.loading">\n            <ion-icon name="checkbox"></ion-icon>\n            <h3>No jobs completed</h3>\n        </div>            \n        <ion-item (click)="openJob($event,job)" *ngFor="let job of completedJobs">\n            <ion-thumbnail item-start>\n                <img [src]="getPrimaryImage(job)">\n            </ion-thumbnail>\n            <h2>\n                {{job.title}}\n            </h2>\n            <p>Completed {{formatTime2(job.preferred_time)}} for ${{job.price}}</p>\n            <button ion-button clear item-end (click)="createReview($event, job)" *ngIf="requiresReview(job)" color="danger">Write Review</button>\n            <button ion-button clear item-end (click)="openJob($event, job)" *ngIf="!requiresReview(job)">View</button>\n        </ion-item>    \n\n        \n    </ion-list>       \n    \n    \n</ion-content>\n\n\n<ion-footer class=\'filter-footer\'>\n    <button ion-button color=\'secondary\' (click)="openFilters()"><ion-icon name="funnel"></ion-icon>&nbsp;&nbsp;Filters</button>\n\n</ion-footer>'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\pages\contractor-jobs\contractor-jobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_job_job__["a" /* JobProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_5__providers_review_review__["a" /* ReviewProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__["a" /* NotificationProvider */]])
    ], ContractorJobsPage);
    return ContractorJobsPage;
}());

//# sourceMappingURL=contractor-jobs.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractorJobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_job_job__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(11);
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
 * Generated class for the JobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContractorJobPage = /** @class */ (function () {
    function ContractorJobPage(navCtrl, navParams, alertCtrl, jobProvider, events, modalCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.jobProvider = jobProvider;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.job = navParams.data.job;
        this.job.imagesArray = JSON.parse(this.job.images);
        this.user = {};
        this.storage.get("user").then(function (user) {
            if (user) {
                _this.user = user;
            }
        });
        console.log(this.job);
    }
    ContractorJobPage.prototype.viewProfile = function () {
        if (this.job.profile) {
            this.job.profile.permission = "customer";
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */], { profile: this.job.profile });
        }
    };
    ContractorJobPage.prototype.viewDirections = function () {
        window.open("https://www.google.com/maps/dir/Current+Location/" + this.job.location, '_system');
    };
    ContractorJobPage.prototype.formatTime = function (dateTimeString) {
        return __WEBPACK_IMPORTED_MODULE_2_moment__(dateTimeString).format("dddd, MMMM Do YYYY, h:mm a");
    };
    ContractorJobPage.prototype.hasApplied = function () {
        if (!this.job.applications || this.job.applications.length < 1) {
            return false;
        }
        if (this.job.applied) {
            return true;
        }
        for (var _i = 0, _a = this.job.applications; _i < _a.length; _i++) {
            var application = _a[_i];
            if (this.user && this.user.profile && application.profile_id === this.user.profile.id) {
                return true;
            }
        }
        return false;
    };
    ContractorJobPage.prototype.getApplicationStatus = function () {
        for (var _i = 0, _a = this.job.applications; _i < _a.length; _i++) {
            var application = _a[_i];
            if (this.user && this.user.profile && application.profile_id === this.user.profile.id) {
                return application.status;
            }
        }
    };
    ContractorJobPage.prototype.apply = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            subTitle: 'Are you sure you want to apply for this job?',
            message: 'If you are accepted you will be obligated to do this job at the preferred date and time of the customer for the listed price.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.job.applications = _this.job.applications ? _this.job.applications : [];
                        _this.job.applications.push({ profile_id: _this.user.profile.id, job_id: _this.job.id, status: "pending" });
                        _this.jobProvider.apply(_this.job.id, _this.user.profile.id).then(function () {
                            var alert = _this.alertCtrl.create({
                                title: 'Success',
                                subTitle: 'You have successfully applied for this job.',
                                message: 'You will either be accepted or declined the job by the customer. Goodluck!',
                                buttons: [
                                    {
                                        text: 'Dismiss',
                                        role: 'cancel',
                                        handler: function () {
                                            console.log('Cancel clicked');
                                        }
                                    }
                                ]
                            });
                            alert.present();
                            _this.events.publish("job:applied", { job: _this.job });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ContractorJobPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobPage');
    };
    ContractorJobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contractor-job',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\pages\contractor-job\contractor-job.html"*/'<!--\n  Generated template for the JobPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>{{job.title ? job.title : "Job"}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n   \n    \n    <ion-list class=\'job-details\'>\n        \n        \n        <ion-item class="applied-section" *ngIf="hasApplied()">\n            <h2>You have applied for this job.</h2>\n            <p>The application status is currently {{getApplicationStatus()}}.</p>\n        </ion-item>\n\n        <ion-item>\n            <h2>Posted By</h2>\n            <p>{{job.profile.first_name}} {{job.profile.last_name}}</p>\n            <button ion-button clear item-end (click)="viewProfile()">View Profile</button>\n        </ion-item>        \n        \n        <ion-item>\n            <h2>Price</h2>\n            <p>${{job.price}}</p>\n        </ion-item>\n\n\n        <ion-item>\n            <h2>Location</h2>\n            <p *ngIf="job.status !== \'open\'">{{job.location}}</p>\n            <p *ngIf="job.status === \'open\'" class=\'hidden-location\'>You must be accepted for this job to view.</p>\n            <button *ngIf="job.status !== \'open\'" ion-button clear item-end (click)="viewDirections()">Directions</button>\n        </ion-item>        \n\n        <ion-item>\n            <h2>Preferred Date & Time</h2>\n            <p>{{formatTime(job.preferred_time)}}</p>\n        </ion-item>          \n        \n        <ion-item class="item-long-text">\n            <h2>Description</h2>\n            <p>{{job.description}}</p>\n        </ion-item>   \n\n\n        <ion-slides class="job-gallery" autoplay="5000" loop="true" pager="true" zoom="true" *ngIf="job.imagesArray && job.imagesArray.length > 0">\n            <ion-slide *ngFor="let image of job.imagesArray">\n                <img [src]="image" />\n            </ion-slide>\n        </ion-slides>\n\n        \n    </ion-list>   \n\n    \n    \n</ion-content>\n\n\n<ion-footer class=\'filter-footer\' *ngIf="job.status === \'open\' && !hasApplied()">\n    <button ion-button color=\'secondary\' (click)="apply()">Apply For Job</button>\n\n</ion-footer>\n'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\pages\contractor-job\contractor-job.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_job_job__["a" /* JobProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], ContractorJobPage);
    return ContractorJobPage;
}());

//# sourceMappingURL=contractor-job.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotificationProvider = /** @class */ (function () {
    function NotificationProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    NotificationProvider.prototype.getNotifications = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("notifications").then(function (data) {
                if (data) {
                    resolve(data);
                }
                else {
                    resolve([]);
                }
            });
        });
    };
    NotificationProvider.prototype.addNotification = function (notification) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("notifications").then(function (data) {
                var notifications = [];
                if (data) {
                    notifications = data;
                }
                if (notifications.length > 5) {
                    notifications.pop();
                }
                notification.read = false;
                notifications.push(notification);
                _this.storage.set("notifications", notifications).then(function () {
                    resolve();
                });
            });
        });
    };
    NotificationProvider.prototype.updateNotification = function (index) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("notifications").then(function (notifications) {
                if (notifications && notifications[index]) {
                    notifications[index].read = true;
                    _this.storage.set("notifications", notifications).then(function () {
                        resolve();
                    });
                }
            });
        });
    };
    NotificationProvider.prototype.getNotificationCount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("notifications").then(function (notifications) {
                var count = 0;
                if (notifications) {
                    for (var _i = 0, notifications_1 = notifications; _i < notifications_1.length; _i++) {
                        var notification = notifications_1[_i];
                        if (!notification.read) {
                            count += 1;
                        }
                    }
                }
                resolve(count);
            });
        });
    };
    NotificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], NotificationProvider);
    return NotificationProvider;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateReviewModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateReviewModal = /** @class */ (function () {
    function CreateReviewModal(platform, params, modalCtrl, viewCtrl, storage, alertCtrl, events, toastCtrl) {
        this.platform = platform;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.job = this.params.data.job;
        this.profile = this.params.data.profile;
        this.permission = this.params.data.permission;
        this.review = { profile_id: this.profile.id, job_id: this.job.id, rating: 5 };
    }
    CreateReviewModal.prototype.create = function () {
        this.viewCtrl.dismiss(this.review);
    };
    CreateReviewModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CreateReviewModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'create-review',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\modals\create-review\create-review.html"*/'<ion-header>\n    <ion-toolbar [color]="profile.permission === \'contractor\' ? \'secondary\' : \'primary\'">\n        <ion-title>\n            Write Review\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n    \n    \n    \n    <ion-list>      \n\n        \n        <ion-item class="item-long-text">\n            <p>You are reviewing {{profile.first_name}} {{profile.last_name}} for the job "{{job.title}}"</p>\n        </ion-item>   \n\n        <ion-list-header class="radius-header review-header">\n            Rating (1-5)\n            <ion-badge item-end>{{review.rating}}</ion-badge>\n        </ion-list-header>         \n        <ion-item>\n            <ion-range min="1" max="5" step="1" [(ngModel)]="review.rating" pin="true" snap=\'true\'>\n\n                <ion-icon small range-left name="star" (click)="review.rating = 1"></ion-icon>\n                <ion-icon range-right name="star" (click)="review.rating = 5"></ion-icon>\n            </ion-range>\n        </ion-item>  \n\n        \n        <ion-item>\n            <ion-label floating>Comment (optional)</ion-label>\n            <ion-textarea [(ngModel)]="review.comment"></ion-textarea>\n        </ion-item>         \n\n    </ion-list>  \n        \n        \n</ion-content>\n\n\n\n<ion-footer>\n    <button ion-button full [color]="profile.permission === \'contractor\' ? \'secondary\' : \'primary\'" (click)="create()" [disabled]="!review.rating">Submit Review</button>\n\n</ion-footer>'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\modals\create-review\create-review.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], CreateReviewModal);
    return CreateReviewModal;
}());

//# sourceMappingURL=create-review.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerJobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_create_job_create_job__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_edit_job_edit_job__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_job_job__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_job_customer_job__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_review_review__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_create_review_create_review__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_notification_notification__ = __webpack_require__(65);
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
 * Generated class for the CustomerJobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomerJobsPage = /** @class */ (function () {
    function CustomerJobsPage(navCtrl, navParams, modalCtrl, jobProvider, events, reviewProvider, alertCtrl, storage, notificationProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.jobProvider = jobProvider;
        this.events = events;
        this.reviewProvider = reviewProvider;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.notificationProvider = notificationProvider;
        this.properties = { activeTab: 'created', loading: false };
        this.completedJobs = [];
        this.openJobs = [];
        this.getJobs();
        this.notificationCount = 0;
        this.notificationProvider.getNotificationCount().then(function (data) {
            _this.notificationCount = data;
        });
        this.events.subscribe("job:accepted", function (data) {
            _this.getJobs();
        });
        this.events.subscribe("job:declined", function (data) {
            _this.getJobs();
        });
        this.events.subscribe("job:completed", function (data) {
            _this.getJobs();
        });
        this.events.subscribe("job:reviewed", function (data) {
            _this.getJobs();
        });
        this.user = {};
        this.storage.get("user").then(function (user) {
            if (user) {
                _this.user = user;
            }
        });
        this.events.subscribe("notification:updatecount", function (data) {
            _this.notificationProvider.getNotificationCount().then(function (data) {
                _this.notificationCount = data;
            });
        });
    }
    CustomerJobsPage.prototype.getJobs = function () {
        var _this = this;
        this.properties.loading = true;
        this.jobProvider.getCreatedJobs().then(function (jobs) {
            console.log(jobs);
            _this.properties.loading = false;
            _this.openJobs = jobs["open"];
            _this.completedJobs = jobs["completed"];
        }).catch(function () {
            _this.properties.loading = false;
        });
    };
    CustomerJobsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.jobProvider.getCreatedJobs().then(function (jobs) {
            _this.openJobs = jobs["open"];
            _this.completedJobs = jobs["completed"];
            refresher.complete();
        }).catch(function () {
            refresher.complete();
        });
    };
    CustomerJobsPage.prototype.openJob = function (ev, job) {
        ev.stopPropagation();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__customer_job_customer_job__["a" /* CustomerJobPage */], { job: job });
    };
    CustomerJobsPage.prototype.getPrimaryImage = function (job) {
        var images = JSON.parse(job.images);
        if (images.length > 0) {
            return images[0];
        }
        return "http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/house-icon.png";
    };
    CustomerJobsPage.prototype.formatTime = function (dateTimeString) {
        return __WEBPACK_IMPORTED_MODULE_8_moment__(dateTimeString).toNow();
    };
    CustomerJobsPage.prototype.formatTime2 = function (dateTimeString) {
        return __WEBPACK_IMPORTED_MODULE_8_moment__(dateTimeString).fromNow();
    };
    CustomerJobsPage.prototype.openCreateJob = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modals_create_job_create_job__["a" /* CreateJobModal */]);
        modal.onDidDismiss(function (job) {
            if (job) {
                _this.openJobs.push(job);
                _this.jobProvider.createJob(job).then(function (res) {
                    console.log(res);
                    job.id = res["id"];
                }).catch(function (e) {
                    console.log(e);
                });
                console.log(job);
            }
        });
        modal.present();
    };
    CustomerJobsPage.prototype.openEditJob = function (ev, job, index) {
        var _this = this;
        ev.stopPropagation();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modals_edit_job_edit_job__["a" /* EditJobModal */], { job: job });
        modal.onDidDismiss(function (job) {
            if (job && job.deleted) {
                _this.openJobs.splice(index, 1);
                _this.jobProvider.deleteJob(job.id);
            }
            else if (job) {
                console.log(job);
                console.log(_this.openJobs[index]);
                Object.assign(_this.openJobs[index], job);
                _this.jobProvider.updateJob(job).then(function (res) {
                    console.log(res);
                }).catch(function (e) {
                    console.log(e);
                });
                console.log(job);
            }
        });
        modal.present();
    };
    CustomerJobsPage.prototype.requiresReview = function (job) {
        if (!job.reviews || job.reviews.length < 1) {
            return true;
        }
        for (var _i = 0, _a = job.reviews; _i < _a.length; _i++) {
            var review = _a[_i];
            if (this.user && this.user.profile && parseInt(review.submitted_by_profile_id) === parseInt(this.user.profile.id)) {
                return false;
            }
        }
        return true;
    };
    CustomerJobsPage.prototype.createReview = function (ev, job) {
        var _this = this;
        ev.stopPropagation();
        var profile = {};
        for (var _i = 0, _a = job.applications; _i < _a.length; _i++) {
            var application = _a[_i];
            if (application.status === "accepted") {
                profile = application.profile;
            }
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__modals_create_review_create_review__["a" /* CreateReviewModal */], { job: job, profile: profile, permission: "customer" });
        modal.onDidDismiss(function (review) {
            if (review) {
                console.log(review);
                _this.reviewProvider.createReview(review).then(function () {
                    _this.events.publish("job:reviewed", { job: job });
                    var alert = _this.alertCtrl.create({
                        title: 'Review Submitted',
                        message: 'Thanks for submitting a review. It will be shown publicly on their profile.',
                        buttons: [
                            {
                                text: 'Dismiss',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Cancel clicked');
                                }
                            }
                        ]
                    });
                    alert.present();
                });
            }
        });
        modal.present();
    };
    CustomerJobsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerJobsPage');
    };
    CustomerJobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-customer-jobs',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\pages\customer-jobs\customer-jobs.html"*/'<!--\n  Generated template for the CustomerJobsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n        \n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>         \n        \n        <ion-title>Jobs</ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only notifications tappable>\n                <ion-icon name="notifications" ></ion-icon>\n                <ion-badge color="danger" *ngIf="notificationCount > 0">{{notificationCount}}</ion-badge>\n            </button>\n        </ion-buttons>         \n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>    \n    \n    <ion-segment color="primary" [(ngModel)]="properties.activeTab">\n        <ion-segment-button value="created">\n            My Jobs\n        </ion-segment-button>\n      <ion-segment-button value="completed">\n            Completed\n      </ion-segment-button>       \n    </ion-segment>\n\n    <div class="jobs-loading" *ngIf="properties.loading">\n        <ion-spinner></ion-spinner>\n    </div>\n    \n    \n\n    <ion-list *ngIf="properties.activeTab === \'created\'" class=\'jobs-list\'>\n        \n        <div class=\'jobs-list-empty\' *ngIf="openJobs.length < 1 && !properties.loading">\n            <ion-icon name="create"></ion-icon>\n            <h3>No created jobs</h3>\n        </div>               \n        \n        <ion-item *ngFor="let job of openJobs; let i = index" (click)="openJob($event, job)">\n            <ion-thumbnail item-start>\n                <img [src]="getPrimaryImage(job)">\n            </ion-thumbnail>\n            <h2>\n                <ion-badge *ngIf="job.status === \'open\' && job.applications.length > 0" color="danger">{{job.applications.length}} Application<span *ngIf="job.applications.length !== 1">s</span></ion-badge>\n                <ion-badge *ngIf="job.status === \'inprogress\'" color="primary">In Progress</ion-badge>\n                {{job.title}}</h2>\n            <p>To be done {{formatTime(job.preferred_time)}} for ${{job.price}}</p>\n            <button ion-button clear item-end (click)="openEditJob($event, job, i)">Edit</button>\n        </ion-item>   \n    </ion-list>\n    \n    \n    <ion-list *ngIf="properties.activeTab === \'completed\'" class=\'jobs-list\'>\n        \n        <div class=\'jobs-list-empty\' *ngIf="completedJobs.length < 1 && !properties.loading">\n            <ion-icon name="checkbox"></ion-icon>\n            <h3>No completed jobs</h3>\n        </div>           \n        <ion-item *ngFor="let job of completedJobs" (click)="openJob($event, job)">\n            <ion-thumbnail item-start>\n                <img [src]="getPrimaryImage(job)">\n            </ion-thumbnail>\n            <h2>{{job.title}}</h2>\n            <p>Completed {{formatTime2(job.preferred_time)}} for ${{job.price}}</p>\n            <button ion-button clear item-end (click)="createReview($event, job)" *ngIf="requiresReview(job)" color="danger">Write Review</button>\n            <button ion-button clear item-end (click)="openJob($event, job)" *ngIf="!requiresReview(job)">View</button>\n        </ion-item>   \n    </ion-list>    \n\n</ion-content>\n\n<ion-footer class=\'filter-footer\'>\n    <button ion-button color=\'primary\' (click)="openCreateJob()"><ion-icon name="add"></ion-icon>&nbsp;&nbsp;Create New Job</button>\n\n</ion-footer>\n'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\pages\customer-jobs\customer-jobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_job_job__["a" /* JobProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_6__providers_review_review__["a" /* ReviewProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_10__providers_notification_notification__["a" /* NotificationProvider */]])
    ], CustomerJobsPage);
    return CustomerJobsPage;
}());

//# sourceMappingURL=customer-jobs.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerJobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_job_job__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_review_review__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_create_review_create_review__ = __webpack_require__(66);
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
 * Generated class for the JobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomerJobPage = /** @class */ (function () {
    function CustomerJobPage(navCtrl, navParams, alertCtrl, jobProvider, reviewProvider, events, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.jobProvider = jobProvider;
        this.reviewProvider = reviewProvider;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.properties = { activeTab: "details" };
        this.job = navParams.data.job;
        this.job.imagesArray = JSON.parse(this.job.images);
        console.log(this.job.imagesArray);
    }
    CustomerJobPage.prototype.viewProfile = function (applicant) {
        if (applicant && applicant.profile) {
            applicant.profile.permission = "contractor";
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */], { profile: applicant.profile });
        }
    };
    CustomerJobPage.prototype.acceptApplicant = function (ev, applicant) {
        var _this = this;
        ev.stopPropagation();
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            subTitle: 'Are you sure you want to accept?',
            message: 'Once accepted, the contractor will be given your job location and notified to mow your lawns at your preferred date and time.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        applicant.status = "accepted";
                        _this.job.status = "inprogress";
                        _this.jobProvider.acceptJob(_this.job.id, applicant.profile_id).then(function () {
                            _this.events.publish("job:accepted", { job: _this.job });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    CustomerJobPage.prototype.declineApplicant = function (ev, applicant) {
        var _this = this;
        ev.stopPropagation();
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            subTitle: 'Are you sure you want to decline?',
            message: 'Once declined, the contractor will be notified that they did not get the job.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        applicant.status = "declined";
                        _this.jobProvider.declineJob(_this.job.id, applicant.profile_id).then(function () {
                            _this.events.publish("job:declined", { job: _this.job });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    CustomerJobPage.prototype.completeJob = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            subTitle: 'Are you sure you want to complete this job?',
            message: 'Once completed, the contractor will be notified and the job will be moved to your completed jobs.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.job.status = "completed";
                        setTimeout(function () { _this.postCompleteJob(); }, 500);
                        _this.jobProvider.completeJob(_this.job.id).then(function () {
                            _this.events.publish("job:completed", { job: _this.job });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    CustomerJobPage.prototype.postCompleteJob = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Congratulations',
            subTitle: 'This job is now complete',
            message: 'Do you want to post a review about the contractor?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.createReview();
                    }
                }
            ]
        });
        alert.present();
    };
    CustomerJobPage.prototype.createReview = function () {
        var _this = this;
        var profile = {};
        for (var _i = 0, _a = this.job.applications; _i < _a.length; _i++) {
            var application = _a[_i];
            if (application.status === "accepted") {
                profile = application.profile;
            }
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__modals_create_review_create_review__["a" /* CreateReviewModal */], { job: this.job, profile: profile, permission: "customer" });
        modal.onDidDismiss(function (review) {
            if (review) {
                console.log(review);
                _this.reviewProvider.createReview(review).then(function () {
                    _this.events.publish("job:reviewed", { job: _this.job });
                    var alert = _this.alertCtrl.create({
                        title: 'Review Submitted',
                        message: 'Thanks for submitting a review. It will be shown publicly on their profile.',
                        buttons: [
                            {
                                text: 'Dismiss',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Cancel clicked');
                                }
                            }
                        ]
                    });
                    alert.present();
                });
            }
        });
        modal.present();
    };
    CustomerJobPage.prototype.formatTime = function (dateTimeString) {
        return __WEBPACK_IMPORTED_MODULE_2_moment__(dateTimeString).format("dddd, MMMM Do YYYY, h:mm a");
    };
    CustomerJobPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobPage');
    };
    CustomerJobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-customer-job',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\pages\customer-job\customer-job.html"*/'<!--\n  Generated template for the JobPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{job.title ? job.title : "Job"}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-segment color="primary" [(ngModel)]="properties.activeTab">\n        <ion-segment-button value="details">\n            Details\n        </ion-segment-button>\n      <ion-segment-button value="applications">\n            Applications <ion-badge *ngIf="job && job.applications && job.applications.length > 0" color="danger">{{job.applications.length}}</ion-badge>\n      </ion-segment-button>       \n    </ion-segment>    \n    \n    <ion-list *ngIf="properties.activeTab === \'details\'" class=\'job-details\'>\n\n        <ion-item>\n            <h2>Price</h2>\n            <p>${{job.price}}</p>\n        </ion-item>\n\n\n        <ion-item>\n            <h2>Location</h2>\n            <p>{{job.location}}</p>\n        </ion-item>        \n\n        <ion-item>\n            <h2>Preferred Date & Time</h2>\n            <p>{{formatTime(job.preferred_time)}}</p>\n        </ion-item>          \n        \n        <ion-item class="item-long-text">\n            <h2>Description</h2>\n            <p>{{job.description}}</p>\n        </ion-item>   \n\n\n        <ion-slides class="job-gallery" autoplay="5000" loop="true" pager="true" zoom="true" *ngIf="job.imagesArray && job.imagesArray.length > 0">\n            <ion-slide *ngFor="let image of job.imagesArray">\n                <img [src]="image" />\n            </ion-slide>\n        </ion-slides>\n\n        \n    </ion-list>   \n    \n    \n    \n    <ion-list *ngIf="properties.activeTab === \'applications\'" class=\'job-applications\'>\n        <ion-item (click)="viewProfile(applicant)" *ngFor="let applicant of job.applications">\n            <ion-avatar item-start>\n              <img [src]="applicant.profile.avatar" />\n            </ion-avatar>\n            {{applicant.profile.first_name}} {{applicant.profile.last_name}}\n            <button ion-button outline item-end (click)="acceptApplicant($event, applicant)" *ngIf="job.status === \'open\' && applicant.status === \'pending\'">Accept</button>\n            <button ion-button outline item-end color="danger" (click)="declineApplicant($event, applicant)" *ngIf="job.status === \'open\' && applicant.status === \'pending\'">Decline</button>\n            <div item-end class=\'applicant-declined\' *ngIf="applicant.status === \'declined\'">Declined</div>\n            <div item-end class=\'applicant-accepted\' *ngIf="applicant.status === \'accepted\'">Accepted</div>\n        </ion-item>        \n    </ion-list>\n    \n    \n</ion-content>\n\n\n<ion-footer class=\'filter-footer\' *ngIf="job.status !== \'completed\'">\n    <button ion-button color=\'primary\' (click)="completeJob()">Mark Job As Completed</button>\n\n</ion-footer>\n'/*ion-inline-end:"D:\Taylor\Documents\Websites\lawnmower\lawnmower\src\pages\customer-job\customer-job.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_job_job__["a" /* JobProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_review_review__["a" /* ReviewProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], CustomerJobPage);
    return CustomerJobPage;
}());

//# sourceMappingURL=customer-job.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map