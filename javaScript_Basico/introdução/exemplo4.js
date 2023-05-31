function calculaResultado(){
    preco = document.querySelector('#ipreco').value
    quant = document.querySelector('#iquant').value
    total = parseFloat(preco)*parseInt(quant)
    document.querySelector('#itot').value = total
}