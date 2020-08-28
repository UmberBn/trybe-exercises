let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i = 0,
    j = 0,
    menorValor = 1000;

for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menorValor) {
        for (j = 0; j < numbers.length; j += 1) {

            if (numbers[j] < numbers[i]) {
                menorValor = numbers[j];
            }
        }
    }
}



console.log(menorValor)