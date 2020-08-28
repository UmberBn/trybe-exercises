let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i = 0,
    j = 0,
    maiorValor = 0;

for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maiorValor) {
        for (j = 0; j < numbers.length; j += 1) {

            if (numbers[j] > numbers[i]) {
                maiorValor = numbers[j];
            }
        }
    }
}



console.log(maiorValor)