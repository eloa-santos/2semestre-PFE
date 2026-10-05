// 10. Juntar duas listas em uma terceira
let listaA = [1, 2, 3];
let listaB = [4, 5, 6];
let listaJunta = [];

for (let i = 0; i < listaA.length; i++) {
  listaJunta.push(listaA[i]);
}

for (let i = 0; i < listaB.length; i++) {
  listaJunta.push(listaB[i]);
}

console.log("10. Listas unidas:", listaJunta);