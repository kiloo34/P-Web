function modalShow() {
    $("#id_modal").show();
    $("#id_modal").css('animation-name', 'show_modal');
    // $(".modal-content:first").css('animation-name', 'show_modal');
}

function modalHide() {
    // $(".modal-content:first").css('animation-name', 'hide_modal');
    $("#id_modal").css('animation-name', 'hide_modal');
    setTimeout(function function_name() {
        $("#id_modal").hide();
    }, 300);
}

function show_error(pesan) {
    $("#error_modal").find('b').html(pesan);
    $("#error_modal").show();
    $("#error_modal").css('animation-name', 'show_modal');

    $("#close_error_form").click(function (event) {
        // $("#error_modal").hide();
        $("#error_modal").css('animation-name', 'hide_modal');
        setTimeout(function function_name() {
            $("#error_modal").hide();
        }, 300);
    });

    window.onclick = function (event) {
        var modal = document.getElementById('error_modal');
        if (event.target == modal) {
            $("#error_modal").css('animation-name', 'hide_modal');
            setTimeout(function function_name() {
                $("#error_modal").hide();
            }, 300);
        }
    };
}

$.fn.validateEmpty = function () {
    var form = this;

    form.on('submit', function (event) {
        event.preventDefault();
        var inputan = form.find("input,select");
        // console.log(inputan);
        var kosong = false;
        inputan.each(function (index, el) {
            if ($(el).val() == "") {
                kosong = true;
            }
        });

        if (kosong) {
            show_error("Harap lengkapi data isian");
        } else {
            form.off('submit').trigger('submit');
        }
    });
}

$(function () {
    var imagesPreview = function (input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function (event) {
                    $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(
                        placeToInsertImagePreview);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#gallery-photo-add').on('change', function () {
        imagesPreview(this, 'div.gallery');
    });
});

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