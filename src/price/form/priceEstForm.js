import "./priceEstForm.css";

// Create priceForm element and set its properties
function priceEstForm(price) {
	const container = document.createElement("div");
	container.classList.add("price-container");

	const priceButton = document.createElement("button");
	priceButton.classList.add("price-button");
	priceButton.textContent = "View Price";

	priceButton.addEventListener("click", () => {
		// Create a form element
		priceButton.remove();
		const priceForm = document.createElement("form");
		priceForm.classList.add("price-form");

		// Input elements for the name and email fields
		const nameInput = document.createElement("input");
		nameInput.type = "text";
		nameInput.placeholder = "Name";
		nameInput.required = false;

		const emailInput = document.createElement("input");
		emailInput.type = "email";
		emailInput.placeholder = "Email";
		emailInput.required = false;

		// Create a submit button for the form
		const submitButton = document.createElement("button");
		submitButton.classList.add("price-form-submit-button");
		submitButton.type = "submit";
		submitButton.textContent = "Submit";

		// Append the input fields and the submit button to the form element
		priceForm.appendChild(nameInput);
		priceForm.appendChild(emailInput);
		priceForm.appendChild(submitButton);

		// Add a click event listener to the submit button
		priceForm.addEventListener("submit", (event) => {
			event.preventDefault(); // Prevent default form submission behavior
			const formData = new FormData(priceForm); // Create a new FormData object
			const name = formData.get("name"); // Get the name value from the form
			const email = formData.get("email"); // Get the email value from the form

			localStorage.setItem("name", name); // Store the name value in localStorage
			localStorage.setItem("email", email); // Store the email value in localStorage

			priceForm.remove(); // Remove the form from the DOM

			// Display the price in the center of the form
			const number = document.createElement("p");
			number.classList.add("price-display"); // Add the class to the paragraph
			number.textContent = `€${price}`;

			// Append the price to the container
			container.appendChild(number);
		});

		// Append the form to the container
		container.appendChild(priceForm);
	});

	// Append the price button to the container
	container.appendChild(priceButton);

	return container;
}

export default priceEstForm;
