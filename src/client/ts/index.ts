/*
	Get the pixel height of the default and minimised header.
*/
const header = document.getElementsByTagName("header")[0];
const hero = document.getElementById("hero");
let targetEl: HTMLElement;
let headerBig = 0;
let headerMini = 0;
function getHeaderSizes() {
	header.classList.add("no-transition");

	header.classList.remove("mini");
	headerBig = header.offsetHeight;
	header.classList.add("mini");
	headerMini = header.offsetHeight;
	header.classList.remove("mini");

	header.classList.remove("no-transition");

	checkScroll();
}
window.addEventListener("resize", getHeaderSizes);
getHeaderSizes();

/*
	Check if the user has scrolled past the 'about me' section and if so minimise the header size.
*/
function checkScroll() {
	const minAt = (hero?.offsetTop ?? 0) + (hero?.offsetHeight ?? 0) - headerBig;
	header.classList[window.scrollY > minAt ? "add" : "remove"]("mini");
}
window.addEventListener("scroll", checkScroll);

/*
	Animate scrolling to the target element.
*/
const duration = 350;
const quadraticEaseInOut = (t: number) =>
	t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
function animateScroll() {
	const timeThrough = Math.min(1, (performance.now() - startTime) / duration);
	window.scroll(
		0,
		Math.ceil(
			quadraticEaseInOut(timeThrough) * (targetScroll - startScroll) +
				startScroll
		)
	);

	if (timeThrough != 1) {
		requestAnimationFrame(animateScroll);
	} else {
		history.pushState(
			{},
			"",
			targetEl["id"] === "hero" ? "#" : `#${targetEl["id"]}`
		);
	}
}

/*
	Event handler for triggering automatic scrolling when clicking navigation links.
*/
let targetScroll: number, startScroll: number, startTime: number;
function triggerScroll(evt: MouseEvent) {
	evt.preventDefault();

	targetEl = document.getElementById(
		(evt.currentTarget as HTMLElement).dataset["scroll"]
	);
	startScroll = window.scrollY;
	startTime = performance.now();
	targetScroll =
		targetEl.offsetTop - (targetEl["id"] === "about-me" ? 0 : headerMini);

	animateScroll();
}

/*
	Attach event listeners to links for automatic scrolling.
*/
([
	...Array.from(document.querySelectorAll("header nav ul li a[data-scroll]")),
	document.querySelector("header h1 a"),
	document.getElementsByClassName("hero-scroll-indicator")[0],
] as HTMLElement[]).forEach((e) => {
	e.addEventListener("click", triggerScroll);
});

/*
	Event listeners for opening and closing the hamburger menu in mobile view.
*/
const hamburgerButton = document.getElementsByClassName("button-hamburger")[0];
Array.from(document.querySelectorAll("header > h1, header > nav")).forEach(
	(e) => {
		e.addEventListener("click", () => {
			hamburgerButton.classList.remove("expanded");
		});
	}
);
hamburgerButton.addEventListener("click", () => {
	hamburgerButton.classList.toggle("expanded");
});
