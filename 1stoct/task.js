// var day = parseInt(prompt("enter the number between 1 to 7 of the week"));
var day = 7;
switch (day) {
    case 1:
        console.log("monday");
        
        break;
        case 2:
            console.log("tuesday");
            
            break;
        case 3:
            console.log("wednesday");
            
            break;
            case 4:
            console.log("thursday");
            
            break;
            case 5:
            console.log("friday");
            
            break;
            case 6:
            console.log("saturday");
            
            break;
            case 7:
            console.log("sunday");
            
            break;
    default:
        console.log("invaild number, please enter a number between 1 to 7");
        
        break;
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

var i = 1;
while(i<=10)
{
    if(i%2==0){
        console.log(i);
        
    }
    i++;
}

var countdowm = 10;
while(countdowm>=0){
    console.log(countdowm);
    countdowm--;
}




