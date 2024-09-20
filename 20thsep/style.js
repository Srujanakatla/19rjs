var obj={
    name:"srujana",
    place:"wgl",
    age:21,

}
obj.name="papa",
obj.place="hyd",
obj.age="45",
obj.sal="300000",
obj.clg="jntuh",
console.log(obj);

var family=["dad", "mom","srujana", "sagar"]
console.log(family);
family[0] = "ilaiah",
family[2] = "manasa",
console.log(family);
 family[4] = "papa",
 console.log(family);
  family.length = 3;
  console.log(family);
 
  var a = 100;
  var a1 = a.toString()
  console.log(typeof a1, a1);

  let num = 123.8967;
  console.log(parseInt(num));

  var c = 985.8764;
  console.log(parseFloat(c));

  var d = "srujana";
  console.log(isFinite(d));

  var y = 123;
  console.log(isFinite(y));

  var g = {};
  console.log(typeof g);

  var h = [1,2,3];
  console.log(typeof h);

  var e = 123456;
  console.log(e.toExponential(2));
console.log(e.toExponential());

  var f = 234.56345;
  console.log(f.toFixed(2));

  let p = 2314.2344;
  console.log(p.toPrecision(5));

  console.log(Number.isNaN(NaN)); 
console.log(Number.isNaN("NaN")); 
console.log(Number.isNaN(123)); 
console.log(Number.isNaN("srujana")); 
console.log(Number.isNaN("123")); 
console.log(isNaN("hello"));
console.log(isNaN(NaN));
// console.log(Number.isNaN(srujana)); 

let str = "123";
let nums = Number(str);
console.log(nums); 
console.log(typeof nums); 

console.log(Number("123")); 
console.log(Number("123.45"));

let strNumber = "256";
let strFloat = "256.78";
let invalidStr = "256abc";

console.log(Number(strNumber)); 
console.log(Number(strFloat)); 
console.log(Number(invalidStr));

const number = 45609;
console.log(number.toLocaleString());  
console.log(number.toLocaleString("de-DE")); 
console.log(number.toLocaleString("ja-JP"));
console.log(number.toLocaleString("se-kl"));
console.log(number.toLocaleString(12-34));
// console.log(number.toLocaleString("$@-%*"));
// console.log(number.toLocaleString("l4-3p"));

  

