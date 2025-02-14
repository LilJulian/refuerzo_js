// Escribir una funcion llamada sumaArreglo que reciba tres argumentos:
// un arreglo de numeros, la posicion inicial y la posicion final.
// La funcion debe retornar la suma de todos los numeros dentro del rango
// (la posicion inicial y la posicion final, incluyendolas).

// Nota: puedes asumir que la posicion inicial va a ser menor o igual a la posicion final
// y que estan dentro de los limites del arreglo.

// let inicial = parseInt(prompt("Ingrese el primer numero"));
// let final = parseInt(prompt("Ingrese el ultimo numero"));
// const array = [4, 5];
// array.unshift(inicial)
// console.log(array);



// function sumaArreglo(num, inicial, final) {
//   let cantidad = parseInt(prompt("Ingrese la cantidad de numeros en el array"));
//   const array = [];
//   for (let i = 0; i < cantidad; i++) {
//     num = parseInt(prompt("Ingrese el numero ", i, " :"));
//     array.push(num);
//   }
//   console.log(array);
// }

// sumaArreglo()

let a = parseInt(prompt("Ingrese el primer numero"));
let b = parseInt(prompt("Ingrese el ultimo numero"));
let c = [4, 5, 3, 6, 8, 1, 5, 9, 4, 2, 5];

const sumaArreglo = (a, b, c) => {
  let suma = 0;
  if (a < c.length && b > a && a > 0) {
    for (let i = a; i <= b; i++) {
      suma = suma + c[i];
    }
    console.log(suma);
  } else {
    throw new Error("Los rangos superan el limite del arreglo");

  }
}
sumaArreglo(a, b, c);
