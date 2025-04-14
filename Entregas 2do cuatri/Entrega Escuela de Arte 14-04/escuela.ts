import { Curso } from "./curso";

export class Escuela {
    private nombre: string;
    private cursos: Curso[];
    static contadorLegajoAlumnos: number = 1;

    constructor(nombre: string, cursos: Curso[]) {
        this.nombre = nombre;
        this.cursos = cursos;
    }

    listarInfo(): void {
        this.cursos.forEach(cur => cur.listarInfo());
    }

    eliminarCurso(nombre:string):void{
        let cursoIndex:number = this.cursos.findIndex(curso=>curso.getNombre()==nombre)
        if(cursoIndex==-1){
            return
        }
        this.cursos.slice(cursoIndex,1);
        console.log(`Curso ${nombre} removido correctamente.`);
    }

    agregarCurso(curso:Curso):void{
        this.cursos.push(curso);
    }

    setNombre(nuevoNombre):void{
        this.nombre=nuevoNombre;
    }

    getNombre():string{
        return this.nombre;
    }
}