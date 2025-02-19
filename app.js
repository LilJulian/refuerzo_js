// Escribir una funcion llamada imprimirArreglo que reciba un arreglo
// e imprimacada elemento en una linea a parte:

let arreglo = ['hola', 1, 3];
const imprimirArreglo = (arreglo) => {
  for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);

  }
}

// imprimirArreglo(arreglo);

// Escribir una funcion llamada fizzBuzz que reciba un numero y retorne
// un string de acuerdo a lo siguiente:

// "Fizz" si el numero es multiplo de 3.
// "buzz" si el numero es multiplo de 5.
// "fizzbuzz" si el nuero es multiplo tanto de 3 como de 5.
// Si no cumple ninguna de las condiciones anteriores debe retornar el mismo numero



const fizzBuzz = numero => {
  if (numero % 3 == 0 && numero % 5 == 0) {
    return "fizzbuzz";
  } else if (numero % 3 == 0) {
    return "Fizz";
  } else if (numero % 5 == 0) {
    return "Buzz";
  } else {
    return numero;
  }
}

// numero = parseInt(prompt("Ingrese un numero: "));

// console.log(fizzBuzz(15));

// Escribir una funcion llamada multiplicarArreglo que reciba un arreglo de numeros y retorne
// la multiplicacion de todos los elementos


let array = [];
let multi = 1;
const multiplicarArreglo = cantidad => {
  for (let i = 0; i < cantidad; i++) {
    num = parseInt(prompt("Ingrese el numero a agregar"));
    array.push(num);
    multi = multi * array[i];
  }
  return multi;
}

// cantidad = parseInt(prompt("Ingrese la cantidad de numeros para el arreglo"));

// console.log(multiplicarArreglo(cantidad));


// Escribir una funcion llamada contraseñaValida que reciba un string
// y retorne true si el string es igual "2Fj(jjbFsuj" o "eoZiugBf&g9".de lo contrario
// debe retornar false

const contraseñaValida = palabra => {
  if (palabra === "2Fj(jjbFsuj" || palabra === "eoZiugBf&g9") {
    return true;
  } else {
    return false;
  }
}

// const contraseñaValida = palabra => palabra === "2Fj(jjbFsuj" || palabra === "eoZiugBf&g9" ? true : false;

// console.log(contraseñaValida("eoZiugBf&g9"));

// Escribir una funcion llanada calcularImpuestos que reciba dos argumentos numericos:
// edad e ingresos.Si edad es igual o mayor a los 18 y los ingresos son iguales o mayores a 1000 debe 
// retornar ingresos * 40 %.De lo contrario retornar 0.


const calcularImpuestos = (edad, ingresos) => {
  if (edad >= 18 && ingresos >= 1000) {
    return ingresos * 0.40;
  } else {
    return 0;
  }
}

// let edad = parseInt(prompt("Ingrese la edad"));
// let ingresos = parseFloat(prompt("ingrese los ingresos"));
// console.log(calcularImpuestos(edad, ingresos));


// Escribir una funcion llamada numeroDeAes que reciba un string
// y retorne el numero de veces que aparece "a"



const numeroDeAes = cadena => cadena.match(/a/g).length;

// let cadena = prompt("Ingrese una palabra");
// console.log(numeroDeAes(cadena));


// Escribir una funcion llamada removerCeros que reciba
// un arreglo de numeros y retorne un nuevo arreglo excluyendo los ceros
let arraynum = [1, 2, 3, 0, 3];
const removerCeros = arraynum => {
  for (let i = 0; i < arraynum.length; i++) {
    if (arraynum[i] == 0) {
      arraynum.splice(i, 1);

    }
  }
  return arraynum;
}

// console.log(removerCeros(arraynum));

// Escribir una funcion llamada transcribir que reciba un string(una cadena de ADN) y
// retorne otro string(su cumplemento ARN).
// los complemenarios son: G -> C
// C -> G
// T -> A
// A -> U

// const transcribir = stringg => {
//   for (let i = 0; i < stringg.length; i++){
//     if ()
//   }
// }

// console.log(transcribir('col'));


// Escribir una funcion llamada capitalizar que recibe un string
// y capitalice la primera letra

const capitalizar = palabra => {
  let a = palabra.replace(/^./, palabra[0].toUpperCase());
  return a;
  // let a;
  // for (let i = 0; i < palabra.length; i++) {
  //   a = palabra.split('')[0].toUpperCase() + palabra[i];
  //   return a + palabra[i + 1];
  // }

}

// console.log(capitalizar('hola'));

// 1. Diseñar un programa que permita validar el tipo de tarjeta de crédito que
// registra el operador, para ello debemos tener en cuenta que las diferentes
// tarjetas tienen diferentes nomenclaturas:
// • American Express: 15 dígitos y empieza por(34 – 37)
// • Diners Club: tiene 14 dígitos y empieza por(300 – 305 o 36 - 38)
// • Discover: tiene 16 dígitos y empieza por(6011)
// • Mastercard: tiene 16 dígitos y empieza por(51 – 55)
// • Visa: tiene: 16 dígitos y empieza por(4)
// El programa solo se debe permitir el ingreso de enteros positivos y máximo
// 16 caracteres, si el operador ingresa un carácter no permitido se debe
// mostrar por pantalla el error y solicitar nuevamente el número de su tarjeta
// de crédito.
// Para este ejercicio se solicita trabajar con módulos, expresiones regulares y
// condicionales.Si está permitido solicitar al operador el tipo de su tarjeta de
// crédito.


