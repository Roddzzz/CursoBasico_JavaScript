function contar(){
  var ini = document.getElementById('txti')
  var fim = document.getElementById('txtf')
  var pas = document.getElementById('txtp')
  var res = document.getElementById('res')

  if(ini.value == '' || fim.value == '' || pas.value == '') {
    res.innerHTML = 'Impossivel contar!'
  } else {
    res.innerHTML = 'Contando '
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)
    if(i < f){
      for(let c = i ; c <= f ; c += p){
          res.innerHTML += `\u{27A1} ${c} `
      }
    } else {
      for(let c = i ; c >= f ; c -= p){
          res.innerHTML += `\u{27A1} ${c} `
      }
    }
  }
}