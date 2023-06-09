import "./priceEstForm.css";
import { colRef } from "../firebase.js";
import { addDoc } from "@firebase/firestore";

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
		nameInput.name = "name";
		nameInput.placeholder = "Name";
		nameInput.required = false;

		const emailInput = document.createElement("input");
		emailInput.type = "email";
		emailInput.name = "email";
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

		// Add a submit event listener to the form
		priceForm.addEventListener("submit", (event) => {
			event.preventDefault(); // Prevent default form submission behavior
			const formData = new FormData(priceForm); // Create a new FormData object
			const name = formData.get("name"); // Get the name value from the form
			const email = formData.get("email"); // Get the email value from the form

			// Add the form data to Firestore
			addDoc(colRef, {
				name: name,
				email: email,
				price: price,
			})
				.then(() => {
					console.log("Form data stored in Firestore");
					const confirmation = document.createElement("p");
					confirmation.classList.add("confirmation");
					confirmation.textContent =
						"Thanks for submitting! You will receive an email with your price estimate shortly.";
					priceForm.insertBefore(confirmation, buttonsWrapper);

					nameInput.remove();
					emailInput.remove();
					submitButton.remove();
				})
				.catch((error) => {
					console.error("Error storing form data: ", error);
				});

			// priceForm.remove(); // Remove the form from the DOM
		});

		// Create a div to wrap the buttons
		const buttonsWrapper = document.createElement("div");
		buttonsWrapper.classList.add("buttons-wrapper");

		// Append the submit button to the wrapper
		buttonsWrapper.appendChild(submitButton);

		// Create a return button under the form
		const returnButton = document.createElement("button");
		returnButton.classList.add("price-form-return-button");
		returnButton.textContent = "Return";

		// Add a click event listener to the return button
		returnButton.addEventListener("click", () => {
			priceForm.remove(); // Remove the form from the DOM
			container.appendChild(priceButton); // Append the price button to the container
		});

		// Append the return button to the wrapper
		buttonsWrapper.appendChild(returnButton);

		// Append the wrapper to the form
		priceForm.appendChild(buttonsWrapper);

		// Append the form to the container
		container.appendChild(priceForm);
	});

	// Append the price button to the container
	container.appendChild(priceButton);

	return container;
}

export default priceEstForm;
