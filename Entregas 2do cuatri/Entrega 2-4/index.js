"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var escuela_1 = require("./escuela");
var docente_1 = require("./docente");
var alumno_1 = require("./alumno");
var alumno1 = new alumno_1.Alumno('Juan Perez', 8);
var alumno2 = new alumno_1.Alumno('Lucio Gomez', 4);
var alumno3 = new alumno_1.Alumno('Julian Alvarez', 9);
var alumno4 = new alumno_1.Alumno('Pedro Arias', 1);
var docente1 = new docente_1.Docente('Lalo Landa', [alumno1, alumno2, alumno3, alumno4]);
var alumno5 = new alumno_1.Alumno('Maria Hernandez', 3);
var alumno6 = new alumno_1.Alumno('Noah Luna', 7);
var alumno7 = new alumno_1.Alumno('Mariana Estevez', 8);
var alumno8 = new alumno_1.Alumno('Pablo Demateo', 10);
var docente2 = new docente_1.Docente('Julia Fernandez', [alumno5, alumno6, alumno7, alumno8]);
var escuela1 = new escuela_1.Escuela('CEPIT', [docente1, docente2]);
/* console.log(`\nDocente:\t${escuela1.getDocente(0).getNombreCompleto()}`); */
/* console.log(escuela1.getDocente(0).getAlumno(0).getNombreYAprobacion());
console.log(escuela1.getDocente(0).getAlumno(1).getNombreYAprobacion());
console.log(escuela1.getDocente(0).getAlumno(2).getNombreYAprobacion());
console.log(escuela1.getDocente(0).getAlumno(3).getNombreYAprobacion());
console.log(`\nDocente:\t${escuela1.getDocente(1).getNombreCompleto()}`);
console.log(escuela1.getDocente(1).getAlumno(0).getNombreYAprobacion());
console.log(escuela1.getDocente(1).getAlumno(1).getNombreYAprobacion());
console.log(escuela1.getDocente(1).getAlumno(2).getNombreYAprobacion());
console.log(escuela1.getDocente(1).getAlumno(3).getNombreYAprobacion()); */
/* console.log(escuela1.getDocente(0).getAlumnos()); */
console.log(escuela1.getDocentesYAlumnos());
escuela1.contratarDocente(new docente_1.Docente("Marcelo Gallardo", [new alumno_1.Alumno("Diego Parra", 3), new alumno_1.Alumno("Lucas Ferro", 8)]));
console.log(escuela1.getDocentesYAlumnos());
escuela1.expulsarAlumno(2, 1);
console.log(escuela1.getDocentesYAlumnos());
