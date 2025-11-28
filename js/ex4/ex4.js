let lista1 = [1, 2, 3, 4];
let lista2 = [1, 33, 76, 4];

let fusionV2 = [...lista1, ...lista2];

let setSenseDuplicats = new Set(fusionV2);

console.log([...setSenseDuplicats]);
