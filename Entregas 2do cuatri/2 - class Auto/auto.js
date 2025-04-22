"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, anio, velocidad_maxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.velocidad_maxima = velocidad_maxima;
        this.velocidad = 0;
        this.encendido = false;
    }
    Auto.prototype.encender = function () {
        if (!this.encendido)
            this.encendido = true;
    };
    Auto.prototype.apagar = function () {
        if (this.encendido)
            this.encendido = false;
    };
    Auto.prototype.acelerar = function (vel) {
        if (!this.encendido)
            return;
        if ((this.velocidad + vel) < this.velocidad_maxima) {
            this.velocidad += vel;
        }
        else
            this.velocidad = this.velocidad_maxima;
    };
    Auto.prototype.frenar = function (vel) {
        if ((this.velocidad - vel) > 0) {
            this.velocidad -= vel;
        }
        else
            this.velocidad = 0;
    };
    Auto.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Auto.prototype.getEstaEncendido = function () {
        return this.encendido;
    };
    return Auto;
}());
exports.Auto = Auto;
