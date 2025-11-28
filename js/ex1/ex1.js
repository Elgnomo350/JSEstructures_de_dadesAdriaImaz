let nums = [];

for (let i = 0; i < 5; i++) {
  nums.push(Math.floor(Math.random() * 100));
}

console.log("Original:", nums);
nums.sort((a, b) => a - b);
let primer = nums[0];
let ultim = nums[nums.length - 1];

console.log("Ordenat:", nums);
console.log("Primer:", primer);
console.log("Últim:", ultim);
