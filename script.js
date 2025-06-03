const products = [
    {id:1,name:"wireless headphones", price:2000, image:"images/headphones.jpeg"},
    {id:2,name:"iphone 16 pro max", price:150000,image:"images/iphone.jpeg"},
    {id:3,name:"iwatch",price:89000, image:"images/iwatch.jpg"},
    {id:4,name:"speaker",price:10000, image:"images/speaker.jpeg"},
    {id:5,name:"macbook Air",price:349999, image:"images/macbookcopy.jpeg"},
];

// let cart = JSON.parse(localStorage.getItem("cart"))||[];


// function renderProducts() {
//     const list = document.getElementById("product-list");
//     products.forEach(product => {
//         const div = document.createElement("div");
//         div.className = "product";
//         div.innerHTML = `
//         <img src = "${product.image}" alt = "${product.name}">
//             <h3>${product.name}</h3>
//             <p>${product.price}</p>
//             <button onclick = "addTocart(${product.id})">add to cart</button>
//             ` ;
//             list.appendChild(div);
//         });
// }

// function addToCart(id){
//     const product = products.find(p => p.id === id);
//     cart.push(product);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
// }

// function updateCartCount(){
//     document.getElementById("cart-count").textContent = cart.length;
// }

// renderProducts();
// updateCartCount();

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
  const list = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}"/>
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    list.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

renderProducts();
updateCartCount();
