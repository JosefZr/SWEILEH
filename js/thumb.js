const menu = document.getElementById("menu");
const list = document.getElementById("list");
menu.addEventListener("click", () => {
    hundle();
});

function hundle(){
    menu.classList.toggle("is-active");
    list.classList.toggle("is-active");
}

//start galerie
