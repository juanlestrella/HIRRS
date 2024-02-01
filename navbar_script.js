

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav_bar");
const navList = document.querySelector(".nav_list");

// console.log(hamburger);
// if (hamburger == null){document.write("null hamburger");}
hamburger.addEventListener("click", mobileMenu);


function mobileMenu() {
    // hamburger.classList.toggle("activate");
    navBar.classList.toggle("activate");
    navList.classList.toggle("activate");
}

function printFunction(){
    document.writeln("Hello World");
}