function contar() {

    var formInicio = window.document.getElementById('txtinicio')
    var formFim = window.document.getElementById('txtfim')
    var formPasso = window.document.getElementById('txtpasso')
    var res = window.document.querySelector('div#res')

    if (formInicio.value.length === 0 || formFim.value.length === 0 || formPasso.value.length === 0) {
        res.innerHTML = `Impossível realizar a contagem!`

    } else {
        res.innerHTML = 'Contando:<br>'
        var i = Number(formInicio.value)
        var f = Number(formFim.value)
        var p = Number(formPasso.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando Passo 1')
            p = 1
        }
        if (i < f) {//contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} ` //ADICIONA EMOTICON
            }
        } else { //contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

