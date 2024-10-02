var a = "";
for(var i=1;i<=20;i++){
    a += i +=  " ";
}
console.log(a);


let day = parseInt(prompt("Enter a number between 1 and 7 for the day of the week:"));
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input, please enter a number between 1 and 7.");
}


let month = parseInt(prompt("Enter a number between 1 and 12 for the month:"));
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid input, please enter a number between 1 and 12.");
}


var value = parseInt(prompt("enter the number 0 to 20"))

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