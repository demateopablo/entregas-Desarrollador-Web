import { Escuela } from './escuela';
import { Curso } from './curso';
import { Alumno } from './alumno';
import { Docente } from './docente';

let juan: Alumno = new Alumno(`Juan`, `Perez`, new Date(`1995-05-27`), 39725123);
let maria: Alumno = new Alumno(`Maria`, `Suarez`, new Date(`1997-04-17`), 40373333);
let lucas: Alumno = new Alumno(`Lucas`, `Gonzalez`, new Date(`1996-11-01`), 40002234);

let doc_Pablo: Docente = new Docente(`Pablo`, `Demateo`, new Date(`1991-07-26`), 36364622, 1200);
let doc_Gimena: Docente = new Docente(`Gimena`, `Corrales`, new Date(`1993-01-30`), 37855697, 1100);

let cursoAlgebra: Curso = new Curso(`Algebra 1`, 12, new Date(`2025-08-5`), doc_Pablo);

cursoAlgebra.agregarAlumnos([juan, maria]);

let cursoIngles: Curso = new Curso(`Ingles 2`, 8, new Date(`2025-03-6`), doc_Gimena);

cursoIngles.agregarAlumnos([lucas]);

let CRESTA: Escuela = new Escuela(`CRESTA`, [cursoAlgebra, cursoIngles]);

CRESTA.listarInfo();