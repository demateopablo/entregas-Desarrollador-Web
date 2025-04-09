import { Escuela } from "./escuela";
import { Docente } from "./docente";
import { Alumno } from "./alumno";

//Inicializamos 4 alumnos
let alumno1:Alumno = new Alumno('Juan Perez', 8);
let alumno2:Alumno = new Alumno('Lucio Gomez', 4);
let alumno3:Alumno = new Alumno('Julian Alvarez', 9);
let alumno4:Alumno = new Alumno('Pedro Arias', 1);

//Inicializamos un docente
let docente_lalo:Docente = new Docente('Lalo Landa');

//Inicializamos 4 alumnos
let alumno5:Alumno = new Alumno('Maria Hernandez', 3);
let alumno6:Alumno = new Alumno('Arya Stark', 7);
let alumno7:Alumno = new Alumno('Marcos Estevez', 8);
let alumno8:Alumno = new Alumno('Pablo Demateo', 10);

//Inicializamos un docente
let docente_julia:Docente = new Docente('Julia Fernandez');

//Inicializamos la escuela
let escuela:Escuela = new Escuela('CEPIT');

//Contratamos al primer docente
escuela.contratarDocente(docente_lalo);
//Matriculamos a dos alumnos
escuela.matricularAlumno(alumno1);
escuela.matricularAlumno(alumno2);
//Listamos los docentes y alumnos actuales
console.log(`Docente: ${escuela.listarDocentes()}`);
console.log(`Alumnos:\n${escuela.listarAlumnos()}`);
//Matriculamos dos nuevos alumnos
escuela.matricularAlumno(alumno3);
escuela.matricularAlumno(alumno4);
//Vinculamos los alumnos al docente Lalo Landa
escuela.vincularAlumnoADocente(alumno1, docente_lalo);
escuela.vincularAlumnoADocente(alumno2, docente_lalo);
escuela.vincularAlumnoADocente(alumno3, docente_lalo);
escuela.vincularAlumnoADocente(alumno4, docente_lalo);
//Listamos nuevamente los alumnos actuales (Ahora son 4)
console.log(`Alumnos:\n${escuela.listarAlumnos()}`);
//Matriculamos 3 nuevos alumnos sumando un total de 7
escuela.matricularAlumno(alumno5);
escuela.matricularAlumno(alumno6);
escuela.matricularAlumno(alumno7);
//Contratamos a un nuevo docente: Julia Fernandez
escuela.contratarDocente(docente_julia);
//Listamos los dos docentes
console.log(`Docentes:\n${escuela.listarDocentes()}`);
//Matriculamos un nuevo alumno
escuela.matricularAlumno(alumno8);
//Viculamos los alumnos al docente Julia Fernandez
escuela.vincularAlumnoADocente(alumno5, docente_julia);
escuela.vincularAlumnoADocente(alumno6, docente_julia);
escuela.vincularAlumnoADocente(alumno7, docente_julia);
escuela.vincularAlumnoADocente(alumno8, docente_julia);
//Listamos los alumnos
console.log(`Alumnos:\n${escuela.listarAlumnos()}`);
console.log(`Ahora, a despedir a Lalo Landa...`);
//Despedimos al docente Lalo Landa
escuela.despedirDocente(docente_lalo);
//Listamos los docentes
console.log(`Docente: ${escuela.listarDocentes()}`);

//Le pedimos a Julia que nos diga que alumnos tiene a cargo:


console.log(`Los alumnos a cargo de Julia son:`);
console.log(docente_julia.getAlumnos());

//Aprobaciones:
console.log(`Notas:`);
console.log(`${alumno1.getNombreYAprobacion()}`);
console.log(`${alumno2.getNombreYAprobacion()}`);
console.log(`${alumno3.getNombreYAprobacion()}`);
console.log(`${alumno4.getNombreYAprobacion()}`);
console.log(`${alumno5.getNombreYAprobacion()}`);
console.log(`${alumno6.getNombreYAprobacion()}`);
console.log(`${alumno7.getNombreYAprobacion()}`);
console.log(`${alumno8.getNombreYAprobacion()}`);

