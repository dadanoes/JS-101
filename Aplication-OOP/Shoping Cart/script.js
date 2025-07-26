class Product {
  constructor(id, name, description, price, image) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
  displayCard() {
    return `<img src="${this.image}" alt="${this.name}">
    <h3>${this.name}</h3>
    <p>${this.price.toFixed(2)}</p> 
    <p id="quantity${this.id}">Quantity: 0</p>
    <button onclick="shopingCart.viewProductDetail(${
      this.id
    })>View Details</button>
    <button onclick="shopingCart.addToCart(${
      this.id
    }, ${true})">Add to Cart</button>`;
  }
  // toFixed(2) untuk menampilkan 2 angka di belakang koma
}
class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
  increment() {
    this.quantity++;
  }
  totalPrice() {
    return this.product.price * this.quantity;
  }
}

class ShopingCart {
  constructor() {
    this.products = [];
    this.cart = [];
  }
  addProduct(product) {
    this.products.push(product);
  }
  displayProducts() {
    const productList = document.getElementById(`product-list`);
    productList.innerHTML = "";
    this.products.forEach((product) => {
      const productCard = document.createElement(`div`);
      productCard.innerHTML = product.displayCard();
      productList.appendChild(productCard);
    });
  }
}
