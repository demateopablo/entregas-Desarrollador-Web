"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(nombre, docentes) {
        this.nombre = nombre;
        this.docentes = docentes;
    }
    Escuela.prototype.getDocente = function (posicion) {
        return this.docentes[posicion];
    };
    Escuela.prototype.getDocentes = function () {
        var infoDocentes = "";
        this.docentes.forEach(function (docente) {
            infoDocentes += "".concat(docente.getNombreCompleto(), "\n");
        });
        return infoDocentes;
    };
    Escuela.prototype.getDocentesYAlumnos = function () {
        var infoDocentesYAlumnos = "";
        this.docentes.forEach(function (docente) {
            infoDocentesYAlumnos += "Docente:\t".concat(docente.getNombreCompleto(), "\nAlumnos:\n");
            infoDocentesYAlumnos += docente.getAlumnos();
        });
        return infoDocentesYAlumnos;
    };
    Escuela.prototype.despedirDocente = function (posicion) {
        this.docentes.splice(posicion, 1);
    };
    Escuela.prototype.expulsarAlumno = function (posicionDocente, posicionAlumno) {
        this.docentes[posicionDocente].expulsarAlumno(posicionAlumno);
    };
    Escuela.prototype.contratarDocente = function (docente) {
        this.docentes.push(docente);
    };
    Escuela.prototype.matricularAlumno = function (alumno, posicionDocente) {
        this.docentes[posicionDocente].matricularAlumno(alumno);
    };
    return Escuela;
}());
exports.Escuela = Escuela;
