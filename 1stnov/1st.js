
const products = [
    { title: "Smartphone", price: "$499", imageUrl: "https://th.bing.com/th/id/OIP.SvOHHOHbhazWOPPejadOTgHaEl?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Laptop", price: "$899", imageUrl: "https://th.bing.com/th/id/OIP.7mLHfBqN8FDPPNTnyXLH6AHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Headphones", price: "$99", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1yhlTpkCnujnhzP-xioiy9RdDQkKLMnMSg&s" },
    { title: "Smartwatch", price: "$199", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLl5jOfnfl4uhNQaC2ysyZPc17JAG-OWxRw&s" }
];

const cardContainer = document.createElement("div");
cardContainer.style.display = "flex";
cardContainer.style.gap = "20px";
cardContainer.style.flexWrap = "wrap";
cardContainer.style.padding = "20px";
document.body.appendChild(cardContainer);

products.forEach((product, index) => {
    const card = document.createElement("div");
    card.style.width = "200px";
    card.style.border = "1px solid #ddd";
    card.style.borderRadius = "5px";
    card.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.1)";
    card.style.padding = "10px";
    card.style.textAlign = "center";
    card.style.background = "linear-gradient(135deg, #f3ec78, #af4261)";
    
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    card.style.opacity = "0"; 
    card.style.animation = `fadeIn 0.5s ease ${index * 0.2}s forwards`; 
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "4px 4px 15px rgba(0, 0, 0, 0.2)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.1)";
    });

    const img = document.createElement("img");
    img.src = product.imageUrl;
    img.alt = product.title;
    img.style.width = "100%";
    img.style.height = "auto";
    img.style.borderRadius = "5px";

    const title = document.createElement("h3");
    title.textContent = product.title;
    title.style.fontSize = "18px";
    title.style.margin = "10px 0";
    // title.style.boxShadow = "2px 2px 10px red";


    const price = document.createElement("p");
    price.textContent = product.price;
    price.style.fontSize = "16px";
    price.style.color = "#333";
    price.style.margin = "5px 0";

    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.style.padding = "8px 16px";
    button.style.backgroundColor = "#007bff";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.cursor = "pointer";
    button.style.boxShadow = "2px 2px 2px pink";
    button.style.transition = "background-color 0.3s ease"; 

    
    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "#0056b3";
    });
    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "#007bff";
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(button);

    cardContainer.appendChild(card);
});
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(styleSheet);
