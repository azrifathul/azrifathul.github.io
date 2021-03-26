function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function addCatalog(){
    let judul = document.getElementById("judul").value;
    let deskripsi = document.getElementById("deskripsi").value;
    let cover = document.getElementById("cover").value;
    let harga = Number(document.getElementById("harga").value);
    let stok = document.getElementById("stok").value;
    let rating = document.getElementById("rating").value;
    let id = daftarBuku.length;

    let objBuku = {
        id: id,
        judul: judul,
        deskripsi: deskripsi,
        kategori: 'Hukum',
        cover: cover,
        harga: harga,
        stok: stok,
        rating: rating
    }
    daftarBuku.push(objBuku);
    ShowListBuku(daftarBuku);
    displayRecomendedBook();
    console.log(judul);
}