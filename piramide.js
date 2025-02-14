// Genere un patron de asteriscos en forma de piramide


var funcionAsterisco = function (a) {
  for (let i = 0; i < a; i++) {
    let b = ' ';
    let c = ' ';
    for (let j = 0; j < i + 1; j++) {
      c = c + "";
      b = b + "*";
    }
    console.log(c + b);
  }
}

funcionAsterisco(10);

var piramide = function (valor) {
  for (let i = 0; i < 9; i++) {
    console.log(i);
  }

}
piramide(0);
