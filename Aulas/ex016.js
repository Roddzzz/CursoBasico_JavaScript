function fatorial(f) {
  let fat = 1
  for(c = f ; c >= 1 ; c--) {
    fat = fat * c
  }
  return fat
}

console.log(fatorial(5))