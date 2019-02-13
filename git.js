class Git {
	constructor() {
		this.client_id = '232dd73de470f04571b2';
		this.client_secret = 'ddaa39d3d9efa7b30fbca91cad31864899be974a';
	}

	async get(user) {

		const usersProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profileData = await usersProfile.json();

		//return profileData;
		return {
			profile: profileData
		}
	}
}