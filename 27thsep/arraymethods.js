var a = [1,2,3,4,5];
var b = ["srujana",{id:1,name:"cse"},[1,2,3],"hi",28,true]
var c = a.concat(b);
var arrlen = c.length;
var slice = c.slice(4,10);
var indexof = slice.indexOf(true);
var indexof1 = slice.indexOf(1);
console.log("array:",c);
console.log("array1:",arrlen);
console.log("array2:",slice);
console.log("array3:",slice.length);
console.log("array4:",indexof);
console.log("array5:",indexof1);

//shift
var s = [1,2,3,4,5];
s.unshift("srujana","daddy","amma","katla",20);
s.push(20,30,40,50,4000);
s.pop();
s.pop();
s.pop();
s.shift();
s.shift();
s.shift();
console.log("shift:",s);

console.log(s.includes(20));

//split
var x = "hello, how are you";
var y = x.split();
var z = x.split("");
var t = y.reverse();
var v = y.join("");
console.log(y);
console.log(z);
console.log(t);
console.log(v);





