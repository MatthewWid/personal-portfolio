let targetScroll, startScroll, startTime;
const duration = 350;
const header = document.getElementsByTagName("header")[0];
let headerBig, headerMini;

window.addEventListener("resize", getHeaderSizes);
window.addEventListener("scroll", checkScroll);

getHeaderSizes();

function getHeaderSizes() {
	header.classList.remove(...["mini", "transition"]);
	headerBig = header.offsetHeight;
	header.classList.add("mini");
	headerMini = header.offsetHeight;
	header.classList.remove("mini");
	header.classList.add("transition");

	checkScroll();
}

function checkScroll() {
	const minAt = (hero.offsetTop + hero.offsetHeight) - headerBig;
	header.classList[window.scrollY > minAt ? "add" : "remove"]("mini");
}

const quadraticEaseInOut = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
function animateScroll() {
	const timeThrough = Math.min(1, (performance.now() - startTime) / duration);
	window.scroll(0, Math.ceil((quadraticEaseInOut(timeThrough) * (targetScroll - startScroll)) + startScroll));

	if (timeThrough != 1) {
		requestAnimationFrame(animateScroll);
	} else {
		history.pushState({}, "", targetEl["id"] === "hero" ? "#" : `#${targetEl["id"]}`);
	}
}

[
	...Array.from(document.querySelectorAll("header nav ul li a")),
	document.querySelector("header h1 a"),
	document.getElementsByClassName("hero-scroll-indicator")[0]
].forEach((e) => {
	e.addEventListener("click", (evt) => {
		evt.preventDefault();
		targetEl = document.getElementById(evt.currentTarget.dataset["scroll"]);
		startScroll = window.scrollY;
		startTime = performance.now();
		targetScroll = targetEl.offsetTop - (targetEl["id"] === "about-me" ? headerBig : headerMini);

		animateScroll();
	});
});
