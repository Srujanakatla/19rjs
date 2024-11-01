
document.getElementById("outer").addEventListener("click",() =>{
    console.log("Outer Div (Bubbling)");
  });
  document.getElementById("middle").addEventListener("click", ()=>{
    console.log("Middle Div (Bubbling)");
  });
  document.getElementById("inner").addEventListener("click", ()=> {
    console.log("Inner Div (Bubbling)");
  });

  document.getElementById("outer").addEventListener("click", ()=> {
    console.log("Outer Div (Capturing)");
  }, true); 
  document.getElementById("middle").addEventListener("click", ()=> {
    console.log("Middle Div (Capturing)");
  }, true);
  document.getElementById("inner").addEventListener("click", ()=> {
    console.log("Inner Div (Capturing)");
  }, true);
  