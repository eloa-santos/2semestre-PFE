// 13. Verifique se o vetor está em ordem crescente
let vetor = [10, 20, 30, 40, 50];
let estaCrescente = true;

for (let i = 0; i < vetor.length - 1; i++) {
  if (vetor[i] > vetor[i + 1]) {
    estaCrescente = false;
    break;
  }
}

if (estaCrescente) {
  console.log("13. O vetor está em ordem crescente.");
} else {
  console.log("13. O vetor NÃO está em ordem crescente.");
}