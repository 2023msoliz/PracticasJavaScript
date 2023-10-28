//Obtenir un nº entre a l'atzar entre [1-100]. Es tracta de que l'usuari l'endevini. 
//Si l'endevina se li mostrará
//"Obtingut en n intents" Si introdueix un zero es pintará "Game over" i sortirá. 
//Si falla se li dirá "menor" o "major". Si introdueix algun valor invalid no posa res(es segueix)
//pero es compte com un intent més.

function activitat9() {
const numRandom = Math.floor(Math.random() * 100) + 1;
let intents = 0;

while(true){
    const numero = prompt("Escribe un numero random de (1-100)")

    intents++;

    if(numero == 0){
        alert("Gamer over");
        break;
    }
    
    if(numero == numRandom) {
        alert("Obtingut en " + intents + " intents");
        break;
    } else if (numero > numRandom){
        alert("Menor")
    } else {
        alert("Mayor")
    }
}
}