//Dir si una paraula introduida és pentavocalica (conté les 5 vocals)

function activitat11() {
    const vocals = ["a", "e", "i", "o", "u"];

    let palabra = prompt("Escribe una palabra");
    let conteos = -1;
    for( let i = 0; i <= palabra.length; i++){
        for(let x = 0; x <= vocals.length; x++){
            if(palabra[i] === vocals[x]){
            conteos++;
        }}
    }
    alert("En la palabra " + palabra + " hay un total de " + conteos + " vocales");
}