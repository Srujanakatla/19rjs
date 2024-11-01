let age = 20;
let isAdult;

if (age >= 18) {
  isAdult = true;
} else {
  isAdult = false;
}
console.log(`Is adult: ${isAdult}`); 


const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(`Sum: ${sum}`); 

const marks=150;
if(marks>100){
    console.log("Max marks are 100")
}else if(marks>=91 && marks<=100){
    console.log("A+")
}else if(marks>=70 && marks<=90){
    console.log("B")
}else if(marks>=50 && marks<=60){
    console.log("C")
}else{
    console.log("D")
}


i=10;

do{
    console.log(i);
    i--;
}while(i>=5)

for(i=9;i>=2;i--){
    console.log(i)
}
console.log("Okkk")
console.log(i)

function square(number) {
    return number * number;
  }
  
  console.log(square(5)); 

  const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); 

var a=["red","green","blue"]
a[3]=100;
a[4]=250;
a[0]="yellow";
console.log(a);

const person = {
    name: 'Alice',
    age: 28,
    greet: function() {
      return `Hello, my name is ${this.name}`;
    }
  };
  console.log(person.greet()); 

  var obj={
    id:748,
    age:22,
    job:" web Developer"
}
console.log(obj)
delete obj.id;
console.log(obj)

  var a = 100;
  a = 2000;
  a = 4574;
  console.log(a);
  