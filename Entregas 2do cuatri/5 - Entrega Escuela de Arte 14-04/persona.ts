export class Persona {
    protected nombre: string;
    protected apellido: string;
    protected fecha_nacimiento: Date;
    protected dni: number;

    constructor(nombre: string, apellido: string, fecha_nacimiento: Date, dni: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
        this.dni = dni;
    }

    listarInfo(): void {
        console.log(`Nombre completo:\t${this.nombre} ${this.apellido}\nFecha de Nacimiento:\t${this.fecha_nacimiento.toLocaleDateString()}\nDNI:\t\t\t${this.dni}`)
    }

    getDni():number{
        return this.dni;
    }

    getNombre():string{
        return this.nombre;
    }

    getApellido():string{
        return this.apellido;
    }
    
    getfechaNacimiento():Date{
        return this.fecha_nacimiento;
    }

    setDni(nuevoDNI:number){
        this.dni=nuevoDNI;
    }
    setNombre(nuevoNombre:string){
        this.nombre=nuevoNombre;
    }
    setApellido(nuevoApellido:string){
        this.apellido=nuevoApellido;
    }
    setFechaNacimiento(nuevaFechaNacimiento:Date){
        this.fecha_nacimiento=nuevaFechaNacimiento;
    }

    
}