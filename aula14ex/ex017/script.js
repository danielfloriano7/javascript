function tabuada() {
    let num =  document.getElementById('txtn').value
    let res = document.getElementById('res')
    if(num.length == 0) {
        alert('Escolha um numero' )
    } else {
        res.innerHTML = ''
        for(var c = 1; c <=10; c++) {
            //res.innerHTML += `${num} * ${c} = ${Number(num)*c} <br />`
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${Number(num)*c}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }
}