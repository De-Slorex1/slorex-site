window.addEventListener("scroll", () => {
    let container = document.querySelector(".container");
    let containerPosition = container.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(containerPosition < screenPosition){
        container.classList.add("background");
    }
    else{
        container.classList.remove("background");
    }
});

var noti = document.getElementById("num");
    var select = document.querySelector(".select");
    var button = document.querySelectorAll("#button");

    for(but of button){
    but.addEventListener('click', (e)=>{
        var add = Number(noti.getAttribute('data-count')|| 0);
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero');
    })
}

var cart = document.querySelector(".cart");
    cart.addEventListener("click", () => {
        cart.classList.add("carted");
})

var toggleBtn = document.querySelector(".toggle");
var nav = document.querySelector(".nav");

toggleBtn.addEventListener("click", () =>{
    if(toggleBtn.lastElementChild.classList.contains("fa-bars")){
        toggleBtn.lastElementChild.classList.replace("fa-bars", "fa-times");
    }
    else{
        toggleBtn.lastElementChild.classList.replace("fa-times", "fa-bars");
    }
    nav.classList.toggle("showsidebar");
})


const btnContainer = document.getElementById("navbar");
const links = btnContainer.getElementsByClassName("links");

for(var i=0; i<links.length; i++){
    links[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active");
        this.className += "active";
    })
}