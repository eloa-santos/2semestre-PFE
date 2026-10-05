// 12. Criar nova lista apenas com elementos únicos
let repetidos = [1, 2, 2, 3, 4, 4, 5, 1, 6];
let unicos = [];

for (let i = 0; i < repetidos.length; i++) {
  if (!unicos.includes(repetidos[i])) {
    unicos.push(repetidos[i]);
  }
}

console.log("12. Elementos únicos:", unicos);