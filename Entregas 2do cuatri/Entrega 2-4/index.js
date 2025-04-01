"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var escuela_1 = require("./escuela");
var docente_1 = require("./docente");
var alumno_1 = require("./alumno");
var alumno1 = new alumno_1.Alumno('Juan Perez', 8);
var alumno2 = new alumno_1.Alumno('Lucio Gomez', 4);
var alumno3 = new alumno_1.Alumno('Julian Alvarez', 9);
var alumno4 = new alumno_1.Alumno('Pedro Arias', 1);
var docente_lalo = new docente_1.Docente('Lalo Landa');
var alumno5 = new alumno_1.Alumno('Maria Hernandez', 3);
var alumno6 = new alumno_1.Alumno('Arya Stark', 7);
var alumno7 = new alumno_1.Alumno('Mariana Estevez', 8);
var alumno8 = new alumno_1.Alumno('Pablo Demateo', 10);
var docente_julia = new docente_1.Docente('Julia Fernandez');
var escuela = new escuela_1.Escuela('CEPIT');
//Contratamos al primer docente
escuela.contratarDocente(docente_lalo);
//Matriculamos a dos alumnos
escuela.matricularAlumno(alumno1);
escuela.matricularAlumno(alumno2);
//Listamos los docentes y alumnos actuales
console.log(escuela.listarDocentes());
console.log(escuela.listarAlumnos());
//Matriculamos dos nuevos alumnos
escuela.matricularAlumno(alumno3);
escuela.matricularAlumno(alumno4);
//Vinculamos los alumnos al docente Lalo Landa
escuela.vincularAlumnoADocente(alumno1, docente_lalo);
escuela.vincularAlumnoADocente(alumno2, docente_lalo);
escuela.vincularAlumnoADocente(alumno3, docente_lalo);
escuela.vincularAlumnoADocente(alumno4, docente_lalo);
//Listamos nuevamente los alumnos actuales (Ahora son 4)
console.log(escuela.listarAlumnos());
//Matriculamos 3 nuevos alumnos sumando un total de 7
escuela.matricularAlumno(alumno5);
escuela.matricularAlumno(alumno6);
escuela.matricularAlumno(alumno7);
//Contratamos a un nuevo docente: Julia Fernandez
escuela.contratarDocente(docente_julia);
//Listamos los dos docentes
console.log(escuela.listarDocentes());
//Matriculamos un nuevo alumno
escuela.matricularAlumno(alumno8);
//Viculamos los alumnos al docente Julia Fernandez
escuela.vincularAlumnoADocente(alumno5, docente_julia);
escuela.vincularAlumnoADocente(alumno6, docente_julia);
escuela.vincularAlumnoADocente(alumno7, docente_julia);
escuela.vincularAlumnoADocente(alumno8, docente_julia);
//Listamos los alumnos
console.log(escuela.listarAlumnos());
console.log("Ahora, a despedir a Lalo Landa...");
//Despedimos al docente Lalo Landa
escuela.despedirDocente(docente_lalo);
//Listamos los docentes
console.log(escuela.listarDocentes());
//Le pedimos a Julia que nos diga que alumnos tiene a cargo:
console.log("Los alumnos a cargo de Julia son:");
console.log(escuela.getDocente(docente_julia).getAlumnos());
//Aprobaciones:
console.log(":");
console.log("".concat(alumno1.getNombreYAprobacion()));
console.log("".concat(alumno2.getNombreYAprobacion()));
console.log("".concat(alumno3.getNombreYAprobacion()));
console.log("".concat(alumno4.getNombreYAprobacion()));
console.log("".concat(alumno5.getNombreYAprobacion()));
console.log("".concat(alumno6.getNombreYAprobacion()));
console.log("".concat(alumno7.getNombreYAprobacion()));
console.log("".concat(alumno8.getNombreYAprobacion()));
