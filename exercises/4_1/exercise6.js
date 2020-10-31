let peca = "Peao";
let pecaLowerCase = peca.toLowerCase();

if(peca){
    if(pecaLowerCase=="peão"|| pecaLowerCase=="peao"){
        console.log("movimento: uma casa para frente");
    }
    else if(pecaLowerCase=="torre"){
        console.log("movimento:  casas na sua frente ou costa ou aos lados");
    }
    else if(pecaLowerCase=="cavalo"){
        console.log("movimento: em formato de L");
    }
    else if(pecaLowerCase=="bispo"){
        console.log("movimento: diagonais");
    }
    else if(pecaLowerCase=="rei"){
        console.log("movimento: uma casa para qualquer lado");
    }
    else if(pecaLowerCase=="torre"){
        console.log("movimento: casas na frente, costa, lados e diagonais");
    }
}
else(
    console.log("não identifiquei a peça informada")
)