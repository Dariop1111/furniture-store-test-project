import httpClient from "./httpClient";
class PostData {
	postItem = async (item) => {
		item = JSON.stringify(item);
		let itemsURL =
			"https://api.baasic.com/beta/furniture-store-app/resources/Items";
		if (item) {
			httpClient.post(itemsURL, item);
		}
	};
	postCategory = async (category) => {
		category = JSON.stringify(category);
		let categoriesURL =
			"https://api.baasic.com/beta/furniture-store-app/resources/Categories";
		if (category) {
			httpClient.post(categoriesURL, category);
		}
	};
}
export default new PostData();
