"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(nombre, cursos) {
        if (cursos === void 0) { cursos = []; }
        this.nombre = nombre;
        this.cursos = cursos;
        this.alumnos = new Array;
        this.docentes = new Array;
    }
    Escuela.prototype.listarInfo = function () {
        this.cursos.forEach(function (cur) { return cur.listarInfo(); });
    };
    Escuela.prototype.eliminarCurso = function (nombre) {
        var cursoIndex = this.cursos.findIndex(function (curso) { return curso.getNombre() == nombre; });
        if (cursoIndex == -1) {
            return;
        }
        this.cursos.slice(cursoIndex, 1);
        console.log("Curso ".concat(nombre, " removido correctamente."));
    };
    Escuela.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    Escuela.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Escuela.prototype.getNombre = function () {
        return this.nombre;
    };
    Escuela.prototype.agregarAlumno = function (alumno) {
        var indexAlumno = this.alumnos.findIndex(function (al) { return al.getDni() == alumno.getDni(); });
        if (indexAlumno !== -1)
            return;
        this.alumnos.push(alumno);
    };
    Escuela.prototype.agregarDocente = function (docente) {
        var indexDocente = this.docentes.findIndex(function (doc) { return doc.getDni() == docente.getDni(); });
        if (indexDocente !== -1)
            return;
        this.docentes.push(docente);
    };
    Escuela.contadorLegajoAlumnos = 1;
    return Escuela;
}());
exports.Escuela = Escuela;
