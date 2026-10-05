// 2. Maior e menor valor em um vetor de 10 inteiros
let numeros = [15, 82, 3, 47, 91, 12, 5, 64, 33, 20];
let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) maior = numeros[i];
  if (numeros[i] < menor) menor = numeros[i];
}

console.log("2. Maior:", maior, "| Menor:", menor);