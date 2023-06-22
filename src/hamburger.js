document.addEventListener("DOMContentLoaded", function () {
	// Select the hamburger menu and mobile nav
	const hamburger = document.querySelector(".hamburger");
	const mobileNav = document.querySelector(".mobile-menu");

	// Add a click event listener to the hamburger menu
	hamburger.addEventListener("click", function () {
		// Toggle the 'active' class on both the hamburger menu and mobile nav
		hamburger.classList.toggle("active");
		mobileNav.classList.toggle("active");
	});
});
