
import httpClient from "./httpClient";
class DeleteData {
	deleteItem = async (itemURL) => {
		httpClient.delete(itemURL);
	};
	deleteCategory = async (categoryURL) => {
		httpClient.delete(categoryURL);
	};
}
export default new DeleteData();
