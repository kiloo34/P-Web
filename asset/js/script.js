window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "navbar" + " scrolled";
    } else {
        navbar.className = navbar.className.replace("scrolled", "");
    }
}