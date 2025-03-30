export class Alumno {
    private nombreCompleto: string;
    private nota: number;

    constructor(nombreCompleto: string, nota: number) {
        this.nombreCompleto = nombreCompleto;
        this.nota = nota;
    }

    public getNombreCompleto(): string {
        return this.nombreCompleto;
    }

    public setNombreCompleto(nombreCompleto: string) {
        this.nombreCompleto = nombreCompleto;
    }

    public estaAprobado(): string {
        return (this.nota > 7 ? "Aprobado" : "Desaprobado")
    }

    public getNombreYAprobacion(): string {
        return `${this.getNombreCompleto()}\t${this.estaAprobado()}`;
    }
}