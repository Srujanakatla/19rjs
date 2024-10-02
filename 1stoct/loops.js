//for loop
for(var a=5; a>=1; a--)
{
    if(a%2==0){
      console.log(a+"even number");
    }
    else{
        console.log(a+"odd number");
        
    }
}

//while loop
var b = 3;
while(b>=1){
  b--
  console.log(b);
}
console.log("welcome");

var c = 1;
while(c<=3){
  console.log("this attempt is  "+c);
  c++
}
console.log("wait for 30 secs "+c);

//for loop
for (var s=1;s<=5;s++){
  console.log(s);
  
}

// var d = 5;
// while(d>=1){
//   console.log(d);
//   d++
// }
// console.log("srujana");

var s = "stu"
switch (s) {
  case "emp":
    console.log("emp work in office");
    break;
  case "stu":
    console.log("learn more");
    break;
  case "child":
    console.log("go to school");
    break;
  default:
    console.log("hi");
}


var daynumber = 3; 
switch (daynumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
}


var monthNumber = 2; 
switch (monthNumber) {
    case 1:
        console.log("January has 31 days.");
        break;
    case 2:
        console.log("February has 28 days (29 in a leap year).");
        break;
    case 3:
        console.log("March has 31 days.");
        break;
    case 4:
        console.log("April has 30 days.");
        break;
    case 5:
        console.log("May has 31 days.");
        break;
    case 6:
        console.log("June has 30 days.");
        break;
    case 7:
        console.log("July has 31 days.");
        break;
    case 8:
        console.log("August has 31 days.");
        break;
    case 9:
        console.log("September has 30 days.");
        break;
    case 10:
        console.log("October has 31 days.");
        break;
    case 11:
        console.log("November has 30 days.");
        break;
    case 12:
        console.log("December has 31 days.");
        break;
    default:
        console.log("Invalid month number");
}

var value = 15;

switch (true) {
  case (value > 0 && value <= 10):
    console.log("Value is between 1 and 10");
    break;
  case (value > 10 && value <= 20):
    console.log("Value is between 11 and 20");
    break;
  case (value > 20):
    console.log("Value is greater than 20");
    break;
  default:
    console.log("Value is 0 or negative");
}


