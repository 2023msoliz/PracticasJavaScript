function Color() {
    let a = parseInt(prompt("Introdue un numero"));
    let b = parseInt(prompt("Introdue otro numero"));
    let c = parseInt(prompt("Introdue otro numero"));

    let result = a.toString(16)+ b.toString(16)+ c.toString(16);

    alert("El color RGB es #"+ result.toUpperCase());
}