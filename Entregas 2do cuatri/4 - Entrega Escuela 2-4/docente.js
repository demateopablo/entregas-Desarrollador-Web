"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Docente = void 0;
var Docente = /** @class */ (function () {
    function Docente(nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
        this.alumnos = new Array(); //Creamos un arreglo vacio en donde se iran asignando alumnos
    }
    Docente.prototype.getNombreCompleto = function () {
        return this.nombreCompleto;
    };
    Docente.prototype.setNombreCompleto = function (nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    };
    Docente.prototype.getAlumnos = function () {
        var infoAlumnos = this.alumnos.map(function (al) { return al.getNombreCompleto(); }).join('\n'); //Devuelve un string con todos los alumnos, uno debajo del otro
        return infoAlumnos;
    };
    Docente.prototype.vincularAlumno = function (alumno) {
        this.alumnos.push(alumno); //Recibe un alumno y lo agrega al arreglo de alumnos
    };
    Docente.prototype.desvincularAlumno = function (alumno) {
        var posicion = this.alumnos.indexOf(alumno); //Buscamos la posicion del alumno, si no lo encuentra, indexOf devuelve -1
        if (posicion == -1) {
            return;
        }
        this.alumnos.splice(posicion, 1);
    };
    return Docente;
}());
exports.Docente = Docente;
