var a = {
    name :"srujana",
    age : 21,
}
a.sal = 35000;
console.log(a);

var b = new Object
    b.name = "srujana"
    b.age = 21
    b.sal = 500000
    console.log(b);
    

var name = "srujana"
var branch = "cse"
var number = 12345678;
var age = 20;
var manasa = {name, branch , number, age};
console.log(manasa);

var c = {
    name : "srujana",
    mocks :  "90%",
    tasks : "100%",
    sem : "80%"
}
console.log(Object.values(c));
console.log(Object.values(c));

console.log(Object.keys(c));
console.log(Object.entries(c));
console.log(c.name);
console.log(c);
// Object.freeze(c);
// Object.seal(c);
Object.preventExtensions(c);
c.pro = "99%"
c.sem = "100%"
console.log(Object.isFrozen(c));
console.log(Object.isSealed(c));
// object.preventExtensions(c);
console.log(Object.isExtensible(c));

//freeze
var d ={
    name : "srujana",
    age :21,
    place : "wgl",
}
console.log(d);
Object.freeze(d);
branch: "cse",
console.log("freeze:",Object.isFrozen(d));

//seal
var e ={
    name:"srujana",
    loc:"wgl",
    clg : "jntuhcej",
}
console.log(e);
Object.seal(e);
branch:"cse",
console.log("seal:",Object.isSealed(e));

//preventExtensions
var f ={
    name : "srujana",
    phno: 1234567,
    loc: "knr",
    pinno: 506330,

}
console.log(f);
Object.preventExtensions(f);
branch="IT",
clg="jntuhcej",
console.log("prevent:",Object.isExtensible);

//assign
const t = { 
    a: 1,
 b: "srujana"
};
const s = {
     b: 2,
     c: "katla"
     };
const result = Object.assign(t, s);
console.log("assign:",result);

//create
var create = {
    name : "srujana",
    age : 21,
    clg : "jntuhcej"
}
var x = Object.create(create);
branch= "cse";
phno = 123456;
console.log("create:",x);

var animal = {
    eats: "grass"
  };
  var dog = Object.create(animal);
 dog.barks = "abc";
  dog.age = 3;
  console.log("create:",dog);  
  console.log("create:",dog.barks); 
  
//getownpropertyname
var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: "srujana",
    e: "cse"
  };
  var properties = Object.getOwnPropertyNames(obj);
  console.log("getOwnPropertyNames:",properties); 

  //hasownpropertyname
  var obj2 = {
    name: "srujana",
    age : 21,
    a : "abc",
    b : "xyz"
  }
var results = Object.hasOwnProperty(obj2);
console.log("hasOwnProperty:",results);

// delete;
  var obj1 = {
    name:"srujana",
    loc:"hyd",
    phno:12345677
  }
  console.log(obj1);
  delete obj1.loc;
  console.log("delete:",obj1);
  













