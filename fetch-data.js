const fetchUserData = async () => {
	const apiUrl = "https://jsonplaceholder.typicode.com/users";
	const dataContainer = document.getElementById("api-data");
	try {
		const response = await fetch(apiUrl);
		const users = await response.json();

		dataContainer.innerHTML = "";
		const userList = document.createElement('ul');
		users.forEach((user) => {
			const item = document.createElement('li');
			item.textContent = user.name;
			userList.appendChild(item);
		});
		dataContainer.appendChild(userList);
	} catch (error) {
		console.log(error);
		dataContainer.textContent = "Failed to load user data.";
	}
};

document.addEventListener("DOMContentLoaded", fetchUserData);
