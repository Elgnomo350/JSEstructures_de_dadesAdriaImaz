let nums = [];

for (let i = 0; i < 5; i++) {
  nums.push(Math.floor(Math.random() * 100));
}

console.log("Original:", nums);
nums.sort((a, b) => a - b); //esto lo he buscado en la red
let primer = nums[0];
let ultim = nums[nums.length - 1];

/* --------------------------------------------------*/

let copiadeex1 = [...nums];
console.log("Este si que es el ejercicio 2")
console.log(copiadeex1);
