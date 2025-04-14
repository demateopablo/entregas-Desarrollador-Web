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

    public setNombreCompleto(nombreCompleto: string):void {
        this.nombreCompleto = nombreCompleto;
    }

    public estaAprobado(): boolean {
        return (this.nota > 7)
    }

    public getNombreYAprobacion(): string {
        return `${this.getNombreCompleto()}\t${this.estaAprobado() ? "Aprobado" : "Desaprobado"}`;
    }
}