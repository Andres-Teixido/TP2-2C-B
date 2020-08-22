/*
### Problema
John trabaja en una tienda de medias. Tiene una larga pila de medias que tiene que 
aparear por color. Dado un array de numeros enteros que representan el color de cada media,
 determine cuantos pares de medias (segun color) hay.

#### Ejemplo
> #### Ejemplo de entrada
> 9
> 
>  [10, 20, 20, 20, 20, 30, 50, 10, 20]

> #### Ejemplo de salida
> 3

![](https://s3.amazonaws.com/hr-challenge-images/25168/1474122392-c7b9097430-sock.png)
*/


//#############################################################
let medias = [10, 20, 20, 20, 20, 30, 50, 10, 20];
let pares = 0;
let color = 0;
let i = 0;
let enMano = 0;
//#############################################################
medias.sort();
console.log(" Stock de medias = " + medias);
color = medias[i];
enMano = 1;
i++;
while(i<medias.length){
    if(medias[i] == color){
        if(enMano==1){
            //console.log(color + " == " + medias[i] + " i: " + i + " => PAR")
            pares ++;
            enMano = 0;
        }else{
            enMano = 1;
        }
    }
    if(medias[i] > color){
        //console.log(medias[i] + " i: " + i + " > color " + color)
        color = medias[i];
        enMano = 0;
    }else{
        i++;
    }
}
console.log("Cantidad de pares = " + pares);