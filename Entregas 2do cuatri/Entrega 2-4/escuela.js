"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(nombre) {
        this.nombre = nombre;
        this.docentes = new Array();
        this.alumnos = new Array();
    }
    Escuela.prototype.getDocente = function (docente) {
        var posicion = this.docentes.indexOf(docente);
        if (posicion !== -1) {
            return this.docentes[posicion];
        }
        else
            throw new Error("Docente no encontrado");
    };
    Escuela.prototype.getNombre = function () {
        return this.nombre;
    };
    Escuela.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Escuela.prototype.matricularAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Escuela.prototype.despedirDocente = function (docente) {
        var posicion = this.docentes.indexOf(docente);
        if (posicion !== -1) {
            this.docentes.splice(posicion, 1);
        }
        else
            throw new Error("Docente no encontrado");
    };
    Escuela.prototype.desvincularAlumnoADocente = function (docente, alumno) {
        this.getDocente(docente).desvincularAlumno(alumno);
    };
    Escuela.prototype.contratarDocente = function (docente) {
        this.docentes.push(docente);
    };
    Escuela.prototype.vincularAlumnoADocente = function (alumno, docente) {
        this.getDocente(docente).vincularAlumno(alumno);
    };
    Escuela.prototype.listarAlumnos = function () {
        var infoAlumnos = "";
        this.alumnos.forEach(function (alumno) {
            infoAlumnos += "".concat(alumno.getNombreCompleto(), "\n");
        });
        return infoAlumnos;
    };
    Escuela.prototype.listarDocentes = function () {
        var infoDocentes = "";
        this.docentes.forEach(function (docente) {
            infoDocentes += "".concat(docente.getNombreCompleto(), "\n");
        });
        return infoDocentes;
    };
    return Escuela;
}());
exports.Escuela = Escuela;
