let salarioBruto = 1850;
let salarioLiquido = 0;

let aliquotaINSS = [1556.94, 2594.92, 2594.93, 5189.82]
let aliquotaIRRF = [1903.99,2826.65,2826.66,3751.05,3751.06,4664.68]

let INSS = 0;
let IRRF = 0;

if (salarioBruto) {

    if (salarioBruto < aliquotaINSS[0]) {
        INSS = salarioBruto * 0.08
    }
    else if (salarioBruto >= aliquotaINSS[0] && salarioBruto <= aliquotaINSS[1]) {
        INSS = salarioBruto * 0.09
    }
    else if (salarioBruto > aliquotaINSS[2] && salarioBruto <= aliquotaINSS[3]) {
        INSS = salarioBruto * 0.11;
    }
    else if (salarioBruto > aliquotaINSS[3]) {
        INSS = 570.88;
    }
    salarioLiquido = salarioBruto - INSS;
}

if (salarioLiquido>=1903.99) {

    if (salarioLiquido >= aliquotaIRRF[0] && salarioLiquido <= aliquotaIRRF[1]) {
        IRRF = (salarioLiquido*0.075)-142.80;
    }
    else if (salarioLiquido >= aliquotaIRRF[2] && salarioLiquido <= aliquotaIRRF[3]) {
        IRRF = (salarioLiquido * 0.15)-354.80;
    }
    else if (salarioLiquido >= aliquotaIRRF[4] && salarioLiquido <=[5]) {
        IRRF = (salarioLiquido * 0.225)-636.13;
    }
    else(IRRF = (salarioLiquido * 0.275)-869.36);
    salarioLiquido -= IRRF;
}

console.log("Salário com todos os descontos: R$ " + salarioLiquido)