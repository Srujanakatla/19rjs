let a = [10,20,30,40]
let b = a.every(srujana=>srujana>3);
console.log(b);

// let p =[
//     {id:1,
// name:"srujana",
// batch:cse,
// },
// {
//     id:54,
// name:"sruja",
// batch:ce,
// }]
// let res=p.every(sru=>sru.batch)
// console.log(res);

let p = [
    {
        id: 1,
        name: "srujana",
        batch: "cse",
    },
    {
        id: 54,
        name: "sruja",
        batch: "ce",
    }
];

let res = p.every(sru => sru.batch);  
console.log(res); 

var fill = [2024,2024]
var fills = 2025;
let result = fill.fill(fills)
console.log(res);


var filter = ["apple","banana","mango"]
var fil = filter.filter(srujana=>srujana.length>5)
console.log(fil);

let find = [10,20,30,40]
let finds= find.find(srujana=>srujana>=30)
console.log(finds);

const flat = [1,2,[1,2,3,4["srujana"["katla"]]],5,7]
const flats = flat.flat(Infinity)
console.log(flats);

var i = ["srujana","manasa","katla"]
var j = a.includes("manasa")
console.log(j);

var map = [1,2,3,4,5]
var maps = map.map(num=>num*2)
console.log(maps);


var sort = [4,5,9,3,2]
let sorts = sort.sort()
console.log(sorts);






