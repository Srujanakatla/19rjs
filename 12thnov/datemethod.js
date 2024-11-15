let date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getDay());
console.log(date.getTime());

console.log(date.setMonth(10));
console.log(date.setFullYear(21));
console.log(date.setDate(13));
// console.log(date.setMonth());
console.log(date.setHours(9));
console.log(date.setMinutes(60));
console.log(date.setSeconds(30));
// console.log(date.setTime());

let s = new Date();
console.log(s.toDateString());
console.log(s.toTimeString());
console.log(s.toLocaleString());


let a={
    id:1,
    age:22,
    name:"srujana"
}
let b=function (p,q){
    console.log(this.name + " " + p + " " + q);
    console.log(this.id +" " + p +" "+q);
}

b.call(a,"katla","teja","coders")
b.call(a,2,3,4);



let c = {
    id: 1,
    age: 22,
    name: "srujana"
};

let d = function (x, y, z, a, b, c) {
    console.log(x + " " + y + " " + z + " " + a + " " + b + " "+c);
};

d.apply(c, ["ravi", "srujana", "teja", "sagar", "pavan","katla"]);




let e={
    id:1,
    age:22,
    name:"manasa"
}

let f=function (w,x,y,z,){
    console.log(this.name + " " + w +" " + x + " " + y + " " + z);
}

let g = f.bind(e,["mummy","daddy","bro"],["sis","frnd"],["srujana","manasa"],[12345,67891])
g()

