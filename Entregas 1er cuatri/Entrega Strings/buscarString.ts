import * as rs from 'readline-sync';

const texto=`Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.`;

function buscarPalabra(palabra:string,texto:string):boolean{
    return texto.toLowerCase().includes(palabra.toLowerCase());
}

const palabra:string=rs.question(`Ingresa la palabra a buscar: `);

function cantOcurrencias(pal:string,texto:string):number{
    let cant:number=0;
    const palabras=texto.split(' ');
    for (let p of palabras){
        console.log(p);
        if(p.includes(pal)){
            cant++;
        }
    }
    return cant;
} 

/* 
 function cantOcurrencias(pal:string,texto:string):number{
    return texto.toLowerCase().split(pal.toLowerCase()).length - 1;
 }

 */
console.log(cantOcurrencias(palabra, texto));
