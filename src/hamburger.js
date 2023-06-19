document.addEventListener("DOMContentLoaded", function () {
	// Select the hamburger menu and mobile menu
	const hamburger = document.querySelector(".hamburger");
	const mobileMenu = document.querySelector(".mobile-menu");

	// Add a click event listener to the hamburger menu
	hamburger.addEventListener("click", function () {
		// Toggle the 'active' class on both the hamburger menu and mobile menu
		hamburger.classList.toggle("active");
		mobileMenu.classList.toggle("active");
	});
});
