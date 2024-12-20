let url = 'https://ecommerce-api3.p.rapidapi.com/malefootwear';
let options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '34cc9b6d9cmsh3534ac1d5a1e268p115675jsn67ca2a8a10cb',
        'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
    }
};
var allData = []
let cardsContainer = document.getElementById("cardsContainer")
cardsContainer.style.display = "flex";
cardsContainer.style.gap = "30px"
cardsContainer.style.flexWrap = "wrap"

function displayData(b) {
    cardsContainer.textContent = ""
    b.forEach(x => {
        let card = document.createElement("div")
        card.innerHTML = `
    <img src="${x.Image}"/>
    <h2>${x.Brand}</h2>
    <span>${x.Price}</span>
    <button class="addToCart">AddToCart</button>
    <button class="buyNow">BuyNow</button>
    `

        cardsContainer.appendChild(card)
        card.querySelector(".addToCart").addEventListener("click", () => {
            addToCart(x);
        })

        card.querySelector(".buyNow").addEventListener("click", () => {
            window.location.href = "cart.html"
        })
    });
}

async function getFootWearProducts() {
    try {
        var a = await fetch(url, options)
        var b = await a.json()
        allData = b;

        searchItem(allData)
    } catch (err) {
        console.log(err);

    }
}
// getFootWearProducts()

function searchItem() {
    getFootWearProducts()
    let inputTag = document.getElementById("find").value.trim().toLowerCase();
    var filterData = allData.filter(x => x.Brand.toLowerCase().includes(inputTag));
    displayData(filterData)
}


function addToCart(item) {
    let data = JSON.parse(localStorage.getItem("items")) || []
    data.push(item)
    alert("item is added to cart")
    localStorage.setItem("items", JSON.stringify(data))
}