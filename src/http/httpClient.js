class HttpClient {
	async getAccessToken() {
		let proxyURL = "https://cors-anywhere.herokuapp.com/";
		let loginURL = `https://api.baasic.com/beta/furniture-store-app/login/`;
		let username = "Dariop1111";
		let password = "m@rinmiki1";
		let body = {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Content-Length": "0",
			},
			body: `grant_type=password&username=${username}&password=${password}`,
		};
		let response = await fetch(proxyURL + loginURL, body);
		let data = await response.json();
		return data.access_token;
	}
	async get(url, paramsObj = {}) {
		let response = await fetch(url, paramsObj);
		return await response.json();
	}

	async post(url, dataObj) {
		let accessToken = await this.getAccessToken();

		await fetch(url, {
			method: "POST",
			headers: {
				Authorization: `bearer ${accessToken}`,
				"Content-Type": "application/json",
			},
			body: dataObj,
		});
	}

	async put(url, dataObj) {
		let accessToken = await this.getAccessToken();
		await fetch(url, {
			method: "PUT",
			headers: {
				Authorization: `bearer ${accessToken}`,
				"Content-Type": "application/json",
			},
			body: dataObj,
		});
	}
	async delete(url) {
		let accessToken = await this.getAccessToken();
		await fetch(url, {
			method: "DELETE",
			headers: {
				Authorization: `bearer ${accessToken}`,
			},
		});
	}
}
export default new HttpClient();
