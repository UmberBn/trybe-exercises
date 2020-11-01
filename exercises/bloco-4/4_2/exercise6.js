let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i = 0,
    aux = 0;
    

for (i = 0; i < numbers.length; i += 1) {
   if(numbers[i]%2!=0){
    aux+=1;
   }
}

if(aux == 0){
    aux = "Nenhum valor ímpar encontrado";
}

console.log(aux)