let num = document.getElementById('txtn')
let list = document.getElementById('fselect')
let res = document.getElementById('res')
let valores = []

function isNum(n){
  if(Number(num.value) >= 1 && Number(num.value) <= 100){
    return true
  } else {
    return false
  }
}

function isList(n, l){
  if(l.indexOf(Number(n)) != -1) {
    return true 
  } else {
    return false
  }
}

function adicionar(){
  if (isNum(num.value) && !isList(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    list.appendChild(item)
    res.innerHTML = ''
  } else {
    alert('Digite um número entre a restrição ou que não pertença a lista novamente.')
  }
  num.value = ''
  num.focus()
}

function finalizar() {
  if (valores.length == 0) {
    alert('Digite um número antes para operação.')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maior) {
        maior = valores[pos]
      }
      if (valores[pos] < menor) {
        menor = valores[pos]
      }
    }
    media = soma / tot

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo temo ${tot} cadastrados.</p>`
    res.innerHTML += `<p>O maior valor adiocionado foi ${maior}.</p>`
    res.innerHTML += `<p>Já o menor valor adiocionado foi ${menor}.</p>`
    res.innerHTML += `<p>A soma dos valores adicionados é: ${soma}.</p>`
    res.innerHTML += `<p>Já a média dos valores adicionados é: ${media}.</p>`

  }
}