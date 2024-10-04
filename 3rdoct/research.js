//for loops
var no = [1,2,3,4,5];
var sum = 0;
for(var i=0;i<no.length;i++){
    sum+=no[i]
}
console.log(sum);

//conditional statement
var num = 5;
if(num>0){
    console.log("the number is positive");  
}
else if (num < 0){
    console.log("the number is negative");
    
}
else{
    console.log("the number is zero");  
}

var number = 4;
if(number % 2== 0){
    console.log("even");  
}
else{
    console.log("odd");
    
}

//while
var n = 10;
var sum = 0;
var a = 1;
while(a<=n){
    sum += a;
    a++;
}
console.log(sum);


//switch
var dashboard = (prompt("enter the what u want"));
switch(dashboard){
    case "home":
        console.log("open the home in 10k coder");break;
    case "classes":
        console.log("open the classes");break;
    case "assignments":
        console.log("assignment are assign");break;       
    case "projects":
        console.log("do the projects");break;
    case "feedaback":
        console.log("students review");break;
    default:
        console.log("invaild enter please enter below that");
                  
}