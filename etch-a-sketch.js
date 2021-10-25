const gameboy = document.querySelector("#gameboy");
const container = document.querySelector("#container");
const recolor = document.querySelector(".recolor");
const clear = document.querySelector(".clear");
const resize = document.querySelector(".resize");
const grayscale = document.querySelector(".grayscale");
const color = document.querySelector(".color");
const colorSelect = document.querySelector(".color-select");
const hexCodeRegex = "#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";

function paintField () {
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	gameboy.style.backgroundColor = `#${randomColor}`;
}

function colorMe () {
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	this.style.backgroundColor = `#${randomColor}`;
}

function colorMeGray () {
	this.style.backgroundColor = "#000000";
}

function colorMeChoice (box, colorChoice) {
	box.style.backgroundColor = colorChoice;
}

for (let i = 0; i < 16; i++) {
	const row = document.createElement("div");
	row.classList.add("row");
	for (let j = 0; j < 16; j++) {
		const box = document.createElement("div");
		box.classList.add("box");
		row.appendChild(box);
		box.style.height = `${100/16}%`;
	}
	container.appendChild(row);
}

function makeGrayscale () {
	boxes.forEach(box => box.addEventListener("mouseenter", colorMeGray));
	boxes.forEach(box => box.removeEventListener("mouseenter", colorMe));
	boxes.forEach(box => box.removeEventListener("mouseenter", colorMeChoice));
}

function makeColor () {
	boxes.forEach(box => box.addEventListener("mouseenter", colorMe));
	boxes.forEach(box => box.removeEventListener("mouseenter", colorMeGray));
	boxes.forEach(box => box.removeEventListener("mouseenter", colorMeChoice));
}

function selectColor () {
	let validation = true;
	while (validation) {
		let colorChoice = prompt ("What color would you like to draw in?", "#000000");
		if (!colorChoice.match(hexCodeRegex)) {
			alert ("Please use a valid hex color code.");
		}
		else {
			boxes.forEach(box => box.addEventListener("mouseenter", () => {
				colorMeChoice (box, colorChoice);
			}));
			boxes.forEach(box => box.removeEventListener("mouseenter", colorMe));
			boxes.forEach(box => box.removeEventListener("mouseenter", colorMeGray));
			validation = false;
		}
	}
}

function clearGrid () {
	boxes.forEach(box => box.style.backgroundColor = "#999999");
}

const boxes = document.querySelectorAll(".box");
recolor.addEventListener("click", paintField);
clear.addEventListener("click", clearGrid);
grayscale.addEventListener("click", makeGrayscale);
color.addEventListener("click", makeColor);
colorSelect.addEventListener("click", selectColor);