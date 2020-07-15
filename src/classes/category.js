import CategoryClass from "./categoryClass";
import { postData, getData, deleteData } from "../http";
import { appStore, formStore } from "../stores";

export default new (class Category {
	addNew = () => {
		let name = appStore.inputValues["categoryName"];
		if (name != "") {
			let category = new CategoryClass(name);
			postData.postCategory(category);
			getData.getCategories(formStore);
		}
	};
	check = (id) => {
		formStore.numOfItems();
		formStore.categories = formStore.categories.map((category) => {
			category.checked =
				id === category.id && category.numOfItems === 0
					? category.checked === "true"
						? "false"
						: "true"
					: category.checked;
			return category;
		});
	};
	deleteChecked = async () => {
		let categoriesURL =
			"https://api.baasic.com/beta/furniture-store-app/resources/Categories";
		for await (let category of formStore.categories) {
			if (category.checked === "true") {
				let categoryURL = categoriesURL + `/${category.id}`;
				await deleteData.deleteCategory(categoryURL);
				await getData.getCategories(formStore);
			}
		}
	};
})();
