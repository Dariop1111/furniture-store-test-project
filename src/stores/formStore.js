import { observable, computed } from "mobx";
import store from "./appStore";
class FormStore {
	@observable items = [];
	@observable categories = [];
	//Pagination
	@observable itemsPerPage = 9;
	@observable itemPage = 1;

	@computed get sortedItems() {
		let sortedItems = this.items;
		let { sortBy } = store.inputValues;
		if (sortBy != "") {
			if (sortBy == "abc") {
				sortedItems = this.items
					.slice(0, this.items.length)
					.sort((itemA, itemB) => {
						if (itemA.name < itemB.name) return -1;
						if (itemA.name > itemB.name) return 1;
						return 0;
					});
				console.log("sorted");
			} else if (sortBy == "cba") {
				sortedItems = this.items
					.slice(0, this.items.length)
					.sort((itemA, itemB) => {
						if (itemA.name < itemB.name) return 1;
						if (itemA.name > itemB.name) return -1;
						return 0;
					});
				console.log("sorted");
			} else if (sortBy == "priceMin") {
				sortedItems = this.items
					.slice(0, this.items.length)
					.sort((itemA, itemB) => {
						return itemA.price - itemB.price;
					});
			} else if (sortBy == "priceMax") {
				sortedItems = this.items
					.slice(0, this.items.length)
					.sort((itemA, itemB) => {
						return itemB.price - itemA.price;
					});
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
			filteredItems = this.items.filter((item) => {
				return item.category === categorySelected;
			});
		}
		return filteredItems;
	}

	@computed get searchedItems() {
		let searchedItems = this.filteredItems;
		let search = store.inputValues["search"];
		if (search != "") {
			searchedItems = this.filteredItems.filter((item) => {
				return item.name.toLowerCase().includes(search);
			});
		}
		return searchedItems;
	}
	@computed get itemBoxPagination() {
		let trimStart = (this.itemPage - 1) * this.itemsPerPage;
		let trimEnd = this.itemsPerPage * this.itemPage;
		let items = this.searchedItems;
		let trimmedItems = items.slice(trimStart, trimEnd);
		let itemPages = Math.ceil(items.length / this.itemsPerPage);
		return {
			trimmedItems,
			itemPages,
			itemsPerPage: this.itemsPerPage,
			itemPage: this.itemPage,
		};
	}
}
let formStore = new FormStore();
let itemsURL =
	"https://api.baasic.com/beta/furniture-store-app/resources/Items";
let categoriesURL =
	"https://api.baasic.com/beta/furniture-store-app/resources/Categories";
fetch(itemsURL)
	.then((response) => response.json())
	.then((data) => {
		formStore.items = data.item;
	})
	.catch(() => {
		formStore.items = [];
	});
fetch(categoriesURL)
	.then((response) => response.json())
	.then((data) => {
		formStore.categories = data.item;
	})
	.catch(() => {
		formStore.categories = [];
	});

export default formStore;
