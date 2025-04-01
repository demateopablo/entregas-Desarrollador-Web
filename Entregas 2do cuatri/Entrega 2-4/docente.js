"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Docente = void 0;
var Docente = /** @class */ (function () {
    function Docente(nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
        this.alumnos = new Array();
    }
    Docente.prototype.getNombreCompleto = function () {
        return this.nombreCompleto;
    };
    Docente.prototype.setNombreCompleto = function (nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    };
    Docente.prototype.getAlumno = function (alumno) {
        var posicion = this.alumnos.indexOf(alumno);
        if (posicion !== -1) {
            return this.alumnos[posicion];
        }
        else
            throw new Error("Alumno no encontrado");
    };
    Docente.prototype.getAlumnos = function () {
        var infoAlumnos = "";
        this.alumnos.forEach(function (alumno) {
            infoAlumnos += "".concat(alumno.getNombreCompleto(), "\n");
        });
        return infoAlumnos;
    };
    Docente.prototype.vincularAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Docente.prototype.desvincularAlumno = function (alumno) {
        var posicion = this.alumnos.indexOf(alumno);
        if (posicion !== -1) {
            this.alumnos.splice(posicion, 1);
        }
        else
            throw new Error("Alumno no encontrado");
    };
    return Docente;
}());
exports.Docente = Docente;
