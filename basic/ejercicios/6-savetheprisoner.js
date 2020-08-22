/*

### Problema
Una cárcel tiene varios prisioneros y varios caramelos para distribuirles.

Su carcelero decide que la forma más justa de dividir las golosinas es sentar a los prisioneros alrededor de una mesa circular en sillas numeradas secuencialmente. 

Se sacará un número de silla de un sombrero. Comenzando con el prisionero en esa silla, se entregará un caramelo a cada prisionero secuencialmente alrededor de la mesa hasta que todos hayan sido distribuidos. 

Sin embargo, el carcelero está jugando una "pequeña" broma. El último dulce se parece a todos los demás, pero tiene veneno. 

Determine el número de silla ocupado por el prisionero que recibirá ese caramelo. 

Desarrolle la funcion saveThePrisoner que devuelva el numero de prisionero que recibe la ultima golosina.
> function saveThePrisioner(n,m,s){
>      
> }
>
saveThePrisoner tiene los siguientes parametros:

>

> n: entero, el numero de prisioneros
> m: entero, el numero de golosinas
> s: entero, el numero de silla por donde se empieza a repartir.

> Ejemplo input: 5, 2, 1 output: 2
> Ejemplo input: 7, 19, 2 output: 6
> Ejemplo input: 3, 7, 3 output: 3

*/
function saveThePrisioner(n,m,s){
    let gol = m;
    let reo = silla = s;

    while(silla < n && gol > 1){
        silla++;
        gol--;
        reo = silla;
    }
    //console.log(" reo temp = " + reo)
    while(gol>1){
        gol--;
        if(reo < n && gol >0){
            reo++;
        }else{
            reo = 1;
        }
    }
    //console.log(" reo final = " + reo)
    return reo;
}

// > Ejemplo input: 5, 2, 1 output: 2
// > Ejemplo input: 7, 19, 2 output: 6
// > Ejemplo input: 3, 7, 3 output: 3

let n = 5;
let m = 2;
let s = 1;

console.log(saveThePrisioner(1,1,1) === 1);
console.log(saveThePrisioner(5,2,1) === 2);
console.log(saveThePrisioner(5,2,2) === 3);
console.log(saveThePrisioner(3,7,3) === 3);
console.log(saveThePrisioner(7,19,2) === 6);
console.log(saveThePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(saveThePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(saveThePrisioner(353972922, 573651462, 244520504)); // === 110226121);
