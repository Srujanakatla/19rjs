// function limitNumber(value, min, max) {
//     return Math.max(min, Math.min(value, max));
// }
// let a1 = Math.min((5, 1, 10))
// console.log(a);

// console.log(limitNumber(5, 1, 10)); 
// console.log(limitNumber(0, 1, 10)); 
// console.log(limitNumber(15, 1, 10)); 
let e1 = Math.min(2,4,5,1,8)
console.log("mathmin:",e1);

let e2 = Math.min(3,5,-10,7)
console.log("mathmin:",e2);

let e3 = Math.max(9,1,3,10,2,-7);
console.log("mathmax;",e3);

let result = Math.floor(Math.random() * 5) + 5;
console.log(result);


function roundUpIfFractional(num) {
    return num % 1 === 0 ? num : Math.ceil(Math.round(num));
}

console.log(roundUpIfFractional(5.1)); 
console.log(roundUpIfFractional(5.0)); 

const arr = [10, 20, 30, 40];
const [a, b] = arr;

console.log(a); 
console.log(b); 

const person = { name: "Alice", age: 25, city: "New york" };
const { name, age } = person;

console.log(name); 
console.log(age); 

const data = { person: { name: "eve", address: { city: "paris" } } };
const { person: { address: { city } } } = data;

console.log(city);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const Array = [...array1, ...array2];

console.log(Array); 

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); 
console.log(sum(5, 10, 15, 20)); 

const ori = { name: "John", age: 30 };
const City = { ...ori, city: "New York" };

console.log(City); 
