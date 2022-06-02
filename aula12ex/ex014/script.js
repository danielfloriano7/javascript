function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 2 && hora < 12) {
        //BOM DIA
        img.src = 'images/manha.png'
        document.body.style.background = "#F2E4D1"
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'images/tarde.png'
        document.body.style.background = "#b9846f"
    } else {
        //BOA NOITE
        img.src = 'images/noite.png'
        document.body.style.background = "#2F253F"
    }
}

