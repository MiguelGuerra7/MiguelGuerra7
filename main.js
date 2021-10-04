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
