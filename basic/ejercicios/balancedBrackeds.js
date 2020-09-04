// Complete the isBalanced function below.
function isBalanced(s) {
    let cadena = s;
    let pila = [];
    let result = 'YES';
    let arrAP = '({[';
    let arrCI = ')}]';

    if(s[0]=='(' || s[0]=='{' || s[0]=='['){
        pila.push(s[0]);
        for(let i=1; i < cadena.length; i++){
            //console.log('Car ' + s[i]);
            switch(s[i]){
                case '(':
                    //console.log('( ? = '+s[i])
                    pila.push(s[i]);
                break;
                case '{':
                    //console.log('{ ? = '+s[i])
                    pila.push(s[i]);
                break;
                case '[':
                    //console.log('[ ? = '+s[i])
                    pila.push(s[i]);
                break;
                case ')':
                    if(pila[pila.length-1] == '('){
                        //console.log('saco un (')
                        pila.pop();
                        //console.log('ultimo = ' + pila[pila.length-1]);
                    }else{
                        //console.log(') NO= ' + pila[pila.length-1]);
                        result = 'NO';
                    }
                break;
                case '}':
                    if(pila[pila.length-1] == '{'){
                        //console.log('saco un {')
                        pila.pop();
                    }else{
                        //console.log('} NO= ' + pila[pila.length-1]);
                        result = 'NO';
                    }
                break;
                case ']':
                    if(pila[pila.length-1] == '['){
                        //console.log('saco un [')
                        pila.pop();
                    }else{
                        //console.log('] NO= ' + pila[pila.length-1]);
                        result = 'NO';
                    }
                break;
            }            
        }
    }else{
        result = 'NO';
    }
    //console.log(s);
    console.log(result);
    return result;
}

// TESTS
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');
