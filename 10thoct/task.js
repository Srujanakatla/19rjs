//question 1
let cartItems = ["Laptop", "Mobile", "Headphones"];
let totalAmount = 1000; 

for (let i = 0; i < cartItems.length; i++) {
    console.log(`Item ${i + 1}: ${cartItems[i]}`);
}

let confirmPurchase = confirm(`Your total is $${totalAmount}. Do you want to proceed with the purchase?`);

if (confirmPurchase) {
    console.log("Thank you for your purchase!");
} else {
    console.log("Purchase canceled.");
}

//question 2
let plan = prompt("Select a subscription plan:\n1. Basic\n2. Standard\n3. Premium");

switch (plan) {
    case "1":
        console.log("You have selected the Basic Plan. Cost: $5/month.");
        break;
    case "2":
        console.log("You have selected the Standard Plan. Cost: $10/month.");
        break;
    case "3":
        console.log("You have selected the Premium Plan. Cost: $15/month.");
        break;
    default:
        console.log("Invalid selection. Please choose a valid plan.");
}

//question 3
let bookRide = prompt("Do you want to book a ride?");

if (bookRide) {
    setTimeout(function() {
        console.log("Your ride has been successfully booked! Driver will arrive shortly.");
    }, 3000); 
} else {
    console.log("Ride booking canceled.");
}

//question 4
let rating = prompt("Rate this product (1-5):");
rating = parseInt(rating);

if (rating >= 1 && rating <= 5) {
    for (let i = 1; i <= rating; i++) {
        console.log(`Thank you! You rated ${i} stars.`);
    }
} else {
    console.log("Invalid rating. Please provide a rating between 1 and 5.");
}

//question 5
let quality = prompt("Select video quality:\n1. 720p\n2. 1080p\n3. 4K");

switch (quality) {
    case "1":
        console.log("You selected 720p quality.");
        break;
    case "2":
        console.log("You selected 1080p quality.");
        break;
    case "3":
        console.log("You selected 4K quality.");
        break;
    default:
        console.log("Invalid selection. Please choose a valid video quality.");
}

//question 6
let confirmLogout = confirm("Are you sure you want to log out?");

if (confirmLogout) {
    setTimeout(function() {
        console.log("You have been logged out. Redirecting to the login page...");
    }, 2000); 
} else {
    console.log("You are still logged in.");
}
