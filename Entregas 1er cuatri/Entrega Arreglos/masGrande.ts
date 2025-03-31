const SIZE:number=10;
const NUMEROS:number[]=new Array(4,7,9,3,1,45,67,23,29,78,11,16); 

function buscarMayor(arr:number[]):number{
    let numMayor:number=-1;
    for (let i:number=0;i<NUMEROS.length;i++){
    if (NUMEROS[i]>numMayor){
        numMayor=NUMEROS[i];
    }
}
return numMayor;
}

function esParOImpar(num:number):boolean{
    return num%2==0;
}
const MAYOR=buscarMayor(NUMEROS);

const esPar:boolean=esParOImpar(MAYOR);

console.log(`El mayor es ${MAYOR}`);
if(esPar){console.log(`El numero ademas es PAR`)}
else console.log(`El numero ademas es IMPAR`)