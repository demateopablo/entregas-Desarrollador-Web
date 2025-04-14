"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(nombre) {
        this.nombre = nombre;
        this.docentes = new Array(); //Creamos un arreglo vacio en donde se iran asignando docentes
        this.alumnos = new Array(); //Creamos un arreglo vacio en donde se iran asignando alumnos
    }
    Escuela.prototype.getNombre = function () {
        return this.nombre;
    };
    Escuela.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Escuela.prototype.matricularAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Escuela.prototype.contratarDocente = function (docente) {
        this.docentes.push(docente);
    };
    Escuela.prototype.despedirDocente = function (docente) {
        var posicion = this.docentes.indexOf(docente);
        if (posicion == -1) {
            return;
        }
        this.docentes.splice(posicion, 1);
    };
    Escuela.prototype.expulsarAlumno = function (alumno) {
        var posicion = this.alumnos.indexOf(alumno);
        if (posicion == -1) {
            return;
        }
        this.alumnos.splice(posicion, 1);
    };
    Escuela.prototype.desvincularAlumnoADocente = function (docente, alumno) {
        var posicion = this.docentes.indexOf(docente);
        if (posicion == -1) {
            return;
        }
        this.docentes[posicion].desvincularAlumno(alumno);
    };
    Escuela.prototype.vincularAlumnoADocente = function (alumno, docente) {
        var posicion = this.docentes.indexOf(docente);
        if (posicion == -1) {
            return;
        }
        this.docentes[posicion].vincularAlumno(alumno);
    };
    Escuela.prototype.listarAlumnos = function () {
        return this.alumnos.map(function (al) { return al.getNombreCompleto(); }).join("\n");
    };
    Escuela.prototype.listarDocentes = function () {
        return this.docentes.map(function (doc) { return doc.getNombreCompleto(); }).join("\n");
    };
    return Escuela;
}());
exports.Escuela = Escuela;
