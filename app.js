const http = new Git;
// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
	// get input text
	const userText = e.target.value;
	if (userText !== '') {
		// HTTP call
		http.getUser(userText)
			.then(data => {
				console.log(data);
			})
	}
})