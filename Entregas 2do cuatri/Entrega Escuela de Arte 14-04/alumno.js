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
exports.Alumno = void 0;
var persona_1 = require("./persona");
var escuela_1 = require("./escuela");
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(nombre, apellido, fecha_nacimiento, dni) {
        var _this = _super.call(this, nombre, apellido, fecha_nacimiento, dni) || this;
        _this.nro_legajo = escuela_1.Escuela.contadorLegajoAlumnos++;
        return _this;
    }
    Alumno.prototype.listarInfo = function () {
        console.log("--- Alumno ---");
        console.log("Numero de Legajo:\t".concat(this.nro_legajo));
        _super.prototype.listarInfo.call(this);
    };
    Alumno.prototype.getLegajo = function () {
        return this.nro_legajo;
    };
    return Alumno;
}(persona_1.Persona));
exports.Alumno = Alumno;
