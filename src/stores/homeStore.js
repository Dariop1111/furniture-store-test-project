import { computed, observable } from "mobx";
import { httpClient } from "../http";
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
httpClient.getItems(homeStore);
httpClient.getCategories(homeStore);

export default homeStore;
