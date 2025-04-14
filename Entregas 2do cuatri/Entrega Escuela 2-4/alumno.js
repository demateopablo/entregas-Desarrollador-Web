"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombreCompleto, nota) {
        this.nombreCompleto = nombreCompleto;
        this.nota = nota;
    }
    Alumno.prototype.getNombreCompleto = function () {
        return this.nombreCompleto;
    };
    Alumno.prototype.setNombreCompleto = function (nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    };
    Alumno.prototype.estaAprobado = function () {
        return (this.nota > 7);
    };
    Alumno.prototype.getNombreYAprobacion = function () {
        return "".concat(this.getNombreCompleto(), "\t").concat(this.estaAprobado() ? "Aprobado" : "Desaprobado");
    };
    return Alumno;
}());
exports.Alumno = Alumno;
