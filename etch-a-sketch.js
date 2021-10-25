const gameboy = document.querySelector("#gameboy");
const container = document.querySelector("#container");

function paintField () {
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	this.style.backgroundColor = `#${randomColor}`;
}

function colorMe () {
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	this.style.backgroundColor = `#${randomColor}`;
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

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => box.addEventListener("mouseenter", colorMe));
gameboy.addEventListener("mousedown", paintField);