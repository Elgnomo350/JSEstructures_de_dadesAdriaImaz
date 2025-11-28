function CreaCubos (array) {
  let resultat = [];
  for (let x of array) {
    resultat.push(x ** 3);
  }
  return resultat;
}

console.log(CreaCubos([3, 34, 2, 100, 1]));
