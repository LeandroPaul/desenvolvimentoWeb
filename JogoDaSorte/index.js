const numeroDoApostador = document.getElementById('entrada');
const palpite = numeroDoApostador;


//Lista para guardar os valores digitados
const listaDePalpite = [];
// Variavel para receber números de tentaivas
const tentativas = 0;


function enviar(){
        const num =  62;
        if(palpite.value>0){ 
                
                if(palpite.value<num){ 
                        document.getElementById('maior').innerHTML = '';
                        document.getElementById('acertou').innerHTML = '';
                        const linha1 = "Palpite do Jogador: ";
                        const linha2 = "Número Sorteado: ";
                        const texto = linha1 + palpite.value + "<br>" + linha2 + num + "<br>";
                        
                        // adiciona o palpite a lista.
                        listaDePalpite.push(palpite.value);
        
                        // Usei join() para criar uma string com os elementos da lista
                        const listaDePalpitesString = listaDePalpite.join(", ");
        
                        // Limpar o campo de entrada
                        document.getElementById('entrada').value = '';
                        
                        const errouElement = document.getElementById('errou');
                        errouElement.innerHTML = texto + "Números Digitados: " + listaDePalpitesString + "<br><br>" + "Você errou !!!";
                        
                        // Adicione a classe CSS para tornar o texto vermelho
                        errouElement.classList.add('texto-vermelho');
        
                        const menorElement = document.getElementById('menor');
                        menorElement.innerHTML = "Digite um palpite MAIOR do que o informado e MENOR que 63.";
                        
                        // Adicione a classe CSS para tornar o texto vermelho
                        menorElement.classList.add('texto-amarelo');
                }
                
                if(palpite.value==num){
                        document.getElementById('menor').innerHTML = '';
                        document.getElementById('maior').innerHTML = '';
                        document.getElementById('errou').innerHTML = '';
                        const linha1 = "Palpite do Jogador: "
                        const linha2 = "Número Sorteado: "
                        const texto = linha1 + palpite.value + "<br>" + linha2 + num + "<br>";
                        
                        // adiciona o palpite a lista.
                        listaDePalpite.push(palpite.value);
        
                        // Usei join() para criar uma string com os elementos da lista
                        const listaDePalpitesString = listaDePalpite.join(", ");
        
                        // Limpar o campo de entrada
                        document.getElementById('entrada').value = '';
                        
                        const acertouElement = document.getElementById('acertou');
                        acertouElement.innerHTML = texto + "Números Digitados: " + listaDePalpitesString + "<br><br>" + "Você Acertou !!!";

                        // Adicione a classe CSS para tornar o texto vermelho
                        acertouElement.classList.add('texto-verde');
                }
        } 
        
        if(palpite.value>num){
                // Limpe os elementos de feedback de outros casos
                document.getElementById('menor').innerHTML = '';
                document.getElementById('acertou').innerHTML = '';
            
                const linha1 = "Palpite do Jogador: ";
                const linha2 = "Número Sorteado: ";
                const texto = linha1 + palpite.value + "<br>" + linha2 + num + "<br>";
                
                // Adicione o palpite à lista.
                listaDePalpite.push(palpite.value);
            
                // Use join() para criar uma string com os elementos da lista
                const listaDePalpitesString = listaDePalpite.join(", ");
            
                // Limpar o campo de entrada
                document.getElementById('entrada').value = '';
                
                const errouElement = document.getElementById('errou');
                errouElement.innerHTML = texto + "Números Digitados: " + listaDePalpitesString + "<br><br>" + "Você errou !!!";
                
                // Adicione a classe CSS para tornar o texto vermelho
                errouElement.classList.add('texto-vermelho');
            
                const maiorElement = document.getElementById('maior');
                maiorElement.innerHTML = "Digite um palpite Menor do que o informado e Maior que 63.";
                
                // Adicione a classe CSS para tornar o texto amarelo
                maiorElement.classList.add('texto-amarelo');
        }     
       
}






