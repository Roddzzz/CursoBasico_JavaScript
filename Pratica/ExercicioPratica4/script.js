function tabuada(){
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  if (num.value.length == 0) {
    alert('Digite um numero')
  } else {
    let n = Number(num.value)
    let t = 0
    tab.innerHTML = ''
    while (t <= 10) {
      let item = document.createElement('option')
      item.text = `${n}x${t} = ${n*t}`
      tab.appendChild(item)
      t++
    }
  }
}