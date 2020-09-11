// Complete the isBalanced function below.
function isBalanced(s) {
<<<<<<< HEAD
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
    //console.log(result);
    return result;
=======
    // 
    let aux = -1;

    while (s.length != 0) {
        aux = s.length;

        s = s.replace("()","");
        s = s.replace("[]","");
        s = s.replace("{}","");

        if(aux == s.length) return "NO";
    }

    return "YES";
>>>>>>> 54f58182e2a2f1ab79e946bd563ff7d2ec53ffb5
}

// TESTS
console.log('hola mundo');
console.log(isBalanced('{[') == 'NO');
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');

// TIPS: Pilas
// TIPS: remplazo de cadenas