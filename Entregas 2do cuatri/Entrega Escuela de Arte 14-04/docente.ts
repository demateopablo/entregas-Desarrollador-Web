import { Persona } from './persona';

export class Docente extends Persona {
    private persona: Persona;
    private salario: number;

    constructor(nombre: string, apellido: string, fecha_nacimiento: Date, dni: number, salario: number) {
        super(nombre, apellido, fecha_nacimiento, dni);
        this.salario = salario;
    }

    listarInfo(): void {
        console.log(`--- Docente ---`);
        super.listarInfo();
        console.log(`Salario:\t\t${this.salario}`);
    }

    getSalario():number{
        return this.salario;
    }

    setSalario(nuevoSalario:number){
        if(nuevoSalario<0) return;
        this.salario=nuevoSalario;
    }
}