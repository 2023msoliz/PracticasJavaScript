function activitat16() {
    let a = prompt("Escribe una palabra");
    if (a === a.split('').reverse().join(''))
        alert("Aquest String es un palindrom");
    else {
        alert("Aquest String NO es un palindrom");
    }
}