const container = document.querySelector("#container");

function colorMe () {
	this.classList.add("colorful");
}

for (let i = 0; i < 32; i++) {
	const row = document.createElement("div");
	row.classList.add("row");
	for (let j = 0; j < 32; j++) {
		const box = document.createElement("div");
		box.classList.add("box");
		row.appendChild(box);
		box.style.height = `${100/32}%`;
	}
	container.appendChild(row);
}

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => box.addEventListener("mouseenter", colorMe));