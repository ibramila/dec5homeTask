const btn1 = document.querySelector(".btn1")
const modal = document.querySelector(".modal")
const cancelbtn = document.querySelector(".modal__close");
const btn2 = document.querySelector(".btn2");
const tabss = document.querySelectorAll(".tabheader__item");
const tabcontent = document.querySelectorAll(".tabcontent");



btn1.addEventListener("click", func1 => {
    modal.style.display = "block";
})
cancelbtn.addEventListener("click", func2 => {
    modal.style.display = "none";
})

btn2.addEventListener("click", func3 => {
    modal.style.display = "block";
})


tabss.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabcontent.forEach((content) => {
            content.classList.remove("tabcontent__active");
        });
        tabss.forEach((tab) => {
            tab.classList.remove("tabheader__item_active");
        });
        tabcontent[index].classList.add("tabcontent__active");
        tabss[index].classList.add("tabheader__item_active");
    });
});



const prev = document.querySelector(".offer__slider-prev")
const next = document.querySelector(".offer__slider-next")
var current = document.querySelector("#current");
count = 1;

prev.addEventListener("click", prevNumber);
next.addEventListener("click", nextNumber);

function prevNumber() {
    if (count == 1) {
        count = 8;
        current.innerText = count;
    }
    else {
        count--;
        current.innerText = count;
    }
}
function nextNumber() {
    if (count == 8) {
        count = 1;
        current.innerText = count;
    }
    else {
        count++;
        current.innerText = count;
    }
}

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function minusSlides(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("offer__slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

