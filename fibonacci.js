let fibonacci = [1, 1];
let numero = 1;

function mostrarSecuenciaDeFibonacci() {
    
    for (i = 0; i <= 20; i++) {
        numero = fibonacci[i-1] + fibonacci[fibonacci.length-1];
        fibonacci.push(numero);
    }
}
mostrarSecuenciaDeFibonacci()
console.log(fibonacci)