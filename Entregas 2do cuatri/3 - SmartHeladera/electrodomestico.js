"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electrodomestico = void 0;
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.estaEncendido = false;
    }
    Electrodomestico.prototype.encender = function () {
        if (this.estaEncendido) {
            return;
        }
        this.estaEncendido = true;
    };
    Electrodomestico.prototype.apagar = function () {
        if (!this.estaEncendido) {
            return;
        }
        this.estaEncendido = false;
    };
    Electrodomestico.prototype.mostrarInfo = function () {
        return "Marca:\t".concat(this.marca, "\nModelo:\t").concat(this.modelo, "\nEncendido:\t").concat(this.estaEncendido ? 'Si' : 'No');
    };
    return Electrodomestico;
}());
exports.Electrodomestico = Electrodomestico;
