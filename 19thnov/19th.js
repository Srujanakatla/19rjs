// 2) promise chaining in uber booking, rider coming, reached to pick up point, pick you, 15 mins journey, drop

function riderComing() {
    return new Promise((resolve) => {
        console.log("Rider is on the way...");
        resolve();
    });
}

function reachPickupPoint() {
    return new Promise((resolve) => {
        console.log("Rider has reached the pickup point...");
        resolve();
    });
}

function pickYouUp() {
    return new Promise((resolve) => {
        console.log("Rider has picked you up...");
        resolve();
    });
}

function journey() {
    return new Promise((resolve) => {
        console.log("15 minutes journey...");
        resolve();
    });
}

function dropOff() {
    return new Promise((resolve) => {
        console.log("Rider has dropped you off. Ride complete!");
        resolve("Thank you for riding with Uber!");
    });
}

// Promise chaining
riderComing()
    .then(reachPickupPoint)
    .then(pickYouUp)
    .then(journey)
    .then(dropOff)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Uber ride process completed.");
    });
