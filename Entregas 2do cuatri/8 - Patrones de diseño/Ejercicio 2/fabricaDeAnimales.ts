import { Perro } from "./perro";
import { Pajaro } from "./pajaro";
import { Gato } from "./gato";

export class FabricaDeAnimales {
    public crearAnimal(tipo: string, atributos: any): any {
        tipo = tipo.toLowerCase(); //Por si paso en el index el tipo de animal con mayusculas
        switch (tipo) {
            case "perro": return new Perro(atributos.raza, atributos.color);
            case "gato": return new Gato(atributos.esArisco);
            case "pajaro": return new Pajaro(atributos.alimento);
            default: throw new Error("El tipo de animal es incorrecto");
        }
    }
}