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

// Add To Cart

const AddToCartQTY = document.getElementById("QTY");

function addtocart(id , image, name, href, Desc, price,){
    setCookie(name,price,"none","\/");
    console.log("Working Perfectly!");
};

function setCookie(Name,Price,ExpireDate){

    document.cookie = `${Name}=${Price};`
}