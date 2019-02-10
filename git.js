class Git {
	constructor() {
		this.client_id = '833e83d61ca81e724d70';
		this.client_secret = 'b8ab23e9b8ca28159ebc09e740ccbb9502cc5aa9';
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profileData = await profileResponse.json();

		return {
			profile: profileData
		}
	}
}