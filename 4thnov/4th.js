let a = 5.5;
let b = 7.4;
let c = 1.0;
console.log("mathround:",Math.round(a));
console.log("mathround:",Math.round(b));
console.log("mathround:",Math.round(c));


//mathceil
let a1 = 7.9;
let a2 = -3.3;
let a3 = -2.0;
let a4 = 10.789;
let a5 = 8.1;
console.log("mathceil:",Math.ceil(a1));
console.log("mathceil:",Math.ceil(a2));
console.log("mathceil:",Math.ceil(a3));
console.log("mathceil:",Math.ceil(a4));
console.log("mathceil:",Math.ceil(a5));

//mathfloor
let b1 = -7.9;
let b2 = 6.4;
let b3 = -10.8394;
let b4 = -0.78;
console.log("mathfloor:",Math.floor(b1));
console.log("mathfloor:",Math.floor(b2));
console.log("mathfloor:",Math.floor(b3));
console.log("mathfloor:",Math.floor(b4));

//mathtrunc
let c1 = 10.99;
let c2 = -0.8372;
let c3 = 9.28749;
let c4 = -2.134;
let c5 = 3.567;
console.log("mathtrunc:",Math.trunc(c1));
console.log("mathtrunc:",Math.trunc(c2));
console.log("mathtrunc:",Math.trunc(c3));
console.log("mathtrunc:",Math.trunc(c4));
console.log("mathtrunc:",Math.trunc(c5));

//mathpow
let d1 = 75.909328;
let d2 = 2.437;
let d3  = 3.98;
let d4 = 10.123;
let d5 = -5.56;
console.log("mathpow:",Math.pow(d1,d2));
console.log("mathpow:",Math.pow(d1,d3));
console.log("mathpow:",Math.pow(d1,d4));
console.log("mathpow:",Math.pow(d2,d3));
console.log("mathpow:",Math.pow(d3,d5));
console.log("mathpow:",Math.pow(d4,d5));
console.log("mathpow:",Math.pow(2,6));

//mathmin and max
let e1 = Math.min(2,4,5,1,8)
console.log("mathmin:",e1);

let e2 = Math.min(3,5,-10,7)
console.log("mathmin:",e2);

let e3 = Math.max(9,10,23,36,2478,-3687);
console.log("mathmax;",e3);

//mathabs
var f = -2000;
var g = 1000;
console.log("mathabs:",Math.abs(f));
console.log("mathabs:",Math.abs(g));

//mathrandom
console.log(Math.random()*100);


var x = [1,2,3,4,5]
var z = [...x,"srujana","katla"]
var v = [...x,...z,"manasa","spread"]
console.log(v);

// var y = {
//     id : 1,
//     name : "srujana"
// },
// var x1 = {
//     ...y
//     // id2 : 2,
//     phn : "katla"
// }
// console.log(x1);


var y = {
    id: 1,
    name: "srujana"
};

var x1 = {
    ...y,
    id2: 2,
    name : "katla", 
    phn: 13232444
};
var x2 = {
    ...y,
    ...x1,
    id3 : 3,
    name : "shricky",
    phn : 2343466
};

console.log("spread operator:",x2);

// a();
// function a()
// {
//     console.log("hello");
    
// }

a7();

function a7() {
    console.log("hello");
}

const a8 =()=>console.log("hi");
a8()

function a9(x, y, ...z) {
    const sum = z.reduce((a, b) => a + b, 0);
    console.log(x + y + sum);
}
a9(1, 2, 3, 4, 5, 6, 7);

function a6(x, y, ...z) {
    let sums = x + y;
    for (let num of z) {
        sums += num;
    }
    console.log(sums);
}
a6(1, 2, 3, 4);

