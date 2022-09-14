let amigo = {nome: 'José',
sexo: 'M', 
altura: 1.75, 
peso: 80.0, 
engordar(p){
this.peso += p
}
}

amigo.engordar(2)
console.log(`O ${amigo.nome} engordou e agora pesa ${amigo.peso} kg.`)