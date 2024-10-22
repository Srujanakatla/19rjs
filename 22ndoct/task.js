let arr = [1, 2, 3];
let result = arr.map(num => num * 3);
console.log(result);  

let array = [1, 2, 3, 4, 5];
let result2 = array.filter(num => num % 2 === 0);
console.log(result2);  

let arrays = [5, 10, 15];
let result3 = arrays.includes(10);
console.log(result3);  


let array2 = [10, 15, 25, 30];
let result4 = array2.find(num => num > 20);
console.log(result4); 

let array3 = [1, [2, [3, 4]], 5];
let result5 = array3.flat(1);
console.log(result5);  
