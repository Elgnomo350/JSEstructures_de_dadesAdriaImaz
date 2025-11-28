let lista1 = [1, 2, 3, 4];
let lista2 = [1, 2, 76, 4];

let fusion = lista1.concat(lista2);

let listaFinal = [];

for (let i of fusion) {
  if (!listaFinal.includes(i)) {
    listaFinal.push(i);
  }
}
//para cada valor de la lista concatenada si no se repite se añade

console.log(listaFinal);
