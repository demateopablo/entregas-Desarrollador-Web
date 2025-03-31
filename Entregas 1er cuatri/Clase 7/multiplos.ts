import * as fs from 'readline-sync';

function esMultiplo(n1:number,n2:number):boolean{
    return n1%n2==0;
}

let num1:number=fs.questionInt("Ingresa el primer numero: ");
let num2:number=fs.questionInt("Ingresa el segundo numero: ");
console.log(esMultiplo(num1,num2));