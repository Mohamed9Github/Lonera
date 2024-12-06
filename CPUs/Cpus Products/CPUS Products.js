// Image Slider

const Slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalid = null;

document.addEventListener("DOMContentLoaded", showSlide(slideIndex));
function showSlide(index){

    if(index >= Slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = Slides.length - 1;
    }
    Slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    Slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalid);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function addToCart(name, price){
    document.cookie = `${name}=${price}; expires=Sun, 1 January 2050 12:00:00 UTC; path=/Cart.html`;
    location.reload();
}
// Add To Cart

const AddToCartQTY = document.getElementById("QTY");