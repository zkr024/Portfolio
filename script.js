const menu = document.querySelector(".menu");
const close_button = document.querySelector(".close_button");
const close_menu = document.querySelector(".close_port");
const close_menu_two = document.querySelector(".close_about");
const close_menu_three = document.querySelector(".close_contact");
const burger_menu = document.querySelector(".burger_menu");

menu.addEventListener("click", () => {
    burger_menu.classList.toggle("menu_active");    
})

close_button.addEventListener("click", () => {
    burger_menu.classList.toggle("menu_active");    
})

close_menu.addEventListener("click", () => {
    burger_menu.classList.toggle("menu_active");    
})

close_menu_two.addEventListener("click", () => {
    burger_menu.classList.toggle("menu_active");    
})

close_menu_three.addEventListener("click", () => {
    burger_menu.classList.toggle("menu_active");    
})