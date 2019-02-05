// Alter header size when scrolling past hero section
const header = document.getElementsByTagName("header")[0];
window.addEventListener("scroll", (evt) => {
	const heroEl = document.querySelector("section.hero");
	const minAt = heroEl.offsetTop + heroEl.offsetHeight - header.offsetHeight;
	console.log(window.scrollY, minAt, window.scrollY > minAt);
	if (window.scrollY > minAt) {
		header.classList.add("mini");
	} else {
		header.classList.remove("mini");
	}
});
