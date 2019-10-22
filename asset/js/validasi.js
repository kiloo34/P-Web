function validateForm() {
    var x = document.forms["form"]["username"].value;
    var y = document.forms["form"]["password"].value;

    if (x == "") {
        alert("Username Kosong Bos Mohon diisi");
        return false;
    }

    if (x.length < 6) {
        alert("Username Harus Lebih dari 6 karakter");
        return false;
    }

    if (y == "") {
        alert("Password Kosong Bos Mohon diisi");
        return false;
    }

    if (y.length < 6) {
        alert("Password Harus Lebih dari 6 karakter");
        return false;
    }
}

function validateFormProduk() {
    var x = document.forms["form"]["nama"].value;
    var y = document.forms["form"]["harga"].value;
    var a = document.forms["form"]["deskripsi"].value;
    var b = document.forms["form"]["sifat"].value;

    if (x == "") {
        alert("Nama Kosong Bos Mohon diisi");
        return false;
    }

    if (x.length < 6) {
        alert("Nama Harus Lebih dari 6 karakter");
        return false;
    }

    if (y == " ") {
        alert("Harga Kosong Bos Mohon diisi");
        return false;
    }

    if (!y.match(/^\d+/)) {
        alert("Masukin yang bener, Masa harga ngga angka")
    }

    if (a == "") {
        alert("Deskripsi Kosong Bos Mohon diisi");
        return false;
    }

    if (a.length < 20) {
        alert("Deskripsi Harus Lebih dari 6 karakter");
        return false;
    }

    if (b == "") {
        alert("Sifat Kosong Bos Mohon diisi");
        return false;
    }
    if (b.length < 20) {
        alert("Sifat Harus Lebih dari 6 karakter");
        return false;
    }
}