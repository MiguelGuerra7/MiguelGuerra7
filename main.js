// let variableNumerica;
// var nombreTexto;

// variableNumerica = 5;

// console.log(variableNumerica);

// variableTexto = "Mi texto es 'azul' ";
// console.log(variableTexto);

// var numeroA = 1;

// let numeroB = 2;

// const NUMEROC = 3;

// let resultadoSuma = numeroA + numeroB;
// console.log(resultadoSuma);

// let resultadoResta = numeroB - numeroA;
// console.log(resultadoResta);

// let resultadoProducto = numeroB * NUMEROC;
// console.log(resultadoProducto);

// var textoA = "CODER";

// let textoB = "HOUSE";

// const BLANCO = " ";

// let resultadoA = textoA + textoB;
// console.log(resultadoA);

// let resultadoB = textoA + BLANCO + textoB;
// console.log(resultadoB);

// let nombreIngresado = prompt("ingrese su nombre");
// console.log(nombreIngresado);

// alert("Bienvenidos!!");

// let entrada = prompt("Ingresar una letra");
// let salida = entrada + " " + "ingresada";
// alert(salida);

let nombreEmail = prompt("Ingrese su correo electronico:");
const BLANCO = " ";
alert("Bienvenido" + BLANCO + nombreEmail + " !!");

let nombreIngresado = prompt("Muy bien, ahora ingrese su verdadero nombre");
let apellidoIngresado = prompt("ingrese su apellido");
let dniIngresado = prompt("ingrese su numero de documento");
const NUMEROC = 3;

let numero1 = parseInt(prompt("Ingrese numero:"));
let numero2 = parseInt(prompt("Ingrese otro numero:"));

let resultado = numero1 + numero2;
let resultado2 = resultado * NUMEROC;

alert(
  "Su nombre es: " +
    nombreIngresado +
    BLANCO +
    apellidoIngresado +
    BLANCO +
    ", su numero de DNI es:" +
    BLANCO +
    dniIngresado +
    " y el resultado obtenido es: " +
    resultado2
);
