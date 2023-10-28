//Obtenir la data actual i mostrar.
// 1) Avui es dd del mm del aaa
// 2) Han passat n setmanes de l'any
// 3) El % de dies transcorreguts és nn,nn%
// 4) Queden un nn.nn% de dies a l'any
// 5) Ara son les hh.mm.ss
// 6) El % del dia que ha passat és nn.nn%  
// 7) Queda un % de nn.nn% del dia

function activitat12_1() {
    // 1) Avui es dd del mm del aaa
    const x = new Date();
    alert("Avui es " + x.getDay() + " del " + x.getMonth() + " del " + x.getFullYear())
}

function activitat12_2() {
    //Han passat n setmanes de l'any
    const fechaActual = new Date();
    const fechaInicial = new Date(fechaActual.getFullYear(), 0,1);
    let diferencia = fechaActual.getTime() - fechaInicial.getTime();
    resultado = Math.round((((diferencia / 1000)/ 3600) / 24) / 7);
    alert(resultado); //604.800
}

function activitat12_3() {
    // 3) El % de dies transcorreguts és nn,nn%

}