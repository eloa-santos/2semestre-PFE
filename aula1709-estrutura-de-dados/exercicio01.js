function historicoTextos() {
  let palavras = []; 

  return {
    digitar(palavra) {
      palavras.push(palavra); 
      console.log(palavra);
    },

    desfazer() {
      if (palavras.length > 0) {
        let removida = palavras.pop(); 
        console.log(removida);
      } else {
        console.log("Vazio");
      }
    },

    exibirTexto() {
      let textoAtual = "";

      for (let i = 0; i < palavras.length; i++) {
        textoAtual += palavras[i];
        
        if (i < palavras.length - 1) {
          textoAtual += " ";
        }
      }

      console.log(textoAtual);
    }
  };
}

let editor = historicoTextos();

editor.digitar("Aprendendo");
editor.digitar("JavaScript");
editor.digitar("com");
editor.digitar("Arrays");
editor.exibirTexto(); 

editor.desfazer(); 
editor.exibirTexto(); 

editor.desfazer(); 
editor.exibirTexto();