let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
//exercise 1
console.log("Bem vinda, " + info.personagem);
console.log("-------------------------------")
//exercise2
info.recorrente = "Sim";
console.log(info);
//exercise3
console.log("-------------------------------")
for (let i in info) {
    console.log(i);
}
console.log("-------------------------------")
//exercise4
for (let i in info) {
    console.log(info[i]);
}
console.log("-------------------------------")
//exercise5
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on bear mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};

console.log(info.personagem + " e " + info2.personagem);
console.log(info.origem + " e " + info2.origem);
console.log(info.nota + " e " + info2.nota);
console.log("Ambos Recorrentes");