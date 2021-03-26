function ShowListBuku(arrBuku) {
  document.getElementById("boxBuku").innerHTML = "";

  for (let i = 0; i < arrBuku.length; i++) {
    const valBuku = arrBuku[i];
    let buku = document.createElement("div");
    buku.setAttribute("class", "col-4");
    buku.innerHTML = `<img src="${valBuku.cover}">
        <h4 class="judul">${valBuku.judul}</h4>
        <div class="rating">
                 <p>Rating: ${valBuku.rating} of 5</p>
        </div>
        <p class="money">Rp. ${moneyFormatter(valBuku.harga)}</p>
           <div onclick="addToCart(${i})" class="cart-button"> Add To Cart</div>
        `;
    document.getElementById("boxBuku").appendChild(buku);

    /* document.getElementById('content').appendChild(boxBuku)
        let judul = document.createElement("h1")
        judul.innerHTML = valBuku.judul;
        document.getElementsByClassName("buku")[i].appendChild(judul)
        let cover = document.createElement("img")
        cover.setAttribute("src", `${valBuku.cover}`)
        document.getElementsByClassName("buku")[i].appendChild(cover)
        let kategori = document.createElement("h4")
        kategori.innerHTML = `Kategori : ${valBuku.kategori}`
        document.getElementsByClassName("buku")[i].appendChild(kategori)
        let harga = document.createElement("h4")
        harga.innerHTML = `harga : ${valBuku.harga}`
        document.getElementsByClassName("buku")[i].appendChild(harga) 
        let stok = document.createElement("h4")
        stok.innerHTML = `stok : ${valBuku.stok}`
        document.getElementsByClassName("buku")[i].appendChild(stok)  */
  }
}

function moneyFormatter(number) {
  // write your code
  let moneyStr = number.toString();
  let counter = 0;
  let result = "";
  for (let i = moneyStr.length - 1; i >= 0; i--) {
    const char = moneyStr[i];
    counter++;
    result = char + result;
    if (counter === 3 && i !== 0) {
      result = "." + result;
      counter = 0;
    }
  }
  return result;
}

ShowListBuku(daftarBuku);

function resetProduct() {
  const listOfProduct = document.getElementById("boxBuku");
  listOfProduct.innerHTML = "";
}
const eventTarget = document.getElementById("input-data");

let result = [];
eventTarget.addEventListener("keyup", (event) => {
  result2 = event.target.value;
  let result = [];
  for (let i = 0; i < daftarBuku.length; i++) {
    const data = document.getElementById("book-select").value;

    if (data === "maxHarga" || data === "minHarga" || data === "stok") {
      if (data === "maxHarga") {
        if (result2 === "" || daftarBuku[i].harga <= Number(result2)) {
          result.push(daftarBuku[i]);
        }
      } else if (data === "minHarga") {
        if (result2 === "" || daftarBuku[i].harga >= Number(result2)) {
          result.push(daftarBuku[i]);
        }
      } else if (data === "stok") {
        if (daftarBuku[i][data] >= Number(result2)) {
          result.push(daftarBuku[i]);
        }
      }
    } else {
      if (daftarBuku[i][data].toLowerCase().includes(result2.toLowerCase())) {
        result.push(daftarBuku[i]);
      }
    }
  }
  resetProduct();
  ShowListBuku(result);
});
