// String
let name = "Srujana";
console.log("Name (String): " + name);

// Number
let age = 22;
console.log("Age (Number): " + age);

// Boolean
let Student = true;
console.log("Student (Boolean): " + Student);

let Students = false;
console.log("Student (Boolean): " + Students);

// Undefined
let job;
console.log("Job: " + job);

// Null
let car = null;
console.log("Car: " + car);

// Array
let hobbies = ["Dancing", "Coding", "Listening to Music"];
console.log("Hobbies: " + hobbies);

// Object
let person = {
    firstName: "Katla",
    lastName: "Srujana",
    city: "Warangal"
   
};
console.log("Person: " + person.firstName + " " + person.lastName + " from " + person.city);

// Example of reassignment
name = "srujana katla yadav";
console.log("Updated Name : " + name);


// Object with an array inside
let persons = {
    firstName: "Katla",
    lastName: "Srujana",
    age: 22,
    
    hobbies: ["Dancing", "Coding", "Listening to Music"], 
    address: {
        city: "Warangal",
        country: "India",
        state: "Telangana",
    }

};


console.log("First Name: " + persons.firstName);
console.log("Last Name: " + persons.lastName);
console.log("Age: " + persons.age);


// console.log("Hobbies: " + persons.hobbies.join(", "));


console.log("First Hobby: " + persons.hobbies[0]); 
console.log("Second Hobby: " + persons.hobbies[1]); 


console.log("City: " + persons.address.city);
console.log("Country: " + persons.address.country);
console.log("state: " +persons.address.state);

var dad ={
    name:"katla ilaiah",
    age:45,
    occ:"driver",
}
console.log(dad);

var mom =
   { name:"parameshwari",
    age:40,
    occ:"housewife",
    
}

console.log(mom);

var about={
   name:"srujana",
   age:22,
   edu:"btech",

}
console.log(about);

var bro={
    name:"vidya sagar",
    age:20,
    edu:"btech",
}
console.log(bro);

// var info=[1, srujana, jntuhcej, btech, true,{id:1, name:"manasa"},[1,2,3]]
// console.log(info.length)