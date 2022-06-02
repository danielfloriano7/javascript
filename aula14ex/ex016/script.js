function contar() {
    var ini = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var pass = document.getElementById('passo').value
    var res = document.getElementById('res')

    
    
    if(ini == 0 || fim == 0 || pass == '') {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando:'

        if(Number(pass) <= 0) {
            alert('Passo invalido! Considerando PASSO 1')
            pass = 1
        }
        if(ini < fim) {
            // Contagem crescente
            for(let c = ini; c <= fim; c += pass) {
                res.innerHTML += ` ${c} \u{1f449}`
            }

        } else {
            // Contagem regressiva
            for(let c = ini; c >= fim; c -= pass) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        
        res.innerHTML += ` \u{1f3c1}` 
    }

    
}