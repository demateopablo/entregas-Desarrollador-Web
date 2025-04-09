"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heladera = void 0;
var electrodomestico_1 = require("./electrodomestico");
var Heladera = /** @class */ (function (_super) {
    __extends(Heladera, _super);
    function Heladera(marca, modelo) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.temperatura = 1; //temperatura inicial = 1
        return _this;
    }
    Heladera.prototype.cambiarTemperatura = function (nuevaTemp) {
        //temperatura maxima=5, minima=0
        if (nuevaTemp < 0 || nuevaTemp > 5) {
            console.log("Temperatura incorrecta. Valores permitidos entre 0 y 5");
            return;
        }
        this.temperatura = nuevaTemp;
    };
    return Heladera;
}(electrodomestico_1.Electrodomestico));
exports.Heladera = Heladera;
