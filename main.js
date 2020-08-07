// const gap = 16;

// const carousel = document.getElementById("carousel"),
// 	content = document.getElementById("content"),
// 	next = document.getElementById("next"),
// 	prev = document.getElementById("prev");

// next.addEventListener("click", (e) => {
// 	carousel.scrollBy(width + gap, 0);
// 	if (carousel.scrollWidth !== 0) {
// 		prev.style.display = "flex";
// 	}
// 	if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
// 		next.style.display = "none";
// 	}
// });
// prev.addEventListener("click", (e) => {
// 	carousel.scrollBy(-(width + gap), 0);
// 	if (carousel.scrollLeft - width - gap <= 0) {
// 		prev.style.display = "none";
// 	}
// 	if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
// 		next.style.display = "flex";
// 	}
// });
const gap = 50;
const carouselRowOne = document.getElementById("carousel-row-1"),
	carouselRowTwo = document.getElementById("carousel-row-2"),
	contentOne = document.getElementById("content-1"),
	contentTwo = document.getElementById("content-2"),
	nextOne = document.getElementById("next-1"),
	prevOne = document.getElementById("prev-1"),
	nextTwo = document.getElementById("next-2"),
	prevTwo = document.getElementById("prev-2");

nextOne.addEventListener("click", (e) => {
	carouselRowOne.scrollBy(width + gap, 0);
	if (carouselRowOne.scrollWidth !== 0) {
		prevOne.style.display = "flex";
	}
	if (
		contentOne.scrollWidth - width - gap <=
		carouselRowOne.scrollLeft + width
	) {
		nextOne.style.display = "none";
	}
});
prevOne.addEventListener("click", (e) => {
	carouselRowOne.scrollBy(-(width + gap), 0);
	if (carouselRowOne.scrollLeft - width - gap <= 0) {
		prevOne.style.display = "none";
	}
	if (
		!contentOne.scrollWidth - width - gap <=
		carouselRowOne.scrollLeft + width
	) {
		nextOne.style.display = "flex";
	}
});

nextTwo.addEventListener("click", (e) => {
	carouselRowTwo.scrollBy(width + gap, 0);
	if (carouselRowTwo.scrollWidth !== 0) {
		prevTwo.style.display = "flex";
	}
	if (
		contentTwo.scrollWidth - width - gap <=
		carouselRowTwo.scrollLeft + width
	) {
		nextTwo.style.display = "none";
	}
});
prevTwo.addEventListener("click", (e) => {
	carouselRowTwo.scrollBy(-(width + gap), 0);
	if (carouselRowTwo.scrollLeft - width - gap <= 0) {
		prevTwo.style.display = "none";
	}
	if (
		!contentTwo.scrollWidth - width - gap <=
		carouselRowTwo.scrollLeft + width
	) {
		nextTwo.style.display = "flex";
	}
});

let width = carouselRowOne.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
