//question 1
var a = "srujana";
var middlepart = a.slice(2,5);
var  result = middlepart.toUpperCase();
console.log("question 1:",result);
//question 2
var str = "srujana katla";
var upperstr = str.toUpperCase();
var len = upperstr.length;
console.log("question 2:",upperstr);
console.log("question 2:",len);
////question 3
// let str = "srujana";
// let char = str.charCodeAt(str.charAt(1).length-1);
// console.log(char);

let strss = "hello";
let positions = 1;
let chars = strss.charAt(positions);
let ascii = chars.charCodeAt(0);
console.log("question 3:",chars);
console.log("question 3:",ascii);

//question 4
var str = "  hellosrujana  ";
var str2 = str.trim();
var slice = str2.slice(1,5);
console.log("question 4:",slice);

//question 5 
var string1 = "Srujana";
var string2 = "KATLA";
var result = string1+string2.toLowerCase();
// var result = toUpperCase();
console.log("question 5:",result);

//question 6 
let string = "    hello frnds";
let trimmed = string.trimStart(); 
let slicedStr = trimmed.slice(1); 
console.log("question6:",slicedStr); 

//question 7 
// var a = {
//     name : "srujana",
//     place : "hyd",
//     no : 123345
// }
// var res = a.charAt(name).toUpperCase();
// console.log(res);
let strs = "hello";
let position = 2;
let char = strs.charAt(position).toUpperCase();
console.log("question 7:",char); 

//question 8 
var trimstr = "srujana   ";
var trimend = "   katla";
var trim = trimstr.trimEnd();
var trims = trimstr.trimStart();
var res = trim;
console.log("question 8:",trim);
console.log("question 8:",trims);

//question 9 
var input = "   Hellojavascript   ";
var trimmedStr = input.trim();
console.log("question 9:",trimmedStr);
var uppercase = trimmedStr.toUpperCase(); 
var result = uppercase.slice(1, 5); 
console.log("question 9:",result); 

//question 10
let string5 = "HELLO";
let string6 = "WORLD";
let lowerStr1 = string5.toLowerCase();
let lowerStr2 = string6.toLowerCase();
let concatenatedStr = lowerStr1 + "  " + lowerStr2;
console.log("question 10:",concatenatedStr);

let firstChar = concatenatedStr.charAt(0);
console.log("qusetion 10:",firstChar); 






