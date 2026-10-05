// 7. Substituir valores negativos por 0
let numeros = [5, -3, 12, -8, 0, 14, -1, 9, -20, 6];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < 0) {
    numeros[i] = 0;
  }
}

console.log("7. Valores:", numeros);