const http = new Git;
// Search Input

const searchUser = document.getElementById('searchUser');
// Event Listener
searchUser.addEventListener('keyup', function (e) {

	// Get input Text
	const userText = e.target.value;
	// Not blank
	if (userText !== '') {
		/// Make http call
		http.get(userText)
			.then(function (data) {
				if (data.profile.message === "Not Found") {
					// Show Alert

				} else {

				}
			})
			.catch(function (err) {
				console.log(err);
			});
	} else {
		// clear profile
	}

	// e.preventDefault();
})