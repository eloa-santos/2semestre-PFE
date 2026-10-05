// 9. Contar quantas vezes o número 5 aparece
let numeros = [5, 12, 5, 7, 8, 5, 3, 9, 5, 1];
let contadorCinco = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 5) {
    contadorCinco++;
  }
}

console.log("9. O número 5 aparece", contadorCinco, "vezes.");