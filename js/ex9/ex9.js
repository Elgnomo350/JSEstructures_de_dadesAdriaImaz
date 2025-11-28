let cua2 = [];

cua2.push({ nombre: "Ghost Rider", any: 2007 });
cua2.push({ nombre: "Forest Gump", any: 1994 });
cua2.push({ nombre: "Posesion infernal", any: 2013 });

let Viejo = cua2[0];

for (let peli of cua2) {
  if (peli.any < Viejo.any) { // si la película que toca es la más vieja la asigna a Viejo
    Viejo = peli;
  }
}

console.log("La mas antigua es", Viejo.nombre, "de", Viejo.any);
