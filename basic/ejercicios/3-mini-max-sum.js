/*
### Problema
Dados 5 enteros positivos, encuentre el minimo y maximo valor que puede ser 
calculado por sumar exactamente 4 de los 5 enteros. 
Luego imprima respectivamente el minimo y maximo.

#### Ejemplo

> arr = [1,3,5,7,9]

La suma minima es 1 + 3 + 5 + 7 = 16

La suma maxima es 3 + 5 + 7 + 9 = 24
*/

let arr = [1,3,5,7,9];
let result = 0;

const getResult = (arr) => {
    let result = 0;
    for(let i=0; i<4; i++){  // sumo los 4 primeros
        result = result + arr[i];
    }
    return result;
};

arr.sort();
console.log("Mínimo = " + getResult(arr));

arr.reverse();
console.log("Máximo = " + getResult(arr));
