const a = {
    id:1,
    name:"srujana"
}
const b = JSON.stringify(a)
console.log(b);
console.log(JSON.parse(b));

const person = {
    firstName: "katla",
    lastName: "srujana",
  };
  
  function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
  }
  greet.call(person, "Hello", "!");
  

  const person1 = {
    firstName: "shricky",
    lastName: "katla",
  };
  
  function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
  }
  greet.apply(person1, ["Hi", "!!!"]);
  

  const person2 = {
    firstName: "hello",
    lastName: "frnds",
  };
  
  function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
  }
  const greetAlice = greet.bind(person2);
  greetAlice("Hey", "!");
  
  let c={
    name:"srujana",
    age:21,
}

let d={
    name:"katla",
    age:22,
}
function details(greet,exc){
    console.log(`${greet} ${this.name} and ${this.age} ${exc}`);
    
}
details.call(c,"hello","!")
details.call(d,"hello","!")


let e={
    name:"srujana",
    age:30,
}

let f={
    name:"srujana",
    age:26,
}
function details(greet,exc){
    console.log(`${greet} ${this.name} and ${this.age} ${exc}`);  
}
details.apply(e,["hello","!"])
details.apply(f,["hello","!"])


function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2); 
console.log(double(5)); 

const triple = multiply.bind(null, 3); 
console.log(triple(5)); 
