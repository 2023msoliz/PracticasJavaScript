function Trucada() {
let costEstabliment = 0.1;
let hh = parseInt(prompt("Cuantas horas has hablado?"));
let mm = parseInt(prompt("Cuantos minutos has hablado?"));
let ss = parseInt(prompt("Cuantos segundos has hablado?"));

let tarifa = 0.05;

let horesTruc = 60*hh*tarifa;
let minutsTruc = mm*tarifa;
let segonsTruc = ss/tarifa;

alert(horesTruc+minutsTruc+segonsTruc);
}