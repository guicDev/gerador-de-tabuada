function gerar() {
    var numero = document.getElementById('numerotxt')
    var tabuada = document.getElementById('seltab')

    if (numero.value == '') {
        alert('Digite um numero por favor!')
    } else {
        var n = Number(numero.value)
        tabuada.innerHTML = ''
        for (var i = 1; i <= 10; i++) {
            let item = document.createElement('option') // cria item da lista
            item.text = `${n} x ${i} = ${n * i}`
            tabuada.appendChild(item) // adiciona no select
        }
    }
}