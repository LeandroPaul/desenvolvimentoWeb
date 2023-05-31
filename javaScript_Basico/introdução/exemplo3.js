//console.log("Minha primeira aula javaScript. Óla mundo!");//
//let x = 10;//
//onsole.log(x);//
/*let body = document.body
let h2 = document.createElement('h2')
h2.textContent = "Manipulando o DOM"
body.append(h2)*/

/*let pessoas=["Ana","Maria","João","Luiz"]
let lista = document.querySelector('#lista');
for (let i=0; i<pessoas.length; i++){
    let li=document.createElement('li')
    li.textContent=pessoas[i]
    lista.append(li)
}

let li2=document.createElement('li')
    li2.textContent="Maciel"
    lista.append(li2)

// Outra forma

document.getElementsByTagName('li')[2].textContent="Lidi"

function clicou(){
    let lista = document.querySelector('#lista');
    lista.innerHTML += "<li>Geane</li>"
    // let lista = document.querySelector('#lista').innerHTML+= "<li>Geane</li>"
    //  let lista = document.querySelector('ul').innerHTML+= "<li>Geane</li>"
}*/

/*botao = document.querySelector('#botao')
botao.addEvenListener("click", clicou);*/

// Outra forma
// botao = document.querySelector('#botao')
// botao.addEvenListener("click", function() {clicou});

// obter um elemento único a partir do id
/*function getById() {
    const listaContatos = document.getElementById("lista-contatos")
    window.alert(listaContatos)
}*/

// obter elementos a partir de um nome de tag:
/*function getByTagName() {
    // Obter vários elementos (HTMLCollection) a partir de um nome de tag
    const liElementos = document.getElementsByTagName("li")
    //window.alert(liElementos)
    window.alert(liElementos[0].textContent)
}*/

//a partir de uma class:
/*function getByClassName() {
    // Obter vários elementos (HTMLCollection) a partir de uma classe
    const contatoInputs = document.getElementsByClassName("contato-input")
    window.alert(contatoInputs[2].value)
    //window.alert(contatoInputs[1])
}*/

/*function getByName() {
    // Obter vários elementos (NodeList) a partir do atributo name
    const contato1 = document.getElementsByName("contato1")
    window.alert(contato1)
}*/

// método mais flexível de todos, através de uma query (
    /*function getQuerySelectorAll() {
        // Obter vários elementos (NodeList) a partir de uma query
        const contatos = document.querySelectorAll("#lista-contatos > li > label")
        window.alert(contatos[2].textContent)
        window.alert(contatos[0])
    }*/

    //obter um único elemento através de uma query. O comportamento é igual ao do querySelectorAll(), porém selecionando o primeiro elemento que corresponder à query:
//function getQuerySelector() {
    // Obter um elemento a partir de uma query (o primeiro elemento a corresponder)
    //const contato = document.querySelector("#icontato3 > li > label")
    //window.alert(contato)
    //window.alert(contato.textContent)
    /*const contato = document.querySelector("#icontato1")
    window.alert(contato)
    window.alert(contato.value)*/
//}

let cont = 0
function addContato(){
    listaContatos = document.getElementById('lista-contatos')
    //listaContatos = document.querySelector('#lista-contatos')
    h3 = document.createElement('h3')
    h3.innerText = "Contato " + (++cont)
    listaContatos.appendChild(h3)
   
    ul = document.createElement('ul')

    nomeLi = document.createElement('li')
    nomeLi.innerText = "Nome: "
    nomeInput = document.createElement('input')
    nomeInput.type = 'text'
    nomeInput.name = 'nomeCompleto'
    nomeLi.appendChild(nomeInput)
    
    
    ul.appendChild(nomeLi)
    ul.appendChild(document.createElement('br')) 

    foneLi = document.createElement('li')
    foneLi.innerText = "Telefone: "
    foneInput = document.createElement('input')
    foneInput.type = 'text'
    foneInput.name = 'telefone'
    foneLi.appendChild(foneInput)
    

    ul.appendChild(foneLi)
    ul.appendChild(document.createElement('br')) 
    
    enderecoLi = document.createElement('li')
    enderecoLi.innerText = "Endereço: "
    enderecoInput = document.createElement('input')
    enderecoInput.type = 'text'
    enderecoInput.name = 'Endereço'
    enderecoLi.appendChild(enderecoInput)

    ul.appendChild(enderecoLi)
    ul.appendChild(document.createElement('br')) 

   
    listaContatos.appendChild(ul)


}

function removeContato(){
    listaContatos = document.getElementById('lista-contatos')
    titulos = document.getElementsByTagName('h3')
    contatos = document.getElementsByTagName('ul')

    posicao = titulos.length
    listaContatos.removeChild(titulos[posicao-1])
    listaContatos.removeChild(contatos[posicao-1])
    cont--;

}

