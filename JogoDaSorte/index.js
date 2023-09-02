const numeroDoApostador = document.getElementById('entrada');
const palpite = numeroDoApostador;

//Lista para guardar os valores digitados
const listaDePalpite = [];


function enviar(){
        const num =  Math. floor(Math. random() * (100 - 0 + 1)) + 1;
        if(palpite.value!=num){
                const linha1 = "Palpite do Jogador: "
                const linha2 = "Número Sorteado: "
                const texto = linha1 + palpite.value + "<br>" + linha2 + num + "<br>";
                
                // adiciona o palpite a lista.
                listaDePalpite.push(palpite.value);

                // Usei join() para criar uma string com os elementos da lista
                const listaDePalpitesString = listaDePalpite.join(", ");

                // Limpar o campo de entrada
                document.getElementById('entrada').value = '';
                
                document.getElementById('resultado').innerHTML = texto + "Números Digitados: " + listaDePalpitesString + "<br>" + "Você Errou!";

                }
        
        else {
                const linha1 = "Palpite do Jogador: "
                const linha2 = "Número Sorteado: "
                const texto = linha1 + palpite.value + "<br>" + linha2 + num + "<br>";
                
                // adiciona o palpite a lista.
                listaDePalpite.push(palpite.value);

                // Usei join() para criar uma string com os elementos da lista
                const listaDePalpitesString = listaDePalpite.join(", ");

                // Limpar o campo de entrada
                document.getElementById('entrada').value = '';
                   
                document.getElementById('resultado').innerHTML = texto + "Números Digitados: " + listaDePalpitesString + "<br>" + "Você acertou!";

                }
                
        
}




