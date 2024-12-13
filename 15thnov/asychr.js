console.log("hello everyone");
setTimeout(()=>{
    console.log("this is srujana");
    
},10000);

setTimeout(()=>{
    console.log("javascript");
    
},5000);

setTimeout(()=>
{
    console.log("html css");
    
},500);
console.log("full stack");


function a(x,y)
{
    setTimeout(()=>
    {
        console.log(x);
        
    },y);
    a("after the ,",2000);
}

for(let a = 0; a <= 5; a++)
{
    setTimeout(()=>{
        console.log(a);
        
    },a*2000)
}

//setTimeOut example
console.log("Starting...");

setTimeout(() => {
  console.log("This message is delayed by 3 seconds.");
}, 3000);

console.log("Ending...");
//Multiple setTimeout Calls
setTimeout(() => {
  console.log("Timer 1: Executes after 1 second");
}, 1000);

setTimeout(() => {
  console.log("Timer 2: Executes after 3 seconds");
}, 3000);

setTimeout(() => {
  console.log("Timer 3: Executes after 5 seconds");
}, 5000);

console.log("All timers are set");
//Sequential Nested setTimeouts
console.log("Sequence started");

setTimeout(() => {
  console.log("Message 1: Delayed by 1 second");

  setTimeout(() => {
    console.log("Message 2: Delayed by an additional 2 seconds");

    setTimeout(() => {
      console.log("Message 3: Delayed by an additional 3 seconds");
    }, 3000);
  }, 2000);
}, 1000);
//Chaining Sequential setTimeouts
function delayedLog(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

console.log("Chaining sequence started");

delayedLog("Message after 1 second", 1000);
delayedLog("Message after 3 seconds", 3000);
delayedLog("Message after 6 seconds", 6000);
