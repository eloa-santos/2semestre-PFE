// 4. Quantidade de números pares em um vetor de 8 inteiros
let numeros = [4, 7, 12, 15, 18, 21, 24, 30];
let quantidadePares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    quantidadePares++;
  }
}

console.log("4. Quantidade de pares:", quantidadePares);