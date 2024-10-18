var arr = [
    {
      "id": 1,
      "title": "Laptops",
      "price": 109.95,
      "image": "https://betanews.com/wp-content/uploads/2014/11/front.jpg"
    },
    {
      "id": 2,
      "title": "Mens T-Shirts",
      "price": 22.3,
      "image": "https://ae01.alicdn.com/kf/HTB1SylbJVXXXXb7XVXXq6xXFXXXB/New-Casual-Men-Shirt-Short-Sleeve-Elastic-Slim-Fit-Black-Shirt-Men-Solid-Color-Mens-Dress.jpg"
    },
    {
      "id": 3,
      "title": "Mens Jacket",
      "price": 55.99,
      "image": "https://th.bing.com/th/id/OIP.5DaCxwWUa3xBlbNjIwl7JAAAAA?rs=1&pid=ImgDetMain"
    },
    {
        "id": 4,
        "title": "sare",
        "price": 55.99,
        "image": "https://cdn.sareeka.com/image/data2020/embroidered-silk-saree-141031.jpg"
      },
      {
        "id": 5,
        "title": "phone",
        "price": 55.99,
        "image": "https://content.propertyroom.com/listings/sellers/seller888888921/images/origimgs/888888921_6520161093496.jpg"
        
      },
      {
        "id": 5,
        "title": "watchs",
        "price": 1000.00,
        "image": "https://th.bing.com/th/id/OIP.fOi6ki8nFXpWHstrNmszlgAAAA?rs=1&pid=ImgDetMains"
       
      },
   
  ];
  
 
  var colors = ["red", "green", "blue", "pink",  "whitesmoke", "yellow", "orange"];
  
  function fun1() {
    var cardContainer = document.getElementById("id1");
  
    arr.forEach((item, i) => {
      setTimeout(() => {
        cardContainer.innerHTML += `
          <div class="card" style="background-color: ${colors[i % colors.length]};">
            <img src="${item.image}" class="card-img-top" alt="${item.title}" style="height: 300px;">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">$${item.price}</p>
              <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
          </div>
        `;
      }, i * 1000);  
    });
  }
  