function add(a,b)
{
    return a+b;
}
function  sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    if(a == 0){
        return "cannot zero";
    }
    return a/b;
}
console.log(add(5,6));
console.log(sub(5,6));
console.log(mul(5,6));
console.log(div(5,6));

