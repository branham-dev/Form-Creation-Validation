document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("registration-form");
	const feedbackDiv = document.getElementById("form-feedback");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const username = document.getElementById("username").value.trim();
		const email = document.getElementById("email").value.trim();
		const password = document.getElementById("password").value.trim();

		let isValid = true;
		let messages = [];

		if (username.length < 3) {
			isValid = false;
			messages.push("Minimum length of username is 3.");
		}

		if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
			isValid = false;
			messages.push("Enter a valid email.");
		}

		if (password.length < 8) {
			isValid = false;
			messages.push("Password should be a minimum of 8");
		}

		feedbackDiv.style.display = "block";
		if (isValid) {
			feedbackDiv.textContent = "Registration successful!";
			feedbackDiv.style.color = "#28a745";
		} else {
			feedbackDiv.innerHTML = messages.join("<br>");
			feedbackDiv.style.color = "#dc3545";
		}
	});
});
