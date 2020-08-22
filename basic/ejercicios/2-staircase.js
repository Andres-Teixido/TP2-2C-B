/* ### Considere una escalera de tamaño n = 6

Formar una escalera con el caracter # por ejemplo la escalera de tamaño 6 va ser:

>
>       #
>      ##
>     ###
>    ####
>   #####
>  ######
*/
let level = n = 10;
let direccion = 'i';    //  direccion    i = izquierda   
                        //  direccion OTRO = derecha

let cadenaPiso = [];
let cadenaString = '';
let c=0;
let b=0;
let pos=0;

do{
    let kc = level - (n-1);
    let kb = n - 1;
    //console.log(" kc= " + kc + " kb= " + kb + " POS = " + pos);
    while(kb>0){
        cadenaPiso.push(' ');
        pos++;
        kb--;
    }
    while(kc>0){
        if(direccion == 'i'){
            cadenaPiso.unshift('#');
        }else{
            cadenaPiso.push('#');
        }
        pos++;
        kc--;
    }
    for(pos = 0; pos < cadenaPiso.length; pos++){
        cadenaString = cadenaString + cadenaPiso[pos];
    }
    console.log(cadenaString);
    cadenaPiso = [];    
    cadenaString = '';
    pos = 0;
    n --;
}while(n>0);

