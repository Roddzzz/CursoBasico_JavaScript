let num = [4, 5, 7, 6, 8]
num.push(9)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor tem ${num[3]}`)
for (i = 0 ; i < num.length ; i++) {
  console.log(`A posição ${i} no vetor vale: ${num[i]}`)
} //Modo tradicional

console.log('////////////////////////////')

for(i in num) {
  console.log(`A posição ${i} no vetor vale: ${num[i]}`)  
} //Simplificação para array

let pos = num.indexOf(8)
if (pos == -1){
  console.log('O valor n ão existe')
} else {
console.log(`O valor 8 no vetor está na posição ${pos}`)
}