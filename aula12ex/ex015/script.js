function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value == 0 || Number(fAno.value) > ano) {
        alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('width', '300px')

        if(fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './images/bebe-m.png')
            } else if (idade < 22) {
                img.setAttribute('src', './images/jovem-m.png')
            } else if(idade < 50) {
                img.setAttribute('src', './images/adulto-m.png')
            } else {
                img.setAttribute('src', './images/idoso-m.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './images/bebe-f.png')
            } else if (idade < 22) {
                img.setAttribute('src', './images/jovem-f.png')
            } else if(idade < 50) {
                img.setAttribute('src', './images/adulto-f.png')
            } else {
                img.setAttribute('src', './images/idoso-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 

}