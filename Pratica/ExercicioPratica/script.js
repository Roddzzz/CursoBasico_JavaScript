function carregar(){
  var msg = document.getElementById('msg')
  var img = document.getElementById('img')
  var mensagem = document.getElementById('mensagem')
  var agora = new Date()
  var hora = agora.getHours()
  msg.innerHTML = `Agora são ${hora}h.`
  
  if (hora >= 0 && hora < 12) {
    img.src = 'Manhã.png'
    document.body.style.background = '#fcc6a4'
    mensagem.innerHTML = 'Bom dia!'
  } else if (hora >= 12 && hora < 18) {
    img.src = 'Tarde.png'
    document.body.style.background = '#ff9006'
    mensagem.innerHTML = 'Boa tarde!'
  } else {
    img.src = 'Noite.png'
    document.body.style.background = '#081b1f'
    mensagem.innerHTML = 'Boa noite!'
  }
}