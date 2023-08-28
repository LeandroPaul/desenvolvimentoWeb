const numeroDoApostador = document.getElementById('entrada');
function enviar(){
        const resposta = numeroDoApostador;
        const numeroDaSorte = 5;
        const res = 'Número Apostado: '
        document.getElementById('resultado').innerHTML= res + resposta.value + 'Número Sorteado: ' + numeroDaSorte;
    
    
}


