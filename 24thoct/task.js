let cardContainer=document.createElement("div");
let image=document.createElement("img");
let title=document.createElement("h1");
let price=document.createElement("p");
let buyNowBtn=document.createElement("button");

image.setAttribute("src","https://image.shutterstock.com/image-photo/butterfly-grass-on-meadow-night-260nw-1111729556.jpg")
image.style.width="500px"
title.textContent="piece of nature"
price.textContent="Nature encompasses, including forests, oceans, mountains, rivers, plants, and animals"
buyNowBtn.innerText="Click here"

cardContainer.style.border="2px solid black";
cardContainer.style.borderRadius="15px";
cardContainer.style.padding="30px";
cardContainer.style.margin="10px";
cardContainer.style.boxshadow=" 4px 4px 8px pink";
cardContainer.style.display="inline-block"
cardContainer.style.background="linear-gradient(lightgreen,yellow,pink,blue)";
cardContainer.append(image,title,price,buyNowBtn)
document.body.appendChild(cardContainer)