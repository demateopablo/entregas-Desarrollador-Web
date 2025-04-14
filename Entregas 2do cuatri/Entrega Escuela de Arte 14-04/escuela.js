"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(nombre, cursos) {
        this.nombre = nombre;
        this.cursos = cursos;
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
    Escuela.contadorLegajoAlumnos = 1;
    return Escuela;
}());
exports.Escuela = Escuela;
