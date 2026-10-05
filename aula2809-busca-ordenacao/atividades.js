function SalariosDecrescente(salarios) {
    for (let i = 0; i < salarios.length; i++) {
        let maiorIndice = i;
        
        for (let j = i + 1; j < salarios.length; j++) {
            if (salarios[j] > salarios[maiorIndice]) {
                maiorIndice = j;
            }
        }
        
        if (maiorIndice !== i) {
            let aux = salarios[i];
            salarios[i] = salarios[maiorIndice];
            salarios[maiorIndice] = aux;
        }
    }
    return salarios;
}

const salarios = [10000, 6000, 19000, 4000, 3000];
console.log(SalariosDecrescente(salarios)); 