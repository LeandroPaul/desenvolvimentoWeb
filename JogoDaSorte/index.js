const numeroDoApostador = document.getElementById('entrada');
const palpite = numeroDoApostador;
const listaDePalpite = [];
let tentativas = 0;

function enviar() {
    const num = Math.floor(Math.random() * 100) + 1;
    tentativas++;

    if (palpite.value > 0) {
        if (palpite.value < num) {
            document.getElementById('errou').style.fontFamily = "Verdana";
            document.getElementById('maior').innerHTML = '';
            document.getElementById('acertou').innerHTML = '';
            const linha1 = "Palpite do Jogador: ";
            const linha2 = "Número Sorteado: ";
            const texto = linha1 + palpite.value + "<br>";
            const digitado = num;

            listaDePalpite.push(palpite.value);

            const listaDePalpitesString = listaDePalpite.join(", ");

            document.getElementById('entrada').value = '';

            const errouElement = document.getElementById('errou');
            errouElement.innerHTML = texto + "Números Digitados: " + listaDePalpitesString + "<br><br>" + "Número sorteado:" + "<br>" + digitado +"<br>"+ " Você errou !!!";

            errouElement.classList.add('texto-vermelho');

            var audio = new Audio('som/faustao-errou.mp3');
            audio.addEventListener('canplaythrough', function () {
                audio.play();
            });
        } else if (palpite.value == num) {
            const digitado = num;
            document.getElementById('acertou').style.fontFamily = "Verdana";
            document.getElementById('menor').innerHTML = '';
            document.getElementById('maior').innerHTML = '';
            document.getElementById('errou').innerHTML = '';
            const linha1 = "Palpite do Jogador: "
            const linha2 = "Número Sorteado: "
            const texto = linha1 + palpite.value + "<br>" + linha2 + num + "<br>";

            listaDePalpite.push(palpite.value);

            const listaDePalpitesString = listaDePalpite.join(", ");

            document.getElementById('entrada').value = '';

            const acertouElement = document.getElementById('acertou');
            acertouElement.innerHTML = texto + "Números Digitados: " + listaDePalpitesString + "<br><br>" + "Você Acertou !!!" + "<br>" + "Número aleatorio sorteado: "+digitado;

            acertouElement.classList.add('texto-verde');

            var audio = new Audio('som/aplausos.mp3');
            audio.addEventListener('canplaythrough', function () {
                audio.play();
            });
        } else {
            document.getElementById('maior').style.fontFamily = "Verdana";
            document.getElementById('menor').innerHTML = '';
            document.getElementById('acertou').innerHTML = '';
            const linha1 = "Palpite do Jogador: ";
            const linha2 = "Número Sorteado: ";
            const texto = linha1 + palpite.value + "<br>";
            const digitado = num;

            listaDePalpite.push(palpite.value);

            const listaDePalpitesString = listaDePalpite.join(", ");

            document.getElementById('entrada').value = '';

            const errouElement = document.getElementById('errou');
            errouElement.innerHTML = texto + "Números Digitados: " + listaDePalpitesString + "<br><br>" +"Número aleatorio sorteado: "+ digitado +"<br><br>"+"Você errou !!!";

            errouElement.classList.add('texto-vermelho');

            var audio = new Audio('som/faustao-errou.mp3');
            audio.addEventListener('canplaythrough', function () {
                audio.play();
            });
        }
    }
}






