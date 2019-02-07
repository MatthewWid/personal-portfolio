// Alter header size when scrolling past hero section
function checkScroll() {
	const heroEl = document.querySelector("section.hero");
	const minAt = heroEl.offsetTop + heroEl.offsetHeight - header.offsetHeight;
	if (window.scrollY > minAt) {
		header.classList.add("mini");
	} else {
		header.classList.remove("mini");
	}
}

const header = document.getElementsByTagName("header")[0];
window.addEventListener("scroll", checkScroll);

checkScroll();
