// 5. Verificar se um nome está presente na lista
let nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];
let nomeProcurado = "Carlos"; 
let encontrado = false;

for (let i = 0; i < nomes.length; i++) {
  if (nomes[i] === nomeProcurado) {
    encontrado = true;
    break;
  }
}

if (encontrado) {
  console.log('5. o nome ', nomeProcurado, ' está na lista');
} else {
  console.log('5. o nome ', nomeProcurado, ' não está na lista');
}