// 14. Trocar o primeiro elemento pelo último elemento
let vetor = [100, 200, 300, 400];

let primeiro = vetor.shift(); 
let ultimo = vetor.pop();     

vetor.unshift(ultimo);     
vetor.push(primeiro); 

console.log("14. Vetor com posições trocadas:", vetor);