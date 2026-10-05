// 6. Imprimir valores na ordem inversa
let numeros = [1, 2, 3, 4, 5];
let invertido = [];

for (let i = numeros.length - 1; i >= 0; i--) {
  invertido.push(numeros[i]);
}

console.log("6. Ordem inversa:", invertido);