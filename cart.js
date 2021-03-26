let cart = [];

if (JSON.parse(localStorage.getItem("myObj"))) {
  cart = JSON.parse(localStorage.getItem("myObj"));
}

//reset card
function resetCart() {
  const listOfCart = document.getElementById("list-of-cart");
  listOfCart.innerHTML = `
        <th>Product</th>
        <th>Quantity</th>
        <th>Subtotal</th>
  `;
}

//add card
function addToCart(par) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === Number(par)) {
      cart[i].counter++;
      localStorage.setItem("myObj", JSON.stringify(cart));

      return;
    }
  }
  cart.push(daftarBuku[par]);
  cart[cart.length - 1].counter = 1;
  cart[cart.length - 1].totalPrice = daftarBuku[par].harga;

  localStorage.setItem("myObj", JSON.stringify(cart));
}
//read cart data
function readDataCart() {
  let subTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    const createElParent = document.createElement("tr");
    createElParent.innerHTML = `
       <td>
              <div class="cart-info">
                  <img src="${cart[i].cover}" />
                  <div>
                     ${cart[i].judul} <br />
                      <small>Price: Rp. ${cart[i].harga}</small>
                      <br />
                      <p id=${i} onclick="deleteCart(${i})" class="click-remove">Remove</p>
                  </div>

                  <br />
              </div>
          </td>
          <td><div class="counter-container"><div class="counter-button" onclick="editCartMinus(${i},${
      cart[i].counter
    })">-</div>
    <div class="counter-text">${cart[i].counter}</div>
    
    <div class="counter-button" onclick="editCartPlus(${i})">+</div></div></td>
          <td>Rp. ${cart[i].counter * cart[i].totalPrice}</td>
      `;
    listOfCart.appendChild(createElParent);

    subTotal += cart[i].counter * cart[i].totalPrice;
  }

  //get price
  const subTot = document.getElementById("get-subtotal");
  subTot.innerHTML = `Rp ${subTotal}`;
  const tax = document.getElementById("get-tax");
  tax.innerHTML = `Rp ${(subTotal * 0.1).toFixed()}`;
  const total = document.getElementById("get-total");
  total.innerHTML = `Rp ${(subTotal * 1.1).toFixed()}`;
}

//delete cart
function deleteCart(val) {
  resetCart();
  cart.splice(val, 1);
  localStorage.setItem("myObj", JSON.stringify(cart));
  readDataCart();
}

function editCartPlus(val) {
  resetCart();
  cart[val].counter += 1;
  localStorage.setItem("myObj", JSON.stringify(cart));
  readDataCart();
}

function editCartMinus(val, count) {
  if (count > 1) {
    resetCart();
    cart[val].counter--;
    localStorage.setItem("myObj", JSON.stringify(cart));

    readDataCart();
  }
}

const listOfCart = document.getElementById("list-of-cart");
readDataCart(cart);
