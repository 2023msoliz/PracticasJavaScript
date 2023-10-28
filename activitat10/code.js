//Demanar a l'usuari {any1 (2000-2050) y any2 (2000-2050)} dir el primer any 
//entre les dues que comença en dimecres
function activitat10() {
    const any1 = prompt("Escribe un año entre (2000 - 2050)");
    const any2 = prompt("Escribe otro año entre (2000 - 2050)");

    const d = new Date();
    d.setFullYear(2000);

    for (; d.getFullYear() <= 2050; d.setFullYear(d.getFullYear() + 1)) {
        if (d.getDay() === 3 && (d.getFullYear() == any1 || d.getFullYear() == any2)) {
            alert("El año " + d.getFullYear() + " comienza un miércoles");
        }
    }


}
