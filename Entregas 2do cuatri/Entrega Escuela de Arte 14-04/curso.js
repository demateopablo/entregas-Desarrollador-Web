"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
var Curso = /** @class */ (function () {
    function Curso(nombre, duracion_semanas, fecha_inicio, docente_responsable, alumnos) {
        if (alumnos === void 0) { alumnos = []; }
        this.nombre = nombre;
        this.duracion_semanas = duracion_semanas;
        this.fecha_inicio = fecha_inicio;
        this.docente_responsable = docente_responsable;
        this.alumnos = alumnos;
    }
    Curso.prototype.listarInfo = function () {
        console.log("Curso:\t\t\t".concat(this.nombre, "\nDuracion:\t\t").concat(this.duracion_semanas, " semanas\nFecha de Inicio:\t").concat(this.fecha_inicio.toLocaleDateString()));
        this.docente_responsable.listarInfo();
        this.alumnos.forEach(function (al) {
            return al.listarInfo();
        });
        console.log("--------------------------------------------");
    };
    Curso.prototype.agregarAlumnos = function (alumnos) {
        var _this = this;
        alumnos.forEach(function (al) { return _this.alumnos.push(al); });
    };
    Curso.prototype.getNombre = function () {
        return this.nombre;
    };
    return Curso;
}());
exports.Curso = Curso;
