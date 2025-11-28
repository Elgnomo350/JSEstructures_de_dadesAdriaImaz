
function esPalindrom(paraula) {
  let cua = [];
  for (let lletra of paraula) {
    cua.push(lletra);
  }

  let paraulaGood = "";

  while (cua.length > 0) {
    paraulaGood += cua.shift();
  }
  return paraulaGood === paraula.split("").reverse().join(""); // con tres funciones
}

console.log(esPalindrom("kayak"));
console.log(esPalindrom("anna"));
console.log(esPalindrom("Josefina"));
