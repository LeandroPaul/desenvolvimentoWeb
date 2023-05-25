//console.log("Minha primeira aula javaScript. Óla mundo!");//
//let x = 10;//
//onsole.log(x);//
/*let body = document.body
let h2 = document.createElement('h2')
h2.textContent = "Manipulando o DOM"
body.append(h2)*/

let pessoas=["Ana","Maria","João","Luiz"]
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
}

/*botao = document.querySelector('#botao')
botao.addEvenListener("click", clicou);*/

// Outra forma
// botao = document.querySelector('#botao')
// botao.addEvenListener("click", function() {clicou});



