let a = prompt("Desea convertir fahrenheit o celsius ");

if( a == "fahrenheit"){
    let aa = parseInt(prompt("Ingrese el valor el valor a convertir en fahrenheit"));
    convFahrenheit = (aa - 32)/(9/5);
    console.log("El valor convertir es " + convFahrenheit + " grados Celsius");
}
if (a == "celsius"){
    let bb = parseInt(prompt("Ingrese el valor a convertir en celsius"))
    convCelsius = bb * (9/5) + 32;
    console.log("El valor convertir es " + convCelsius + " grados fahrenheit");
}