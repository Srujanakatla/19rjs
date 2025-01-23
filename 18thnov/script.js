// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();  
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// function greetUser() {
//     greet("Srujana", sayGoodbye);  
// }


// function showContext() {
//     console.log(this);  
// }

// const person = {
//     name: "Srujana",
//     greet: function() {
//         console.log("Hello, " + this.name);  
//     }
// };


function fetchData() {
    return new Promise((resolve, reject) => {
        let success = true;  
        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Data fetch failed.");
            }
        }, 2000);
    });
}

function handlePromise() {
    fetchData()
        .then(result => {
            console.log(result);  
        })
        .catch(error => {
            console.log(error);  
        });
}
