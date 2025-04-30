abstract class Instrumento {
    protected nombre: string;
    protected tipo: string;

    constructor(pNombre: string, pTipo?: string) {
        this.nombre = pNombre;
        this.tipo = pTipo ?? '';
    }

    setTipo(pTipo: string): void {
        this.tipo = pTipo;
    }

    getTipo(): string {
        return this.tipo;
    }

    abstract tocar(): void

    toString(): string {
        return `Nombre: ${this.nombre}, tipo: ${this.tipo}`
    }
}

class Orquesta {
    private instrumentos: Instrumento[];

    constructor() {
        this.instrumentos = new Array();
    }

    setInstrumento(pInstrumento: Instrumento): void {
        this.instrumentos.push(pInstrumento);
    }

    getInstrumentos(): Instrumento[] {
        return this.instrumentos;
    }

    ejecutarOrquesta(): void {
        this.instrumentos.forEach(instr => instr.tocar());
    }
}

class Flauta extends Instrumento {
    private material: string;

    tocar(): void {
        console.log(`Tocando la Flauta de ${this.material}`);
    }
}
class Piano extends Instrumento implements SeAfina {
    private cantTeclas: number;

    tocar(): void {
        console.log(`Estoy usando las ${this.cantTeclas} del Piano`);
    }

    setCantTeclas(pCantTeclas: number): void {
        this.cantTeclas = pCantTeclas;
    }

    getCantTeclas(): number {
        return this.cantTeclas;
    }

    afinar(): void {
        console.log(`Afinando el piano!`)
    }

}
class Violin extends Instrumento implements SeAfina {
    private cantCuerdas: number;

    setCantCuerdas(pCantCuerdas: number): void {
        this.cantCuerdas = pCantCuerdas;
    }

    getCantCuerdas(): number {
        return this.cantCuerdas;
    }
    tocar(): void {
        console.log(`Tocando el Violin de ${this.cantCuerdas}`);
    }

    afinar(): void {
        console.log(`Afinando el violin!`)
    }
}

interface SeAfina {
    afinar(): void;
}