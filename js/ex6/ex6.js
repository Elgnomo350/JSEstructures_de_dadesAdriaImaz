let palabras = ["CaSa", "baba", "patAtA" ,"bubu", "bibi"];

let verificar = palabras.filter(p => {
  let x = 0;
  for (let lletra of p) {
    if (lletra === 'a') x++;
  }
  return x > 1;
});

console.log(verificar);
