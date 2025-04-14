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
exports.Docente = void 0;
var persona_1 = require("./persona");
var Docente = /** @class */ (function (_super) {
    __extends(Docente, _super);
    function Docente(nombre, apellido, fecha_nacimiento, dni, salario) {
        var _this = _super.call(this, nombre, apellido, fecha_nacimiento, dni) || this;
        _this.salario = salario;
        return _this;
    }
    Docente.prototype.listarInfo = function () {
        console.log("--- Docente ---");
        _super.prototype.listarInfo.call(this);
        console.log("Salario:\t\t".concat(this.salario));
    };
    Docente.prototype.getSalario = function () {
        return this.salario;
    };
    Docente.prototype.setSalario = function (nuevoSalario) {
        if (nuevoSalario < 0)
            return;
        this.salario = nuevoSalario;
    };
    return Docente;
}(persona_1.Persona));
exports.Docente = Docente;
