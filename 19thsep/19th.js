var a =20;
console.log(a);

let b = 30;
console.log(b);


const c = 40;
console.log(c);

var g = 90;

{
    let d = 50;
    console.log(d);
    console.log(g);
}

{
    var e = 60;
    console.log(e);
}

{
    const f = 70;
    console.log(f);
}

let s;
s = 30;
s = 100;
s = 200;
s = 200;
console.log(s);


var x;
x = 10;
x = 20;
var x = 40;
console.log(x);

let mixedArray = [
    100,                       
    "JavaScript",             
    true,                       
    { name: "Srujana", age: 21},
    ["HTML", "CSS", "JS"]      
  ];
  
  console.log(mixedArray[3].name); 
  console.log(mixedArray[4][1]);   
  

  let person = {
    name: "manasa",
    age: 21,
    isStudent: true,
    skills: ["Python", "JavaScript", "HTML"],
    address: {
      city: "Warangal",
      country: "India"
    }
  };
  
 
  console.log(person.name); 
  console.log(person.skills); 
  console.log(person.address.city); 
  
  
  person.age = 21;
  console.log(person.age);  
  
