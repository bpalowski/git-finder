class Git {
	constructor() {
		this.client_id = '232dd73de470f04571b2';
		this.client_secret = '03c0503a3ef5df989c4156731e3c0ec17ee28065';
	}

	async get(user) {

		const usersProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secrete=${this.client_secret}`);

		const profileData = await usersProfile.json();

		//return profileData;
		return {
			profile: profileData
		}
	}
}