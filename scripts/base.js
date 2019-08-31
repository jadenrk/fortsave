// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

// Get the navbar
var nav = document.getElementById("nav");
var navBottom = document.getElementById("navBottom");
var title = document.getElementById("title");
var logo = document.getElementById("logo");

// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
        navBottom.classList.add("sticky");
        logo.classList.add("sticky");
        logo.src="img/TinyLogo.png";
        title.innerHTML = "&nbsp;";
    } else {
        nav.classList.remove("sticky");
        navBottom.classList.remove("sticky");
        logo.classList.remove("sticky");
        logo.src="img/tinyTextLogo.png";
        title.innerHTML = "FORT " +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        "SAVE&nbsp;";
    }
}