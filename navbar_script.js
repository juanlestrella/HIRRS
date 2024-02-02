

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav_bar");
const navList = document.querySelector(".nav_list");
const mainMenu = document.querySelectorAll(".main_menu")
const submenu = document.querySelectorAll(".submenu");

 // call the  mobileMenu when the hamburger menu is clicked
hamburger.addEventListener("click", mobileMenu);

/*
    1.) call the activate class for navBar and navList
    2.) hide the submenu so that the grid layout doesn't register all of them initially
*/
function mobileMenu() {
    navBar.classList.toggle("activate");
    navList.classList.toggle("activate");
    submenu.forEach( element => element.classList.toggle("hide"));

}