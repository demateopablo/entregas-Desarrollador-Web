"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuloWifi = void 0;
var ModuloWifi = /** @class */ (function () {
    function ModuloWifi(velocidadMbps, frecuenciaGhz) {
        this.velocidadMbps = velocidadMbps;
        this.frecuenciaGhz = frecuenciaGhz;
    }
    ModuloWifi.prototype.getVelocidad = function () {
        return this.velocidadMbps;
    };
    ModuloWifi.prototype.getFrecuencia = function () {
        return this.frecuenciaGhz;
    };
    ModuloWifi.prototype.setVelocidad = function (velocidad) {
        this.velocidadMbps = velocidad;
    };
    ModuloWifi.prototype.setFrecuencia = function (frecuencia) {
        this.frecuenciaGhz = frecuencia;
    };
    ModuloWifi.prototype.conectarAInternet = function () {
        console.log("Conectando a internet...");
        console.log("Conexion establecida correctamente.");
    };
    return ModuloWifi;
}());
exports.ModuloWifi = ModuloWifi;
