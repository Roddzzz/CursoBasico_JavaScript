function verificar(){
  var fnmr = document.getElementById('N')
  var flist = document.getElementById('Listanumero')
  if (fnmr.value === '') {
    alert('ERRO digite um numero')
  } else {
    var multi = 1
    var result = 0
    while (multi <= 10){
      result = Number(fnmr.value) * multi
      flist.innerHTML += `<p>${fnmr.value}x${multi} = ${result}</p>`
      multi++
    }
  } 
}