// Alter header size when scrolling past hero section
function checkScroll() {
	const heroEl = document.querySelector("section.hero");
	const minAt = heroEl.offsetTop + heroEl.offsetHeight - headerHeight;
	if (window.scrollY > minAt) {
		header.classList.add("mini");
	} else {
		header.classList.remove("mini");
	}
}

const header = document.getElementsByTagName("header")[0];
const headerHeight = header.offsetHeight;
window.addEventListener("scroll", checkScroll);

checkScroll();

// Smooth scroll when clicking header anchor links
const quadraticEaseInOut = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
function animateScroll() {
	const timeThrough = Math.min(1, (performance.now() - startTime) / duration);
	window.scroll(0, Math.ceil((quadraticEaseInOut(timeThrough) * (targetScroll - startScroll)) + startScroll));

	if (timeThrough != 1) {
		requestAnimationFrame(animateScroll);
	} else {
		location.hash = targetEl.id.substring(targetEl.id.indexOf("#") + 1);
		if (location.hash == "#hero") {
			location.hash = "";
		}
	}
}
const initScroll = (evt) => {
	evt.preventDefault();

	startScroll = window.scrollY;
	startTime = performance.now();
	targetScroll = targetEl.offsetTop;

	animateScroll();
}

const duration = 350;
let targetEl, targetScroll, startScroll, startTime;
// Add event listeners to header logo and navigation items
Array.from(document.querySelectorAll("header nav ul li a")).forEach((e) => {
	e.addEventListener("click", (evt) => {
		targetEl = document.getElementById(e.href.substring(e.href.indexOf("#") + 1));
		initScroll(evt);
	});
});
document.querySelector("header h1 a").addEventListener("click", (evt) => {
	targetEl = document.getElementById("hero");
	initScroll(evt);
});
document.getElementsByClassName("hero-scroll-indicator")[0].addEventListener("click", (evt) => {
	targetEl = document.getElementById("about-me");
	initScroll(evt);
});
