let link = document.querySelectorAll("link");
let theme = document.querySelector(".theme");
let dark = `<i class="fa-regular fa-moon"></i> Dark Mode`;
let light = `<i class="fa-regular fa-sun"></i> Day Mode`;
theme.addEventListener(("click") , () => {
    if(theme.innerHTML.includes("fa-moon")){
        link[2].href = "./assests/CSS/dark.css";
        theme.innerHTML = light;
    }
    else{
        link[2].href = "./assests/CSS/main.css";
        theme.innerHTML = dark;
    }
});

let bars = document.querySelector(".bars");
let menu = document.querySelector(".nav-links");
let menu_ul = document.querySelector(".nav-links ul");
let bar = document.querySelector(("nav .row .bars i"));
bars.addEventListener("click" , ()=>{
    if(menu.style.height == 0){
        menu.style.height = "auto";
        bar.classList.replace("fa-bars" , "fa-xmark");
    }
    else{
        menu.style.height = "";
        bar.classList.replace( "fa-xmark","fa-bars" );
    }
});