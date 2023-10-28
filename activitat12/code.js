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
    alert(resultado);
}

function activitat12_3() {
    // 3) El % de dies transcorreguts és nn,nn%
    const fechaActual = new Date();
    const fechaInicial = new Date(fechaActual.getFullYear(), 0,1);
    let diferencia = fechaActual.getTime() - fechaInicial.getTime();
    resultadoSemanes = Math.round(((diferencia / 1000)/ 3600) / 24);
    let resultatDias = Math.round((resultadoSemanes*100) / 365);
    alert("El porcentaje de dias transcurridos es del " + resultatDias + "%");
}

function activitat12_4() {
    // 4) Queden un nn.nn% de dies a l'any
    const fechaActual = new Date();
    const fechaInicial = new Date(fechaActual.getFullYear(), 0,1);
    let diferencia = fechaActual.getTime() - fechaInicial.getTime();
    resultadoSemanes = Math.round(((diferencia / 1000)/ 3600) / 24);
    let resultatDias = Math.round((resultadoSemanes*100) / 365);
    let porcentajeAño = (((365 * 100) / 365));
    let resultadoDiasRestates = (porcentajeAño - resultatDias);
    alert("El porcentaje de dias restantes es del " + resultadoDiasRestates + "%");
}

function activitat12_5() {
    // 5) Ara son les hh.mm.ss
    const x = new Date();
    alert("Ara son les " + x.getHours() + "." + x.getMinutes() + "." + x.getSeconds());
}

function activitat12_6() {
    // 6) El % del dia que ha passat és nn.nn%  
    const horaActual = new Date();
    const inicioDelDia = new Date();
    inicioDelDia.setHours(0, 0, 0, 0);
    const diferenciaEnMilisegundos = horaActual - inicioDelDia;
    const segundosTranscurridosEnElDía = diferenciaEnMilisegundos / 1000;
    const segundosTotalesDia = (60*60) * 24;
    const porcentajeRestateDia = ((segundosTranscurridosEnElDía * 100) / segundosTotalesDia);
    alert("El % del dia que ha passat és " + Math.round(porcentajeRestateDia) + "%");
}

function activitat12_7() {
    // 7) Queda un % de nn.nn% del dia
    const horaActual = new Date();
    const inicioDelDia = new Date();
    inicioDelDia.setHours(0, 0, 0, 0);
    const diferenciaEnMilisegundos = horaActual - inicioDelDia;
    const segundosTranscurridosEnElDía = diferenciaEnMilisegundos / 1000;
    let segundosTotalesDia = (60*60) * 24;
    let porcentajeDia = (((segundosTotalesDia * 100) / segundosTotalesDia));
    const porcentajeRestateDia = ((segundosTranscurridosEnElDía * 100) / segundosTotalesDia);
    const porcentajeDiaRestante = porcentajeDia - porcentajeRestateDia;
    alert("Queda un % de " + Math.round(porcentajeDiaRestante) + "% del dia");
}