// 3. Média aritmética de 4 notas
let notas = [7.5, 8.0, 6.5, 9.0];
let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaNotas += notas[i];
}

let media = somaNotas / notas.length;
console.log("3. Média final:", media);