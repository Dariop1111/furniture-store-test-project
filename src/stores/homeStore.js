import { computed, observable } from "mobx";
import getData from "../http/getData";
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
getData.getItems(homeStore);
getData.getCategories(homeStore);

export default homeStore;
