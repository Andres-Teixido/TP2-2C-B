/*
### Suma de array simple
Considere un array de enteros, encontrar la suma de los elementos. 

Por ejemplo si el array ar = [1,2,3] 
1 + 2 + 3 = 6 

retorna 6.
*/

let ar = [1,2,3];

const getResult = (ar) => {
    let result = 0;
    for(let i=0; i<ar.length; i++){  // sumo toto el array
        result = result + ar[i];
    }
    return result;
};

console.log(getResult(ar));