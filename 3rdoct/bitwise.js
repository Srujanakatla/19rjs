//bitwise
let a = 12;
let b = 15;
console.log(a|b);
console.log(a&b);
console.log(a^b);
console.log(~a);
console.log(~b);
console.log(a<<1);
console.log(a>>1);
console.log(b>>1);
console.log(b<<1);
console.log(b<<2);

//toexponential
var num = 1236784;
console.log(num.toExponential());
console.log(num.toExponential(4));
console.log(num.toExponential(2));
console.log(num.toExponential(12));

//instanceof
let strPrimitive = "Hello";              
let strObject = new String("Hello");     

console.log(strPrimitive instanceof String);  
console.log(strObject instanceof String);     
console.log(strObject instanceof Object);   

var num = 21;
var numobj = new String(21);

console.log(num instanceof Number);
console.log(numobj instanceof Number);
console.log(numobj instanceof Object);
console.log(num instanceof Object);


let n = 6; 
let pattern = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);

let s = 5; 
let patt = "";

for (let i = 1; i < s; i++) {
  for (let j = 0; j < s; j++) {
    patt += "*";
  }
  patt += "\n";
}

console.log(patt);



var m = 5;
var patterns = "";

for(var i = 1; i <= m; i++){
    for(var j = 0; j < i; j++){
        patterns += "*";
    }
    patterns += "\m";
}
console.log(patterns);

 

