function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('anonas')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || fano.value > ano) {
    alert('!ERRO! verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    idade = ano - Number(fano.value)
    var img = document.getElementById('fotinho')
    genero = ''
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        img.src = 'https://i.pinimg.com/236x/f4/54/d0/f454d005abd9796e1e2d5a229f611cc1.jpg'
      } else if (idade < 18) {
        img.src = 'https://i.pinimg.com/236x/1c/f6/76/1cf676067506a9f03524e22cc38e7b1b.jpg'
      } else if (idade < 50) {
        img.src = 'https://i.pinimg.com/236x/28/c8/3c/28c83c91b8aa1ae5795d6ab73e4ad718.jpg'
      } else {
        img.src = 'https://i.pinimg.com/236x/49/6f/f5/496ff524d1b811dfb18e6809ba9a2520.jpg'
      }
    } else {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        img.src = 'https://i.pinimg.com/236x/5f/42/b0/5f42b04835846872e0e50eb73536d7b0.jpg'
      } else if (idade < 18) {
        img.src = 'https://i.pinimg.com/236x/1a/a8/a1/1aa8a1e5b829d887517562d063ded910.jpg'
      } else if (idade < 50) {
        img.src = 'https://i.pinimg.com/236x/cc/76/2a/cc762a39913d32276e7e96f4f5e5501c.jpg'
      } else {
        img.src = 'https://i.pinimg.com/236x/ef/ae/d8/efaed81a821ae789effcd8dc91a3b8c8.jpg'
      }
    }
  res.innerHTML = `Detectamos ${genero} com ${idade} anos`
  }
}