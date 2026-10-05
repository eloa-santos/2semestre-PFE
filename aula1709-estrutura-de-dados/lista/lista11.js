// 11. Exibir apenas notas maiores ou iguais a 7.0
let notasTurma = [5.5, 7.0, 8.5, 4.0, 9.2];
let notasAprovadas = [];

for (let i = 0; i < notasTurma.length; i++) {
  if (notasTurma[i] >= 7.0) {
    notasAprovadas.push(notasTurma[i]);
  }
}

console.log("11. Notas maiores ou iguais a 7.0:", notasAprovadas);