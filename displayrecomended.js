function displayRecomendedBook(){
    document.getElementById("recomended-book").innerHTML = ""
    for (let i = 0; i < daftarBuku.length; i++) {
        const valBuku = daftarBuku[i];
        if(valBuku.rating === 5){
            let buku = document.createElement("div")
            buku.innerHTML = `<div class="col-2-recomend">
                        <img src="${valBuku.cover}" class="recommended-books">
                    </div>
                    <div class="col-2-recomend"">
                        <p>Exclusively Available on Bukulapak</p>
                        <h1>${valBuku.judul}</h1>
                        <br>
                        <br>
                        <small>${valBuku.deskripsi}<br><br>
                        </small>
                        <a href="" class=" btn">Buy Now &#8594;</a>
                    </div>`
            document.getElementById("recomended-book").appendChild(buku)
        }
    }
}
displayRecomendedBook()

