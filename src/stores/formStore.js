import { observable, computed } from "mobx";
import store from "./appStore";
import getData from "../http/getData";
class FormStore {
	@observable items = [];
	@observable categories = [];
	//Pagination
	@observable itemsPerPage = 9;
	@observable itemPage = 1;
	@observable itemSort = "name";
	@observable itemQuery = "";
	@observable itemPages = 0;
	@observable categoriesURL =
		"https://api.baasic.com/beta/furniture-store-app/resources/Categories";
	@computed get sortedItems() {
		let sortedItems = this.items;
		let { sortBy } = store.inputValues;
		if (sortBy != "") {
			if (sortBy == "abc") {
				this.itemSort = "name";
			} else if (sortBy == "price") {
				this.itemSort = "price";
			}
		}
		return sortedItems;
	}
	numOfItems() {
		this.categories.map((category) => {
			category.numOfItems = 0;
			this.items.map((item) => {
				if (item.category == category.id) {
					category.numOfItems++;
				}
				return item;
			});
			console.log(category.numOfItems);
			return category;
		});
	}
	@computed get filteredItems() {
		let filteredItems = this.sortedItems;
		let { categorySelected } = store.inputValues;
		if (categorySelected != "") {
			this.itemQuery = "&searchQuery=" + categorySelected;
		} else {
			this.itemQuery = "";
		}
		return filteredItems;
	}

	@computed get searchedItems() {
		let searchedItems = this.filteredItems;
		return searchedItems;
	}
	@computed get itemBoxPagination() {
		let items = this.searchedItems;
		return {
			trimmedItems: items,
			itemsPerPage: this.itemsPerPage,
			itemPages: this.itemPages,
			itemPage: this.itemPage,
		};
	}
	@computed get itemsUrlOptions() {
		return (
			"?page=" +
			this.itemPage +
			"&rpp=" +
			this.itemsPerPage +
			"&sort=" +
			this.itemSort +
			this.itemQuery
		);
	}
	@computed get itemsURL() {
		return (
			"https://api.baasic.com/beta/furniture-store-app/resources/Items/" +
			this.itemsUrlOptions
		);
	}
}
let formStore = new FormStore();
getData.getItems(formStore);
getData.getCategories(formStore);

export default formStore;
