let email="katlasrujana1@gmail.com"
console.log(email.startsWith("katla"));

let a = "katlasrujana1@gmail.com"
console.log(a.endsWith(".com"));

let b = "srujanakatla@gmail.in"
console.log(b.endsWith(".com"));

let c = "hello everyone this is srujana hello guys"
console.log(c.lastIndexOf("hello"));


let repeat = "offer!!!"
console.log(repeat.repeat("5"));

let con = document.getElementById("offer");
const offer = "offer";
const times = offer.repeat(5);
con.innerHTML=times;

let replace = "inshock";
console.log(replace.replace("in","out"));

const s = "inshock";
console.log(s);
setTimeout(function(){
    console.log(s.replace("in","out"));
    
},10000)


let p = ["apple","banana","mango","pieapple"]
console.log(p.splice(1,2,"srujana","katla"));


let arr = ['a', 'b', 'c', 'd'];
let removed = arr.splice(1, 2);  
console.log(arr);     
console.log(removed);  

let arrs = ['a', 'b', 'c'];
arr.splice(1, 0, 'x', 'y'); 
console.log(arrs);

let array = ['a', 'b', 'c'];
arr.splice(1, 1, 'x');  
console.log(array);  








