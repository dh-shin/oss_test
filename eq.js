let x = 1;

console.log(x == 1); // true
console.log(x === 1); // true

console.log(x == true); // true
console.log(x === true); // false

console.log(0 == []); // true
console.log('' == 0); // true
console.log(' ' == 0); // true
console.log('' == ' '); // false


console.log(0 === []); // false
console.log('' === 0); // false
console.log(' ' === 0); // false
console.log('' === ' '); // false
