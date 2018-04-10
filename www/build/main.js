webpackJsonp([3],{

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/grupo/grupo.module": [
		281,
		2
	],
	"../pages/login/login.module": [
		154
	],
	"../pages/notificacao/notificacao.module": [
		282,
		1
	],
	"../pages/perfil/perfil.module": [
		283,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* unused harmony export listaRetorno */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_users__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, toast, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.userProvider = userProvider;
        this.listaMensagens = new Array();
        this.listaUsuarios = new Array();
        this.lista = new Array();
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.userProvider.login(this.email, this.senha)
            .then(function (result) {
            _this.usuarioLogado = result;
            if (!isEmpty(_this.usuarioLogado[0])) {
                _this.consultaUsuarios();
                _this.consultaMensagem(_this.usuarioLogado[0].id);
                _this.toast.create({ message: "Usuário logado com sucesso. ", duration: 3000 }).present();
            }
            else {
                _this.toast.create({ message: "Erro ao tentar logar.", duration: 3000 }).present();
            }
        })
            .catch(function (error) {
            _this.toast.create({ message: "Erro ao tentar logar.", duration: 3000 }).present();
        });
        /*
          Valida se o objeto esta preenchido.
        */
        function isEmpty(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop))
                    return false;
            }
            return true;
        }
    };
    LoginPage.prototype.consultaMensagem = function (id) {
        var _this = this;
        this.userProvider.listarMensagens(id)
            .then(function (result) {
            _this.listaMensagens = result;
            var i;
            var obj;
            var j = 0;
            var r = 0;
            for (i = 0; i < _this.listaMensagens.length; i++) {
                for (j = 0; j < _this.listaUsuarios.length; j++) {
                    if (_this.listaMensagens[i].remetente == _this.listaUsuarios[j].id) {
                        obj = {
                            idAluno: _this.usuarioLogado[0].id,
                            tituloMensagem: _this.listaMensagens[i].titulo,
                            textoMensagem: _this.listaMensagens[i].texto,
                            nomeRemetente: _this.listaUsuarios[j].nome,
                            dataEnvioMensagem: _this.listaMensagens[i].data
                        };
                        _this.lista[r] = obj;
                        r++;
                    }
                }
            }
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], { listaMensagens: _this.listaMensagens, lista: _this.lista });
            /*
             Objeto JavaScript que usamos para armazenar dados no navegador.
            */
            localStorage.setItem('listaObjetos', JSON.stringify(_this.lista));
        });
    };
    LoginPage.prototype.consultaUsuarios = function () {
        var _this = this;
        this.userProvider.listarUsuarios()
            .then(function (result) {
            _this.listaUsuarios = result;
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/andre/andre/ionic/appMenu/src/pages/login/login.html"*/'<ion-content padding style="background:url(assets/img/5iCndnD2SVKQ1M71ASut_site-header-brand.png) no-repeat center;background-size:cover;" id="page1">\n  <div class="spacer" style="width:300px;height:47px;" id="login-spacer2"></div>\n  <img src="assets/img/UmvrjHaDTx72zuTjGSaY_unnamed.png" style="display:block;width:50%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:27px;" id="login-spacer1"></div>\n  <form id="login-form1">\n    <ion-item id="login-input2">\n      <ion-label></ion-label>\n      <ion-input type="email" placeholder="Email" name="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item id="login-input3">\n      <ion-label></ion-label>\n      <ion-input type="password" placeholder="Senha" name="senha" [(ngModel)]="senha"></ion-input>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:27px;" id="login-spacer3"></div>\n    <button id="login-button1" ion-button color="calm" block style="font-weight:300;border-radius:25px 25px 25px 25px;" on-click="login()">\n      Login\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/andre/andre/ionic/appMenu/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_users_users__["a" /* UsersProvider */]])
    ], LoginPage);
    return LoginPage;
}());

var listaRetorno = (function () {
    function listaRetorno() {
    }
    return listaRetorno;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisciplinasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisciplinasPage = (function () {
    function DisciplinasPage(navCtrl, navParams, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.lista = new Array();
        this.listaDisciplinas = new Array();
        this.lista = JSON.parse(localStorage.getItem('listaObjetos'));
        //console.log("Lista disciplinas");
        this.consultasDisciplinas(this.lista[0].idAluno);
        //console.log(this.lista);
        // this.consultasDisciplinas(this.lista[0].idAluno);
    }
    /*
      MÉTODO PARA CONSULTAR DISCIPLINAS
    */
    DisciplinasPage.prototype.consultasDisciplinas = function (id) {
        var _this = this;
        this.userProvider.listarDisciplinas(id)
            .then(function (result) {
            _this.listaDisciplinas = result;
            console.log("Lista disciplinas");
            console.log(_this.listaDisciplinas);
        });
    };
    DisciplinasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/andre/andre/ionic/appMenu/src/pages/disciplinas/disciplinas.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Disciplinas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page2" style="background-color:#FFFFFF;">\n\n  <ion-card id="muralDeDisciplinas" *ngFor="let disciplina of listaDisciplinas">\n      <ion-card-header>\n          Disciplina: {{disciplina.disciplina.nome}}\n        </ion-card-header>\n        <ion-card-content>\n            Código: {{disciplina.disciplina.codigo}}\n        </ion-card-content>     \n    \n  </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"/home/andre/andre/ionic/appMenu/src/pages/disciplinas/disciplinas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */]])
    ], DisciplinasPage);
    return DisciplinasPage;
}());

