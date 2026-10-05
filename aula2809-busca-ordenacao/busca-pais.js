const pais = ['Uzbequistão', 'Groelandia', 'Paquistão', 'Angola', 'Baren', 'Cabo verde', 'França', 'Islandia', 'Honduras'] ;

function buscaPais(paises , pais){
    for(let i = 0; i < paises.length; i++){
        if(pais == paises[i]){
            console.log(`O país ${paises[i]} foi localizado!`);
            return;
        }
    }
    console.log('País não listado!');
}

buscaPais(pais, 'Angola');