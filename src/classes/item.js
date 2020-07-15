import { appStore, formStore } from "../stores";
import ItemClass from "./itemClass";
import { getData, postData, deleteData } from "../http";

export default new (class Item {
	addNew = () => {
		let name = appStore.inputValues["itemName"];
		let categoryID = appStore.inputValues["itemCategoryID"];
		let itemWidth = appStore.inputValues["itemWidth"];
		let itemLength = appStore.inputValues["itemLength"];
		let itemHeight = appStore.inputValues["itemHeight"];
		let price = appStore.inputValues["itemPrice"];
		let desc = appStore.inputValues["itemDesc"];
		let item;

		if (
			categoryID != "" &&
			itemWidth != "" &&
			itemLength != "" &&
			itemHeight != "" &&
			price != "" &&
			desc != ""
		) {
			item = new ItemClass(
				name,
				categoryID,
				itemWidth,
				itemLength,
				itemHeight,
				price,
				desc
			);
		} else if (categoryID != "" && price != "" && desc != "")
			item = new ItemClass(name, categoryID, "", "", "", price, desc);
		else if (categoryID != "" && price != "")
			item = new ItemClass(name, categoryID, "", "", "", price);
		else if (categoryID != "") item = new ItemClass(name, categoryID);
		postData.postItem(item);
		getData.getItems(formStore);
	};
	check = (id) => {
		formStore.items = formStore.items.map((item) => {
			item.checked =
				id === item.id
					? item.checked === "true"
						? "false"
						: "true"
					: item.checked;
			return item;
		});
	};
	deleteChecked = async () => {
		let itemsURL =
			"https://api.baasic.com/beta/furniture-store-app/resources/Items";
		for await (let item of formStore.items) {
			if (item.checked === "true") {
				let itemURL = itemsURL + `/${item.id}`;
				await deleteData.deleteItem(itemURL);
				await getData.getItems(formStore);
			}
		}
	};
})();
