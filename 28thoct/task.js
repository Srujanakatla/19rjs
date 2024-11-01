const numbers1 = [2, 4, 6, 8, 10];
const totalSum = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum); // Output: 30


const array =  [1,3,5,7];
const result = array.reduce((a,b)=>a*b,1)
console.log(result);

const words = ['apple', 'banana', 'cherry'];
const upper = words.map(x=>x.toUpperCase());
console.log(upper);


const numb = [1, 2, 3, 4, 5];
const multiplied = numb.map(number => number * 10);
console.log(multiplied);

const people = [
    { name: 'John', age: 25 },
    { name: 'Sarah', age: 30 },
    { name: 'Mike', age: 35 }
  ];
  const ages = people.map(p=>p.age);
  console.log(ages);

  const fruits = ['apple', 'banana', 'cherry'];
  fruits.forEach(i=>console.log(fruits));

  const arr =  [1, 2, 3, 4, 5, 6];
  arr.forEach(z=>console.log(arr));
  
  const numbers4 = [1, 2, 3, 4, 5, 6];
let evenCount = 0;
numbers4.forEach(number => {
  if (number % 2 === 0) evenCount++;
});
console.log(evenCount); 
 
  
  



