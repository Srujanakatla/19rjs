const a=["srujana","katla","shricky"];
console.log(a.pop());
console.log(a[a.length]);
console.log(a.length);
a[a.length]=a.pop()

//for in
var obj ={
    batch:19,
    name:"srujana",
    tech:"good",
    commu:"good",
    mocks:"done"
}
console.log(obj["name"]);

for(srujana in obj){
    console.log(obj[srujana]);
    console.log(srujana +":"+ obj[srujana]);
}

const user = {
    name: "Srujana",
    age: 21,
    city: "Warangal"
  };
  
  for (key in user) {
    console.log(key +":"+ user[key]);
    
  }
 
  let fru = ["Apple", "Banana", "Mango"];

for (index in fru) {
  console.log(index);        
  console.log(fru[index]); 
}
  
//for of
var arr=[1,2,3,4,5,"srujana",true,undefined,{id:1},[1,2,3]];

for(elem of arr){
    console.log(elem);
    
}


var b =[1,2,3,4,5]
for(i=0;i<=b.length;i++){
    console.log(b[i]);
    
}

// var str = "srujanakatla";
// for(str of names){
//     console.log(str);
// }

// let arr = ["srujana","katla",1,2,"teja"];
// for(arrs of arr){
//     console.log(arrs);  
// }


var fruits = ["Apple", "Banana", "Mango"];
for (Element of fruits) {
  console.log(Element);
}


var name = "Srujana";

for (String of name) {
  console.log(String);
}

var sr = ["srujana","katla",1,2,"ka"];
for(array of sr){
    // sr += array += " ";
    console.log(array);
    
}

var s = "";
for(var i=1;i<=20;i++){
    s += i +=  " ";
}
console.log(s);








