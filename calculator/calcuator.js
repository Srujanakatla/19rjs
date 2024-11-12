let p = document.getElementById("p");
function validate(a)
{
    // p.textContent = p.textContent === "0" ? a: p.textContent + a;
    p.textContent += a;
    // console.log(a);
    
}
// function validate(a) {
//     if (p.textContent === "0") {
//         p.textContent = a;
//     } else {
//         p.textContent += a;
//     }
// }

function getres()
{
    p.textContent = eval(p.textContent)
}


function clearDisplay() {
    
    p.textContent = " ";
}