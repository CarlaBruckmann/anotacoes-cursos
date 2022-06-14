var num = window.document.getElementById('fnum')
var lista = window.document.getElementById('flista')
var res = window.document.getElementById('res')
var valores = []//cria array 

function isNumero(n) {//verificar se o numero esta entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { //verificar se ja esxite o numero na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {//! -> não
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''//faz o item da caixinha apagar apos adicionar
    num.focus() //faz o focus voltar pra caixinha
}

function finalizar() {
    if (valores.length == 0) {//se a array estiver vazia
        window.alert('Por favor, adicione número antes de finalizar')
    } else {
        var total = valores.length//total de itens na array
        var menor = valores[0]
        var maior = valores[0]
        var soma = 0
        var média = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {//se alguma posição dentro de valores for maior que var maior(posição 0)//vai percorrer até mostrar o maior
                maior = valores[pos]//maior passa a valer value[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        média = soma / total
        res.innerHTML += `Ao todo, temos ${total} números cadastrados.<br>`
        res.innerHTML += `O maior número informado foi ${maior}.<br>`
        res.innerHTML += `O menor número informado foi ${menor}.<br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
        res.innerHTML += `A média dos valores informados é ${média}.`
    }
}