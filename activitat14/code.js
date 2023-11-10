// Fer un programa que comprovi si un codi EAN8 o EAN13 és
// correcte, ha de cumplir que: 
//            EAN8: 2593856[2]--> control
//    2*3+5*1+9*3+3*1+8*3+5*1+6*6*3 = 88(fins 90 = 2)º

//    Ejemplos:
//    65839522 ---> Correcto
//    65839521 ---> Incorrecto
//    5029265779425 ---> Correcto
//    5129365779425 ---> Incorrecto