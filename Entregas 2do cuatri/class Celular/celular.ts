export class Celular {
    private brand: string;
    private model: string;
    private os: string; //sistema operativo
    private memory: number; //En GB
    private storage: number; //En GB
    private isOn: boolean;

    constructor(brand: string, model: string, os: string, memory?: number, storage?: number, isOn?: boolean) {
        this.brand = brand;
        this.model = model;
        this.os = os;
        this.memory = memory ?? 4;
        this.storage = storage ?? 64;
        this.isOn = isOn ?? false;
    }

    /*Nota: El constructor lo hice tal como vimos en la clase, pero prefiero que el valor por defecto esté directamente en los parámetros por una cuestión de costumbre. Además de esta manera se evitan las validaciones dentro del constructor, lo maneja automaticamente el compilador
    
    constructor(brand: string, model: string, os: string, memory:number = 4, storage: number = 64, isOn: boolean = false) {
        this.brand = brand;
        this.model = model;
        this.os = os;
        this.memory = memory;
        this.storage = storage;
        this.isOn = false;
    }
    */

    public onOff(): void { //metodo adicional encenderApagar
        this.isOn = !this.isOn;
    }

    public showInfo(): string { //metodo adicional mostrarInfo
        return `
- Marca: ${this.brand}
- Modelo: ${this.model}
- RAM: ${this.memory}GB
- Almacenamiento: ${this.storage}GB
- Sistema Operativo: ${this.os}
- Encendido: ${this.isOn ? "Si" : "No"}`;
    }
    
    public getBrand(): string {
        return this.brand;
    }
    public getModel(): string {
        return this.model;
    }
    public getOS(): string {
        return this.os;
    }
    public getMemory(): number {
        return this.memory;
    }
    public getStorage(): number {
        return this.storage;
    }
    public isTurnedOn(): boolean {
        return this.isOn;
    }
    public setBrand(newBrandValue:string): void {
        this.brand = newBrandValue;
    }
    public setModel(newModelValue:string): void {
        this.model = newModelValue;
    }
    public setOS(newOSValue:string): void {
        this.os = newOSValue;
    }
    public setMemory(newMemoryValue:number): void {
        this.memory = newMemoryValue;
    }
    public setStorage(newStorageValue:number): void {
        this.storage = newStorageValue;
    }

}