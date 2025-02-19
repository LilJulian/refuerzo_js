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






function filtrar() {

  do {
    let tarjeta = parseInt(prompt("Ingrese el numero de la tarjeta"));
    var validar = /\d{1,16}/.test(tarjeta);
    let american = /(^[1-9]|34[0-9]|37){13}$/.test(tarjeta);
    // let diners = /^300\d{11}$|^305\d{12}$/.test(tarjeta);
    if (american) {
      console.log("American Express");
    } else {
      console.log("no");

    }
  } while (validar == false)

  return validar;
}

console.log(filtrar());


