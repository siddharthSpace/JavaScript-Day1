// Lesson 3 - Strings

// 3a
let text = 'My name is: ';

// 3b
let name = 'Siddharth';

// 3c
console.log(text + name);

// 3d
let coffee = 5;
let bagel = 3;
let total = coffee + bagel;
console.log('Total cost: $' + total);

// 3e
console.log(`Total cost: $${total}`);

// 3f
alert(`Total cost: $${total}`);

// 3g
coffee = 5.99;
bagel = 2.95;
total = Math.round((coffee + bagel) * 100) / 100;
console.log('Total cost: $' + total);

// 3h
console.log(`Total cost: $${total}`);

// 3i
alert(`Total cost: $${total}`);

// 3j
let message = `Total cost: $${total}
Thank you, come again!`;

alert(message);
