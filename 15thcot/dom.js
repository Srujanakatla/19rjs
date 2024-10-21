let hello=document.getElementById("name");
hello.innerHTML="name hello this is srujana"
console.log(hello.innerHTML);

let age = document.getElementById("age");
age.innerHTML="age:my age is 21<h1>modify the age</h1>"
console.log(age.innerHTML);


let education=document.getElementById("education")
education.innerHTML = "edu:btech";
console.log(education.innerHTML);


let salary = document.getElementById("salary");
salary.innerHTML = "salary:0";
console.log(salary.innerHTML);


// function srujana() {
//     setTimeout(function() {
//         let contentDiv = document.getElementById("content");
//         contentDiv.innerHTML = ` <h1>srujana</h1><img id="image" src="https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg" width="250"><button>click</button>`;
//         // contentDiv.style.backgroundColor = "blue";
//         contentDiv.style.borderRadius = "50%";
//         contentDiv.style.transition = "1s ease-in 3s";
    
//         let image = document.getElementById("image");
//         image.style.borderRadius = "50%";  
//         image.style.transition = "1s ease-in 3s";  
//         image.style.opacity = "0.5"; 
//         contentDiv.style.Color = "blue"; 
//     },2000);
// }


function srujana() {
    setTimeout(function() {
        let contentDiv = document.getElementById("content");
        contentDiv.innerHTML = `<h1>srujana</h1><img id="image" src="https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg" width="250"><button>click</button>`;
        contentDiv.style.color = "blue";  
        contentDiv.style.transition = "1s ease-in 3s";  
        let image = document.getElementById("image");
        image.style.transition = "all 5s ease";  
        // image.style.opacity = "1";  
        
        setTimeout(() => {
            image.style.borderRadius = "50%";  
            image.style.opacity = "0.5";  
        }, 100);  
    }, 2000); 
}

