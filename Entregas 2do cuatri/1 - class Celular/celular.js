"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Celular = void 0;
var Celular = /** @class */ (function () {
    function Celular(brand, model, os, memory, storage, isOn) {
        this.brand = brand;
        this.model = model;
        this.os = os;
        this.memory = memory !== null && memory !== void 0 ? memory : 4;
        this.storage = storage !== null && storage !== void 0 ? storage : 64;
        this.isOn = isOn !== null && isOn !== void 0 ? isOn : false;
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
    Celular.prototype.onOff = function () {
        this.isOn = !this.isOn;
    };
    Celular.prototype.showInfo = function () {
        return "\n- Marca: ".concat(this.brand, "\n- Modelo: ").concat(this.model, "\n- RAM: ").concat(this.memory, "GB\n- Almacenamiento: ").concat(this.storage, "GB\n- Sistema Operativo: ").concat(this.os, "\n- Encendido: ").concat(this.isOn);
    };
    Celular.prototype.getBrand = function () {
        return this.brand;
    };
    Celular.prototype.getModel = function () {
        return this.model;
    };
    Celular.prototype.getOS = function () {
        return this.os;
    };
    Celular.prototype.getMemory = function () {
        return this.memory;
    };
    Celular.prototype.getStorage = function () {
        return this.storage;
    };
    Celular.prototype.isTurnedOn = function () {
        return this.isOn;
    };
    Celular.prototype.setBrand = function (newBrandValue) {
        this.brand = newBrandValue;
    };
    Celular.prototype.setModel = function (newModelValue) {
        this.model = newModelValue;
    };
    Celular.prototype.setOS = function (newOSValue) {
        this.os = newOSValue;
    };
    Celular.prototype.setMemory = function (newMemoryValue) {
        this.memory = newMemoryValue;
    };
    Celular.prototype.setStorage = function (newStorageValue) {
        this.storage = newStorageValue;
    };
    return Celular;
}());
exports.Celular = Celular;
