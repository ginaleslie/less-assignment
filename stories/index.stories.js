// export default {
// 	title: "Demo",
// };

// export const Heading = () => "<h1>Bye World</h1>";

// export const Button = () => {
// 	const btn = document.createElement("button");
// 	btn.type = "button";
// 	btn.innerText = "Hello Button";
// 	btn.addEventListener("click", (e) => console.log(e));
// 	return btn;
// };

// export const callOut = () => {
// 	const btn = document.createElement("button");
// 	btn.type = "button";
// 	btn.innerText = "bye";
// 	btn.addEventListener("click", (e) => console.log(e));
// 	return btn;
// };
import "./story.styles.css";
export default { title: "Button" };
import "./Cart icon orange.png";

export const withText = () => '<button class="btn">View more ></button>';

export const withImage = () =>
	'<button class="btn "><img class="img-btn" src="./Cart icon orange.png">Add to cart</button>';

export const searchBar = () =>
	'<div class="search-container shadow-btn border-rad"><input type="text" placeholder="Search.." name="search" class="input"/><button><img src="./img/Search icon white.svg" /></button></div>';

export const login = () =>
	'<div class="shadow-btn"><a href="#"><button type="button" class="btn btn-primary text-white border-rad">Login<img class="img-btn-r" src="./img/Account icon white.png" class="no-pm"/></button></a></div>';

export const cart = () =>
	'<div class="shadow-btn max-width"><a href="#"><div class="cart-number secondary-bg text-white">3</div><button type="button" class="btn btn-primary border-rad"><img src="./img/Cart icon white.png"/></button></a></div>';
// import React from "react";
// import imageFile from "./Cart icon orange.png";

// export default {
// 	title: "img",
// };

// const image = {
// 	src: imageFile,
// 	alt: "my image",
// };

// export const withAnImage = () => <img src={image.src} />;
