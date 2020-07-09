import httpClient from "./httpClient";

class GetData {
	getItems = async (store) => {
		let data = await httpClient.get(store.itemsURL, {});
		store.items = data.item;
		store.itemPages = Math.ceil(data.totalRecords / data.recordsPerPage);
	};

	getCategories = async (store) => {
		let data = await httpClient.get(store.categoriesURL, {});
		store.categories = data.item;
	};
}
export default new GetData();
