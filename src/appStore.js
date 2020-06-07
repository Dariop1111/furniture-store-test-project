import { action, observable, computed } from "mobx";

class Store {
	@observable currentPage = 0;
	@observable pages = [
		{ id: 0, name: "Home" },
		{ id: 1, name: "List" },
		{ id: 2, name: "Form" },
	];
	@observable items = [
		{
			id: 0,
			name: "Reduced-height plinths FINE",
			itemWidth: "",
			itemLength: "",
			itemHeight: "",
			size: "",
			category: "0",
			checked: false,
			feat: true,
			price: "1999",
			desc:
				"The reduced height plinths create useful space inside the tall units, sides, shelves, back panels, worktop and drawer fronts.",
		},
		{
			id: 1,
			name: "NX 510 Agate grey matt velvet",
			itemWidth: "",
			itemLength: "",
			itemHeight: "",
			size: "",
			category: 0,
			checked: false,
			feat: true,
			price: "2999",
			desc:
				"Little space for the kitchen, but plenty of space in the kitchen, plus a place for communication in the form of a breakfast bar",
		},
		{
			id: 2,
			name: "Hvar",
			itemWidth: "",
			itemLength: "",
			itemHeight: "",
			size: "",
			category: 0,
			checked: false,
			feat: true,
			price: "3499",
			desc: "Mediterranian kitchen made using oak wood.",
		},
		{
			id: 3,
			name: "Kiwi",
			itemWidth: "80",
			itemLength: "40",
			itemHeight: "80",
			size: "80 cm x 40 cm x 80 cm",
			category: "1",
			checked: false,
			feat: false,
			price: "99",
			desc: "",
		},
		{
			id: 5,
			name: "Orange",
			itemWidth: "80",
			itemLength: "60",
			itemHeight: "80",
			size: "80 cm x 60 cm x 80 cm",
			category: "1",
			checked: false,
			feat: false,
			price: "199",
			desc: "",
		},
		{
			id: 6,
			name: "Lime",
			itemWidth: "120",
			itemLength: "80",
			itemHeight: "120",
			size: "120 cm x 80 cm x 120 cm",
			category: "1",
			checked: false,
			feat: false,
			price: "399",
			desc: "",
		},
		{
			id: 7,
			name: "Corgo",
			itemWidth: "290",
			itemLength: "290",
			itemHeight: "80",
			size: "290 cm x 290 cm x 80 cm",
			category: "2",
			checked: false,
			feat: false,
			price: "299",
			desc: "",
		},
		{
			id: 8,
			name: "Hawwais",
			itemWidth: "40",
			itemLength: "40",
			itemHeight: "100",
			size: "40 cm x 40 cm x 100 cm",
			category: "3",
			checked: false,
			feat: false,
			price: "80",
			desc: "",
		},
		{
			id: 9,
			name: "Sermo",
			itemWidth: "40",
			itemLength: "40",
			itemHeight: "100",
			size: "40 cm x 40 cm x 100 cm",
			category: "3",
			checked: false,
			feat: false,
			price: "80",
			desc: "",
		},
		{
			id: 10,
			name: "Kiwi",
			itemWidth: "80",
			itemLength: "40",
			itemHeight: "80",
			size: "80 cm x 40 cm x 80 cm",
			category: "1",
			checked: false,
			feat: false,
			price: "99",
			desc: "",
		},
		{
			id: 11,
			name: "Orange",
			itemWidth: "80",
			itemLength: "60",
			itemHeight: "80",
			size: "80 cm x 60 cm x 80 cm",
			category: "1",
			checked: false,
			feat: false,
			price: "199",
			desc: "",
		},
		{
			id: 12,
			name: "Lime",
			itemWidth: "120",
			itemLength: "80",
			itemHeight: "120",
			size: "120 cm x 80 cm x 120 cm",
			category: "1",
			checked: false,
			feat: false,
			price: "399",
			desc: "",
		},
		{
			id: 13,
			name: "Corgo",
			itemWidth: "290",
			itemLength: "290",
			itemHeight: "80",
			size: "290 cm x 290 cm x 80 cm",
			category: "2",
			checked: false,
			feat: false,
			price: "299",
			desc: "",
		},
		{
			id: 14,
			name: "Hawwais",
			itemWidth: "40",
			itemLength: "40",
			itemHeight: "100",
			size: "40 cm x 40 cm x 100 cm",
			category: "3",
			checked: false,
			feat: false,
			price: "80",
			desc: "",
		},
		{
			id: 15,
			name: "Sermo",
			itemWidth: "40",
			itemLength: "40",
			itemHeight: "100",
			size: "40 cm x 40 cm x 100 cm",
			category: "3",
			checked: false,
			feat: false,
			price: "80",
			desc: "",
		},
		{
			id: 16,
			name: "Kiwi",
			itemWidth: "80",
			itemLength: "40",
			itemHeight: "80",
			size: "80 cm x 40 cm x 80 cm",
			category: "1",
			checked: false,
			feat: false,
			price: "99",
			desc: "",
		},
		{
			id: 17,
			name: "Orange",
			itemWidth: "80",
			itemLength: "60",
			itemHeight: "80",
			size: "80 cm x 60 cm x 80 cm",
			category: "1",
			checked: false,
			feat: false,
			price: "199",
			desc: "",
		},
		{
			id: 18,
			name: "Lime",
			itemWidth: "120",
			itemLength: "80",
			itemHeight: "120",
			size: "120 cm x 80 cm x 120 cm",
			category: "1",
			checked: false,
			feat: false,
			price: "399",
			desc: "",
		},
		{
			id: 19,
			name: "Corgo",
			itemWidth: "290",
			itemLength: "290",
			itemHeight: "80",
			size: "290 cm x 290 cm x 80 cm",
			category: "2",
			checked: false,
			feat: false,
			price: "299",
			desc: "",
		},
		{
			id: 20,
			name: "Hawwais",
			itemWidth: "40",
			itemLength: "40",
			itemHeight: "100",
			size: "40 cm x 40 cm x 100 cm",
			category: "3",
			checked: false,
			feat: false,
			price: "80",
			desc: "",
		},
		{
			id: 21,
			name: "Sermo",
			itemWidth: "40",
			itemLength: "40",
			itemHeight: "100",
			size: "40 cm x 40 cm x 100 cm",
			category: "3",
			checked: false,
			feat: false,
			price: "80",
			desc: "",
		},
		{
			id: 22,
			name: "Kiwi",
			itemWidth: "80",
			itemLength: "40",
			itemHeight: "80",
			size: "80 cm x 40 cm x 80 cm",
			category: "1",
			checked: false,
			feat: false,
			price: "99",
			desc: "",
		},
		{
			id: 23,
			name: "Orange",
			itemWidth: "80",
			itemLength: "60",
			itemHeight: "80",
			size: "80 cm x 60 cm x 80 cm",
			category: "1",
			checked: false,
			feat: false,
			price: "199",
			desc: "",
		},
		{
			id: 24,
			name: "Lime",
			itemWidth: "120",
			itemLength: "80",
			itemHeight: "120",
			size: "120 cm x 80 cm x 120 cm",
			category: "1",
			checked: false,
			feat: false,
			price: "399",
			desc: "",
		},
		{
			id: 25,
			name: "Corgo",
			itemWidth: "290",
			itemLength: "290",
			itemHeight: "80",
			size: "290 cm x 290 cm x 80 cm",
			category: "2",
			checked: false,
			feat: false,
			price: "299",
			desc: "",
		},
		{
			id: 26,
			name: "Hawwais",
			itemWidth: "40",
			itemLength: "40",
			itemHeight: "100",
			size: "40 cm x 40 cm x 100 cm",
			category: "3",
			checked: false,
			feat: false,
			price: "80",
			desc: "",
		},
		{
			id: 27,
			name: "Sermo",
			itemWidth: "40",
			itemLength: "40",
			itemHeight: "100",
			size: "40 cm x 40 cm x 100 cm",
			category: "3",
			checked: false,
			feat: false,
			price: "80",
			desc: "",
		},
		{
			id: 28,
			name: "Kiwi",
			itemWidth: "80",
			itemLength: "40",
			itemHeight: "80",
			size: "80 cm x 40 cm x 80 cm",
			category: "1",
			checked: false,
			feat: false,
			price: "99",
			desc: "",
		},
		{
			id: 29,
			name: "Orange",
			itemWidth: "80",
			itemLength: "60",
			itemHeight: "80",
			size: "80 cm x 60 cm x 80 cm",
			category: "1",
			checked: false,
			feat: false,
			price: "199",
			desc: "",
		},
		{
			id: 30,
			name: "Lime",
			itemWidth: "120",
			itemLength: "80",
			itemHeight: "120",
			size: "120 cm x 80 cm x 120 cm",
			category: "1",
			checked: false,
			feat: false,
			price: "399",
			desc: "",
		},
		{
			id: 31,
			name: "Corgo",
			itemWidth: "290",
			itemLength: "290",
			itemHeight: "80",
			size: "290 cm x 290 cm x 80 cm",
			category: "2",
			checked: false,
			feat: false,
			price: "299",
			desc: "",
		},
		{
			id: 32,
			name: "Hawwais",
			itemWidth: "40",
			itemLength: "40",
			itemHeight: "100",
			size: "40 cm x 40 cm x 100 cm",
			category: "3",
			checked: false,
			feat: false,
			price: "80",
			desc: "",
		},
		{
			id: 33,
			name: "Sermo",
			itemWidth: "40",
			itemLength: "40",
			itemHeight: "100",
			size: "40 cm x 40 cm x 100 cm",
			category: "3",
			checked: false,
			feat: false,
			price: "80",
			desc: "",
		},
	];
	@observable categories = [
		{ id: 0, name: "Kitchens", checked: false, numOfItems: 0 },
		{ id: 1, name: "Elements", checked: false, numOfItems: 0 },
		{ id: 2, name: "Tables", checked: false, numOfItems: 0 },
		{ id: 3, name: "Chairs", checked: false, numOfItems: 0 },
	];
	@observable inputValues = {
		sortBy: "",
		categorySelected: "",
		search: "",
		itemName: "",
		categoryName: "",
		itemCategoryID: 0,
		enableSize: false,
		itemPrice: 0,
		itemDesc: "",
		itemWidth: "",
		itemLength: "",
		itemHeight: "",
	};
	//Pagination
	@observable itemsPerPage = 9;
	@observable itemPage = 1;

	@computed get sortedItems() {
		let sortedItems = this.items;
		let { sortBy } = this.inputValues;
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
		let { categorySelected } = this.inputValues;
		if (categorySelected != "") {
			filteredItems = this.items.filter((item) => {
				return this.categories[item.category].name === categorySelected;
			});
		}
		return filteredItems;
	}

	@computed get searchedItems() {
		let searchedItems = this.filteredItems;
		let search = this.inputValues["search"];
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

export default new Store();
