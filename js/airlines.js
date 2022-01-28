// window.alert('This is just the begining...');
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// To open navigation bar in mobile mode
function openNav() {
  document.getElementById("mobile-nav").style.left = "0%"

}

function closeNav(){
  document.getElementById("mobile-nav").style.left = "-110%";
}



// Drop down for Login and Sign up buttons
let drop = document.getElementById('signIn_btn');

var styles = (getComputedStyle(document.getElementById('signIn_btn')));

function dropdown() {
  if (styles.display === "none"){
    drop.style.display = "block";
    
  }
  else{
    drop.style.display = "none";
  }

 
}

