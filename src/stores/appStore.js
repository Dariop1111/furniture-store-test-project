import { observable } from "mobx";
class AppStore {
	@observable itemData = [];
	@observable currentPage = 0;
	@observable pages = [
		{ id: 0, name: "Home" },
		{ id: 1, name: "List" },
		{ id: 2, name: "Form" },
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
}

let appStore = new AppStore();
export default appStore;
