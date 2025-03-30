"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Docente = void 0;
var Docente = /** @class */ (function () {
    function Docente(nombreCompleto, alumnos) {
        this.nombreCompleto = nombreCompleto;
        this.alumnos = alumnos;
    }
    Docente.prototype.getNombreCompleto = function () {
        return this.nombreCompleto;
    };
    Docente.prototype.setNombreCompleto = function (nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    };
    Docente.prototype.getAlumno = function (posicion) {
        return this.alumnos[posicion];
    };
    Docente.prototype.getAlumnos = function () {
        var infoAlumnos = "";
        this.alumnos.forEach(function (alumno) {
            infoAlumnos += "".concat(alumno.getNombreCompleto(), "\n");
        });
        return infoAlumnos;
    };
    return Docente;
}());
exports.Docente = Docente;
