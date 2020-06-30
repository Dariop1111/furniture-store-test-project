import { computed, observable } from "mobx";
import { getItems, getCategories } from "./getData";
class HomeStore {
	@observable items = [];
	@observable categories = [];
	@computed get itemsUrlOptions() {
		return "?searchQuery=true";
	}
	@computed get itemsURL() {
		return (
			"https://api.baasic.com/beta/furniture-store-app/resources/Items/" +
			this.itemsUrlOptions
		);
	}
}
let homeStore = new HomeStore();
getItems(homeStore);
getCategories(homeStore);

export default homeStore;