//# sourceMappingURL=disciplinas.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_disciplinas_disciplinas__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_users_users__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_disciplinas_disciplinas__["a" /* DisciplinasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/grupo/grupo.module#GrupoPageModule', name: 'GrupoPage', segment: 'grupo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notificacao/notificacao.module#NotificacaoPageModule', name: 'NotificacaoPage', segment: 'notificacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_disciplinas_disciplinas__["a" /* DisciplinasPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_users_users__["a" /* UsersProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_disciplinas_disciplinas__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(155);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Disciplinas', component: __WEBPACK_IMPORTED_MODULE_5__pages_disciplinas_disciplinas__["a" /* DisciplinasPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/andre/andre/ionic/appMenu/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/andre/andre/ionic/appMenu/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lista_mensagens = new Array();
        this.lista = new Array();
        this.lista = JSON.parse(localStorage.getItem('listaObjetos'));
        //console.log("LISTA HOME");
        //console.log(this.lista);
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/andre/andre/ionic/appMenu/src/pages/home/home.html"*/'<ion-header>\n    <!--<ion-navbar>-->\n   <ion-toolbar primary> \n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        Mural de Mensagens\n      </ion-title>\n    <!--</ion-navbar>-->\n    </ion-toolbar>\n  </ion-header>\n  <ion-content padding id="page2" style="background-color:#FFFFFF;">\n   \n    <!--<button ion-button secondary menuToggle>Menu</button>-->\n    <ion-card id="muralDeMensagens-card21" *ngFor="let mensagem of lista">\n        <ion-card-header>\n            Prof:{{mensagem.nomeRemetente}}\n          </ion-card-header>\n          <ion-card-content>\n              Mensagem: \n              {{mensagem.textoMensagem}}\n          </ion-card-content>\n          <ion-item>\n              <ion-label>Data</ion-label>\n              <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]=mensagem.dataEnvioMensagem></ion-datetime>\n          </ion-item>\n     \n    </ion-card>\n    \n  </ion-content>'/*ion-inline-end:"/home/andre/andre/ionic/appMenu/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(250);
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



var UsersProvider = (function () {
    function UsersProvider(http) {
        this.http = http;
        /*
         VARIÁVEIS DE ENDEREÇOS DOS SERVIÇOS
       */
        this.API_REST_LOGIN = "http://renatoln.pythonanywhere.com/usuarios/?email=";
        this.API_REST_MENSAGEM = "http://renatoln.pythonanywhere.com/mensagens/?destinatario=";
        this.API_REST_USUARIOS = "http://renatoln.pythonanywhere.com/usuarios/";
        this.API_REST_DISCIPLINAS_USUARIOS = "http://renatoln.pythonanywhere.com/disciplina_alunoss/?estudante=";
    }
    /*
      MÉTODO PARA CONSULTAR LOGIN
    */
    UsersProvider.prototype.login = function (email, senha) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (email != null && senha != null) {
                var data = {
                    email: email,
                    senha: senha
                };
            }
            else {
                (function (error) {
                    reject(error);
                });
            }
            _this.http.get(_this.API_REST_LOGIN + data.email + '&senha=', data.senha)
                .subscribe(function (result) {
                resolve(result.json());
            }),
                function (error) {
                    reject(error);
                };
        });
    };
    /*
    MÉTODO PARA LISTAR MENSAGENS
  */
    UsersProvider.prototype.listarMensagens = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (id != null) {
                var objeto = {
                    id: id
                };
            }
            else {
                (function (error) {
                    reject(error);
                });
            }
            _this.http.get(_this.API_REST_MENSAGEM + objeto.id)
                .subscribe(function (result) {
                resolve(result.json());
            }),
                function (error) {
                    reject(error);
                };
        });
    };
    /*
      MÉTODO PARA LISTAR USUARIOS
    */
    UsersProvider.prototype.listarUsuarios = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_REST_USUARIOS)
                .subscribe(function (result) {
                resolve(result.json());
            }),
                function (error) {
                    reject(error);
                };
        });
    };
    /*
      MÉTODO PARA LISTAR DISCIPLINAS
    */
    UsersProvider.prototype.listarDisciplinas = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_REST_DISCIPLINAS_USUARIOS + id)
                .subscribe(function (result) {
                resolve(result.json());
            }),
                function (error) {
                    reject(error);
                };
        });
    };
    UsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], UsersProvider);
    return UsersProvider;
}());

//# sourceMappingURL=users.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map