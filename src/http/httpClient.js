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
	// get Data
	getItems = async (store) => {
		let data = await this.get(store.itemsURL, {});
		store.items = data.item;
		store.itemPages = Math.ceil(data.totalRecords / data.recordsPerPage);
	};

	getCategories = async (store) => {
		let data = await this.get(store.categoriesURL, {});
		store.categories = data.item;
	};
	// delete Data
	deleteItem = async (itemURL) => {
		this.delete(itemURL);
	};
	deleteCategory = async (categoryURL) => {
		this.delete(categoryURL);
	};
	//post Data
	postItem = async (item) => {
		item = JSON.stringify(item);
		let itemsURL =
			"https://api.baasic.com/beta/furniture-store-app/resources/Items";
		if (item) {
			this.post(itemsURL, item);
		}
	};
	postCategory = async (category) => {
		category = JSON.stringify(category);
		let categoriesURL =
			"https://api.baasic.com/beta/furniture-store-app/resources/Categories";
		if (category) {
			this.post(categoriesURL, category);
		}
	};
}
export default new HttpClient();
