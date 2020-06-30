export let getItems = async (store) => {
	let response = await fetch(store.itemsURL);
	let data = await response.json();
	store.items = data.item;
	store.itemPages = Math.ceil(data.totalRecords / data.recordsPerPage);
};

export let getCategories = async (store) => {
	let response = await fetch(store.categoriesURL);
	let data = await response.json();
	store.categories = data.item;
};
export let getAccessToken = async () => {
	let proxyURL = "https://cors-anywhere.herokuapp.com/";
	let loginURL = `https://api.baasic.com/beta/furniture-store-app/login/`;
	let body = {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"Content-Length": "0",
		},
		body: "grant_type=password&username=Dariop1111&password=m@rinmiki1",
	};
	let response = await fetch(proxyURL + loginURL, body);
	let data = await response.json();
	data.access_token;
	return data.access_token;
};
