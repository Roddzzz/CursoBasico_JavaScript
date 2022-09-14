var idade = 22
console.log(`Você tem ${idade} anos e tem:`)
if (idade < 16){
  console.log('Não vota')
} else {
  if(idade >= 16 && idade < 18) {
    console.log('Voto opcional')
  } else {
    console.log('Voto obrigatório')
  }
}