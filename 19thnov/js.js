

    // Task :1) created promise chaining scenario where you need to enter bookmyshow app, after select date and after select theatre, after select movie and after that select seat and need to go to phone pay and after that paying money

    function bookMovie() {
      return new Promise((resolve) => {
          console.log("Entering BookMyShow app...");
          resolve();
      });
  }
  
  function selectDate() {
      return new Promise((resolve) => {
          console.log("Selecting the date...");
          resolve();
      });
  }
  
  function selectTheatre() {
      return new Promise((resolve) => {
          console.log("Selecting the theatre...");
          resolve();
      });
  }
  
  function selectMovie() {
      return new Promise((resolve) => {
          console.log("Selecting the movie...");
          resolve();
      });
  }
  
  function selectSeat() {
      return new Promise((resolve) => {
          console.log("Selecting the seat...");
          resolve();
      });
  }
  
  function payViaPhonePe() {
      return new Promise((resolve) => {
          console.log("Paying via PhonePe...");
          resolve("Payment Successful!");
      });
  }
  
  bookMovie()
      .then(selectDate)
      .then(selectTheatre)
      .then(selectMovie)
      .then(selectSeat)
      .then(payViaPhonePe)
      .then((message) => {
          console.log(message);
      })
      .catch((error) => {
          console.error("Error:", error);
      })
      .finally(() => {
          console.log("Booking process completed.");
      });

    //   // 2) promise chaining in uber booking, rider coming, reached to pick up point, pick you, 15 mins journey, drop

    //   function riderComing() {
    //     return new Promise((resolve) => {
    //         console.log("Rider is on the way...");
    //         resolve();
    //     });
    // }
    
    // function reachPickupPoint() {
    //     return new Promise((resolve) => {
    //         console.log("Rider has reached the pickup point...");
    //         resolve();
    //     });
    // }
    
    // function pickYouUp() {
    //     return new Promise((resolve) => {
    //         console.log("Rider has picked you up...");
    //         resolve();
    //     });
    // }
    
    // function journey() {
    //     return new Promise((resolve) => {
    //         console.log("15 minutes journey...");
    //         resolve();
    //     });
    // }
    
    // function dropOff() {
    //     return new Promise((resolve) => {
    //         console.log("Rider has dropped you off. Ride complete!");
    //         resolve("Thank you for riding with Uber!");
    //     });
    // }
    
    // riderComing()
    //     .then(reachPickupPoint)
    //     .then(pickYouUp)
    //     .then(journey)
    //     .then(dropOff)
    //     .then((message) => {
    //         console.log(message);
    //     })
    //     .catch((error) => {
    //         console.error("Error:", error);
    //     })
    //     .finally(() => {
    //         console.log("Uber ride process completed.");
    //     });
    
