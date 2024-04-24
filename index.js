let Nivel; 

let resultado = CalculoDeVitorias(111,10); 
function CalculoDeVitorias(Vitorias, Derrotas){
    return Vitorias-Derrotas; 
}

switch(true){
    case resultado < 10:
        Nivel = "Ferro"; 
        break;
    case resultado >= 11 && resultado <= 20:
        Nivel = "Bronze";
        break;
    case resultado >= 21 && resultado <= 50:
        Nivel = "Prata";
        break;
    case resultado >= 51 && resultado <= 80:
        Nivel = "Ouro";
        break;
    case resultado >= 81 && resultado <= 90:
        Nivel = "Diamante";
        break;
    case resultado >= 91 && resultado <= 100:
        Nivel = "Lendário";
        break;
    case resultado >= 101:
        Nivel = "Imortal";
        break;

}
console.log("O Héroi tem de saldo de Viórias " + resultado, "está no nível de " + Nivel); 