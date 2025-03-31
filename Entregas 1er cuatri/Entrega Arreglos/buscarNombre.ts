import * as rs from 'readline-sync';

const SIZE:number=5;
const NOMBRES:string[]=new Array("Julio", "Pablo", "Pedro", "Mario", "Teresa", "Pablo");
const buscar:string=rs.question(`Ingresa el nombre a buscar: `);

let cantOcurrencias:number=0;
let listaNombres:string='';
//Recorre todo el arreglo, cuenta la cantidad de ocurrencias y lo imprime:
for (let i:number=0;i<NOMBRES.length;i++){
    if(buscar===NOMBRES[i]){
        cantOcurrencias++;
        //Paso ademas el nombre encontrado a mayusculas
        NOMBRES[i]=NOMBRES[i].toUpperCase();
    }
    listaNombres=listaNombres + ` ` + NOMBRES[i];
}
if(cantOcurrencias>0) console.log(`El nombre apareció ${cantOcurrencias} vez/veces`) 
    else console.log(`El nombre no apareció`);
console.log(`\nListado de nombres: ${listaNombres}`);