webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-tresenraya></app-tresenraya>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tresenraya_tresenraya_component__ = __webpack_require__("../../../../../src/app/tresenraya/tresenraya.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__tresenraya_tresenraya_component__["a" /* TresenrayaComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/tresenraya/tresenraya.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid main-container text-center\">\n  <h1>Tres en raya</h1>\n  <h6>Para comenzar a jugar elige X (empiezas tú) o O (empieza el PC)</h6>\n  <h1 *ngIf=\"quienGana == 'humano'\"> Has ganado!</h1>\n  <h1 *ngIf=\"quienGana == 'computer'\"> Gana el PC!</h1>\n  <h1 *ngIf=\"quienGana == 'empate'\"> Empate</h1>\n\n<div class=\"container-fluid main-container\">\n  <div class=\"row justify-content-center\">\n    <div (click)=\"marcar(0)\" class=\"col casilla animated fadeIn\" id=\"0\">\n\n      <div *ngIf=\"(humanArr.indexOf(0)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>X</h3>\n      </div>\n      <div *ngIf=\"(humanArr.indexOf(0)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(0)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(0)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>X</h3>\n      </div>\n\n    </div>\n    <div (click)=\"marcar(1)\" class=\"col casilla animated fadeIn\" id=\"1\">\n\n      <div *ngIf=\"(humanArr.indexOf(1)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>X</h3>\n      </div>\n      <div *ngIf=\"(humanArr.indexOf(1)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(1)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(1)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>X</h3>\n      </div>\n    </div>\n\n    <div (click)=\"marcar(2)\" class=\"col casilla animated fadeIn\" id=\"2\">\n\n      <div *ngIf=\"(humanArr.indexOf(2)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>X</h3>\n      </div>\n      <div *ngIf=\"(humanArr.indexOf(2)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(2)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(2)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>X</h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n\n    <div  (click)=\"marcar(3)\" class=\"col casilla animated fadeIn\" id=\"3\">\n\n      <div *ngIf=\"(humanArr.indexOf(3)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>X</h3>\n      </div>\n      <div *ngIf=\"(humanArr.indexOf(3)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(3)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(3)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>X</h3>\n      </div>\n\n    </div>\n\n    <div (click)=\"marcar(4)\" class=\"col casilla animated fadeIn\" id=\"4\">\n\n      <div *ngIf=\"(humanArr.indexOf(4)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>X</h3>\n      </div>\n      <div *ngIf=\"(humanArr.indexOf(4)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(4)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(4)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>X</h3>\n      </div>\n    </div>\n    <div (click)=\"marcar(5)\" class=\"col casilla animated fadeIn\" id=\"5\">\n\n      <div *ngIf=\"(humanArr.indexOf(5)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>X</h3>\n      </div>\n      <div *ngIf=\"(humanArr.indexOf(5)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(5)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(5)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>X</h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n    <div (click)=\"marcar(6)\" class=\"col casilla animated fadeIn\" id=\"6\">\n\n      <div *ngIf=\"(humanArr.indexOf(6)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>X</h3>\n      </div>\n      <div *ngIf=\"(humanArr.indexOf(6)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(6)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(6)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>X</h3>\n      </div>\n    </div>\n    <div (click)=\"marcar(7)\" class=\"col casilla animated fadeIn\" id=\"7\">\n\n      <div *ngIf=\"(humanArr.indexOf(7)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>X</h3>\n      </div>\n      <div *ngIf=\"(humanArr.indexOf(7)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(7)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(7)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>X</h3>\n      </div>\n    </div>\n    <div (click)=\"marcar(8)\" class=\"col casilla animated fadeIn\" id=\"8\">\n\n      <div *ngIf=\"(humanArr.indexOf(8)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>X</h3>\n      </div>\n      <div *ngIf=\"(humanArr.indexOf(8)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated fast\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(8)!=-1)&&empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>O</h3>\n      </div>\n      <div *ngIf=\"(computerArr.indexOf(8)!=-1)&&!empiezaHumano\"class=\"align-self-center dibujo fadeIn animated\">\n        <h3>X</h3>\n      </div>\n    </div>\n  </div>\n\n\n\n\n</div>\n<div class=\"endgame\" *ngIf=\"!start\">\n<h3 class=\"textoInicio\">Escoge X o O para empezar el juego </h3>\n</div>\n<br><br>\n<div class=\"\" *ngIf=\"start\">\n  <h3>Que empiece el juego! Suerte!</h3>\n</div>\n<button (click)=\"empezarHuman()\"\ntype=\"button\" name=\"button\" class=\"btn btn-primary\">Jugar como X</button>\n<button (click)=\"empezarPC()\"\ntype=\"button\" name=\"button\" class=\"btn btn-primary\">Jugar como O</button>\n</div>\n<br>\n<footer id=\"footer\" class=\"text-center\">\n  <div class=\"container\">\n    Designed & Coded by\n    <a href=\"https://www.freecodecamp.org/danyjaen\" target=\"_blank\">\n        Daniel Lopez</a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/tresenraya/tresenraya.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TresenrayaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TresenrayaComponent = (function () {
    function TresenrayaComponent() {
        this.winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        this.humanArr = [];
        this.computerArr = [];
        this.turnoPC = true;
        this.casillasMarcadas = new Array(9).fill(false);
        this.start = false;
        this.empiezaHumano = false;
    }
    TresenrayaComponent.prototype.ngOnInit = function () {
        //this.bestPosib(this.puntuacion(this.humanArr, this.computerArr, this.turnoPC), this.computerArr, this.humanArr);
        ////console.log(this.bestPosib(this.puntuacion(this.humanArr, this.computerArr, this.turnoPC), this.computerArr, this.humanArr))
        for (var i = 0; i < this.humanArr.length; i++) {
            this.casillasMarcadas.push(this.humanArr[i]);
        }
        for (var i = 0; i < this.humanArr.length; i++) {
            this.casillasMarcadas.push(this.computerArr[i]);
        }
    };
    TresenrayaComponent.prototype.compare = function (arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false;
            }
        }
        return true;
    };
    TresenrayaComponent.prototype.sortNumber = function (a, b) {
        return a - b;
    };
    //ordena el array de puntuaciones
    TresenrayaComponent.prototype.sortFinal = function (a, b) {
        return b[1] - a[1];
    };
    TresenrayaComponent.prototype.checkWin = function (array) {
        var result = false;
        for (var i = 0; i < this.winCombos.length; i++) {
            var aciertos = 0;
            for (var j = 0; j < this.winCombos[i].length; j++) {
                if (array.indexOf(this.winCombos[i][j]) != -1)
                    aciertos++;
            }
            result = result || aciertos >= 3;
        }
        return result;
    };
    //devuelve un array de casillas libres
    TresenrayaComponent.prototype.casillasLibres = function (arrhumano, arrcomputer) {
        var libres = [];
        var casillas = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        for (var i = 0; i < arrhumano.length; i++) {
            if (casillas.indexOf(arrhumano[i]) != -1) {
                casillas.splice(casillas.indexOf(arrhumano[i]), 1);
            }
        }
        for (var j = 0; j < arrcomputer.length; j++) {
            if (casillas.indexOf(arrcomputer[j]) != -1) {
                casillas.splice(casillas.indexOf(arrcomputer[j]), 1);
            }
        }
        return casillas;
    };
    TresenrayaComponent.prototype.posibilidades = function (arr1, arr2) {
        var libres = this.casillasLibres(arr1, arr2);
        var posibArr = [];
        for (var i = 0; i < libres.length; i++) {
            posibArr.push(arr1.concat(libres[i]));
        }
        return posibArr;
    };
    TresenrayaComponent.prototype.puntuacion = function (arrhumano, arrcomputer, turno) {
        var contador = 0;
        var posibilities = [];
        //console.log("Array humano: " + arrhumano);
        //console.log("Array computer: " + arrcomputer);
        var posibilidadesRonda1 = this.posibilidades(arrcomputer, arrhumano);
        ////console.log( posibilidadesRonda1)
        if (turno === true) {
            for (var i = 0; i < posibilidadesRonda1.length; i++) {
                //console.log("Posibilidad Ronda 1: (" + i + ") " + posibilidadesRonda1[i]);
                if (this.checkWin(posibilidadesRonda1[i])) {
                    //console.log("Ganador Ronda 1: " + this.posibilidadesComputer(arrhumano, arrcomputer)[i]);
                    posibilities.push([posibilidadesRonda1[i], 10000]);
                }
                else {
                    var contador1 = 0;
                    var posibilidadesRonda2 = this.posibilidades(arrhumano, posibilidadesRonda1[i]);
                    for (var j = 0; j < posibilidadesRonda2.length; j++) {
                        //console.log("Posibilidad Ronda 2: (" + j + ") " + posibilidadesRonda2[j]);
                        if (this.checkWin(posibilidadesRonda2[j])) {
                            contador1 -= 500;
                            //console.log("Ganador ronda 2: " + posibilidadesRonda2[j]);
                        }
                        else {
                            var posibilidadesRonda3 = this.posibilidades(posibilidadesRonda1[i], posibilidadesRonda2[j]);
                            for (var k = 0; k < posibilidadesRonda3.length; k++) {
                                //console.log("Posibilidades Ronda 3: (" + k + ") " + posibilidadesRonda3[k]);
                                if (this.checkWin(posibilidadesRonda3[k])) {
                                    contador1 += 10;
                                    //console.log("Ganador Ronda 3: " + posibilidadesRonda3[k]);
                                }
                                else {
                                    //console.log("no es ganador de Ronda 3: " + posibilidadesRonda3[k]);
                                    var posibilidadesRonda4 = this.posibilidades(posibilidadesRonda2[j], posibilidadesRonda3[k]);
                                    for (var l = 0; l < posibilidadesRonda4.length; l++) {
                                        ////console.log(posibilidadesRonda4[l])
                                        if (this.checkWin(posibilidadesRonda4[l])) {
                                            //console.log("Ganador de Ronda 4: " + posibilidadesRonda4[l])
                                            contador1 -= 5;
                                        }
                                        else {
                                            var posibilidadesRonda5 = this.posibilidades(posibilidadesRonda3[k], posibilidadesRonda4[l]);
                                            for (var m = 0; m < posibilidadesRonda5.length; m++) {
                                                if (this.checkWin(posibilidadesRonda5[m])) {
                                                    contador += 2;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    posibilities.push([this.posibilidades(arrcomputer, arrhumano)[i], contador1]);
                }
            }
            return posibilities.sort(this.sortFinal);
        }
    };
    TresenrayaComponent.prototype.bestPosib = function (array, arrPC, arrHuman) {
        if (arrPC.length === 0) {
            var libres = this.casillasLibres(arrHuman, arrPC);
            if (libres.indexOf(4) != -1) {
                return 4;
            }
            else if (libres.indexOf(0) != -1) {
                return 0;
            }
        }
        var best = array[0][0];
        var casilla;
        //console.log(best);
        for (var i = 0; i < best.length; i++) {
            if (this.computerArr.indexOf(best[i]) == -1) {
                casilla = best[i];
            }
        }
        return casilla;
    };
    TresenrayaComponent.prototype.sleep = function (milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    };
    TresenrayaComponent.prototype.marcar = function (cas) {
        if (this.start) {
            this.quienGana = "";
            this.start = true;
            if (this.casillasLibres(this.humanArr, this.computerArr).indexOf(cas) != -1) {
                this.humanArr.push(cas);
                if (((this.checkWin(this.humanArr) || this.checkWin(this.computerArr)) || this.casillasLibres(this.humanArr, this.computerArr).length == 0)) {
                    console.log(this.casillasLibres(this.humanArr, this.computerArr).length);
                    if (this.checkWin(this.humanArr)) {
                        this.quienGana = "human";
                    }
                    else if (this.checkWin(this.computerArr)) {
                        this.quienGana = "computer";
                    }
                    else {
                        this.quienGana = "empate";
                    }
                    this.start = false;
                    var flagPartidaAcabada = true;
                    this.empiezaHumano = false;
                }
                if (!flagPartidaAcabada) {
                    this.computerArr.push(this.bestPosib(this.puntuacion(this.humanArr, this.computerArr, this.turnoPC), this.computerArr, this.humanArr));
                    if (((this.checkWin(this.humanArr) || this.checkWin(this.computerArr)) || this.casillasLibres(this.humanArr, this.computerArr).length == 0)) {
                        console.log(this.casillasLibres(this.humanArr, this.computerArr).length);
                        if (this.checkWin(this.humanArr)) {
                            this.quienGana = "human";
                        }
                        else if (this.checkWin(this.computerArr)) {
                            this.quienGana = "computer";
                        }
                        else {
                            this.quienGana = "empate";
                        }
                        this.start = false;
                        var flagPartidaAcabada = true;
                        this.empiezaHumano = false;
                    }
                }
                flagPartidaAcabada = false;
            }
        }
    };
    TresenrayaComponent.prototype.empezarPC = function () {
        this.humanArr = [];
        this.computerArr = [];
        this.quienGana = "";
        this.start = true;
        this.computerArr.push(this.bestPosib(this.puntuacion(this.humanArr, this.computerArr, this.turnoPC), this.computerArr, this.humanArr));
    };
    TresenrayaComponent.prototype.empezarHuman = function () {
        this.humanArr = [];
        this.computerArr = [];
        this.quienGana = "";
        this.empiezaHumano = true;
        this.start = true;
    };
    TresenrayaComponent.prototype.fin = function () {
        this.humanArr = [];
        this.computerArr = [];
    };
    return TresenrayaComponent;
}());
TresenrayaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-tresenraya',
        template: __webpack_require__("../../../../../src/app/tresenraya/tresenraya.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], TresenrayaComponent);

//# sourceMappingURL=tresenraya.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map