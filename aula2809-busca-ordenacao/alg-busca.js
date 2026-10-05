const bandas = ['Back street boys', 'One Direction', 'Turma do pagode', 'Iron maden', 'Metalica'];

function buscaBandas(bandas , banda){
    for(let i = 0; i < bandas.length; i++){
        if(banda == bandas[i]){
            console.log(`A banda ${bandas[i]} foi localizada!`);
            return;
        }
    }
    console.log('Banda inexistente!');
}

buscaBandas(bandas, 'One Direction');