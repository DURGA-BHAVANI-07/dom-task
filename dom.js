const card = document.createElement("div");

card.style.border = "1px solid #ddd";
card.style.padding = "16px";
card.style.width = "200px";
card.style.textAlign = "center";
card.style.boxShadow = "2px 2px 8px rgba(0, 0, 0, 0.1)";
card.style.margin = "10px auto";

const img = document.createElement('img');
img.setAttribute("src",`https://i.pinimg.com/236x/35/63/08/3563080daee8d66b4a86d38470e57f54.jpg`); // Set your image URL here
img.setAttribute('alt', 'Product Image');
img.style.width = "100%";
img.style.height = "auto";
img.style.marginBottom = "10px";

const productName = document.createElement("p");
productName.textContent = "Jeens And Tshirt";
productName.style.fontSize = "18px";
productName.style.margin = "10px 0";

const price = document.createElement("span");
price.textContent = "$49.99";
price.style.color = "green";
price.style.fontSize = "16px";

card.appendChild(img);
card.appendChild(productName);
card.appendChild(price);

document.getElementById("card-container").appendChild(card);