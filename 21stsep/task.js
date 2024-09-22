// Task 1
let str1 = "   Hello";
let str2 = "srujana   ";
console.log("Task 1:", str1.concat(str2));
let combined = (str1.trim() + str2.trim()).toUpperCase();
console.log("Task 1:", combined);

// Task 2
let str3 = "Hello Srujana katla yadav";
console.log("Task 2:", str3.length);
let middlePortion = str3.substring(6, 12); 
console.log("Task 2:", middlePortion);
let lastIndex = middlePortion.length - 1;
console.log("Task 2:", lastIndex);
let lowerCasePortion = middlePortion.toLowerCase();
console.log("Task 2:", lowerCasePortion);

// Task 3
let char = "hi";
let str4 = "srujana";
let upperConcat = (char + str4).toUpperCase();
console.log("Task 3:", upperConcat);
let lastSecondChar = upperConcat[upperConcat.length - 2];
console.log("Task 3:", lastSecondChar);

// Task 4
let str5 = "katla";
let str6 = "srujana";
let firstThree = str5.substring(0, 3); 
console.log("Task 4:", firstThree);
let lastThree = str6.substring(str6.length - 3); 
console.log("Task 4:", lastThree);
let result4 = firstThree + lastThree;
result4 = result4.charAt(0).toUpperCase() + result4.slice(1, -1) + result4.charAt(result4.length - 1).toUpperCase();
console.log("Task 4:", result4);

// Task 5
let str7 = "   Hello srujana   ";
let trimmed = str7.trim();
console.log("Task 5:", trimmed);
let firstCharUpper = trimmed.charAt(0).toUpperCase();
console.log("Task 5:", firstCharUpper);
let lastCharUpper = trimmed.charAt(trimmed.length - 1).toUpperCase();
console.log("Task 5:", lastCharUpper);
let specificPart = trimmed.substring(6, 11); 
console.log("Task 5:", specificPart);
let concatResult = firstCharUpper + trimmed.slice(1, -1) + lastCharUpper + specificPart;
console.log("Task 5:", concatResult);

// Task 6
let sentence = "hello there, how are you";
console.log("Task 6:", sentence);
let indexOfAre = sentence.indexOf("are");
console.log("Task 6:", indexOfAre);
