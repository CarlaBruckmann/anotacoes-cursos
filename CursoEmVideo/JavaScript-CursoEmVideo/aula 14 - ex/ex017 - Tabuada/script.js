function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) //numero 
        let c = 1 //contador
        tab.innerHTML = ''//antes de começar a tabuada, limpa a área de tabuada

        while (c <=10) {
            let item = document.createElement('option')//criar elemento no HTML
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`//saber qual item foi selecionado - quando usar outras linguagens (como PHP)- não faz tanto sentido pro JavaScript - value option do HTML
            tab.appendChild(item)//adiciona 'item' como filho do select para aparecer na tela
            c++ //incremento
        }
    }
}