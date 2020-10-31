let a = 7;
let b = 7;
let c = 7;

if(a){
    if(a>b || a>c){
       return console.log(a+" é maior que "+b+" e "+c)
    }
    else if (c>b || c>a) { 
       return console.log(c+" é maior que "+a+" e "+b)
    }
    else if (b>a || b>c) { 
        return console.log(c+" é maior que "+a+" e "+b)
    } 
    else{ 
        return console.log(a+" e "+b+" e "+c+ " são iguais")
     }
}

