"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, fecha_nacimiento, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
        this.dni = dni;
    }
    Persona.prototype.listarInfo = function () {
        console.log("Nombre completo:\t".concat(this.nombre, " ").concat(this.apellido, "\nFecha de Nacimiento:\t").concat(this.fecha_nacimiento.toLocaleDateString(), "\nDNI:\t\t\t").concat(this.dni));
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getfechaNacimiento = function () {
        return this.fecha_nacimiento;
    };
    Persona.prototype.setDni = function (nuevoDNI) {
        this.dni = nuevoDNI;
    };
    Persona.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Persona.prototype.setApellido = function (nuevoApellido) {
        this.apellido = nuevoApellido;
    };
    Persona.prototype.setFechaNacimiento = function (nuevaFechaNacimiento) {
        this.fecha_nacimiento = nuevaFechaNacimiento;
    };
    return Persona;
}());
exports.Persona = Persona;
