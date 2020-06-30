import React, { Component } from "react";
import FormNewCategory from "./formNewCategory";
import FormNewItem from "./formNewItem";
import FormRemoveItem from "./formRemoveItem";
import FormRemoveCategory from "./formRemoveCategory";
import ItemPagination from "../../components/itemPagination.jsx";

import store from "../../stores/formStore";
import listStore from "../../stores/listStore";
import homeStore from "../../stores/homeStore";
import { observer } from "mobx-react";
import FormItem from "./formNewItemClass";
import FormCategory from "./formNewCategoryClass";
let formItem = new FormItem();
let formCategory = new FormCategory();
//Classes
import ItemClass from "../../classes/itemClass";
import { getItems, getCategories, getAccessToken } from "../../stores/getData";
@observer
class Form extends Component {
	render() {
		let { itemBoxPagination, categories } = store;
		let { trimmedItems, itemPages, itemPage } = itemBoxPagination;
		return (
			<div id="form">
				<div id="form-add">
					<FormNewItem
						categories={categories}
						form={formItem}
						inputValues={this.props.inputValues}
						onInputValue={this.props.onInputValue}
					/>

					<FormNewCategory form={formCategory} />
				</div>
				<div id="form-remove">
					<FormRemoveCategory
						store={store}
						onCategoryCheck={this.handleCategoryCheck}
						onDeleteCategory={this.handleDeleteCheckedCategory}
						onSelectCategory={this.props.onSelectCategory}
					/>
					<div id="form-remove-item">
						<FormRemoveItem
							store={store}
							inputValues={this.props.inputValues}
							onInputValue={this.props.onInputValue}
							onDeleteItem={this.handleDeleteCheckedItems}
							onItemCheck={this.handleItemCheck}
						/>
						<ItemPagination
							itemPages={itemPages}
							itemPage={itemPage}
							onChangeItemPage={this.handleChangeItemPage}
						/>
					</div>
				</div>
			</div>
		);
	}

	handleChangeItemPage = (buttonTxt) => {
		if (buttonTxt === ">>") {
			store.itemPage = store.itemBoxPagination.itemPages;
		} else if (buttonTxt === "<<") {
			store.itemPage = 1;
		} else if (buttonTxt === ">") {
			store.itemPage++;
		} else if (buttonTxt === "<") {
			store.itemPage--;
		} else {
			store.itemPage = buttonTxt;
		}
		getItems(store);
	};

	resetCategoryForm = () => {
		this.props.inputValues["categoryName"] = "";
	};
	//Checking or unchecking items
	handleItemCheck = (id) => {
		store.items = store.items.map((item) => {
			item.checked =
				id === item.id
					? item.checked === "true"
						? "false"
						: "true"
					: item.checked;
			return item;
		});
	};
	//Checking or unchecking categories
	handleCategoryCheck = (id) => {
		store.numOfItems();
		store.categories = store.categories.map((category) => {
			category.checked =
				id === category.id && category.numOfItems === 0
					? category.checked === "true"
						? "false"
						: "true"
					: category.checked;
			return category;
		});
	};
	handleCheck = (checkName) => {
		this.props.inputValues[checkName] = !this.props.inputValues[checkName];
	};

	//Deleting checked items
	handleDeleteCheckedItems = async () => {
		let itemsURL =
			"https://api.baasic.com/beta/furniture-store-app/resources/Items";
		let accessToken = await getAccessToken();
		for await (let item of store.items) {
			if (item.checked === "true") {
				let itemURL = itemsURL + `/${item.id}`;
				console.log(item.checked);
				fetch(itemURL, {
					method: "DELETE",
					headers: {
						Authorization: `bearer ${accessToken}`,
						"Content-Type": "application/json",
					},
				});
			}
			getItems(store);
		}
	};
	//Delete cheked categories
	handleDeleteCheckedCategory = async () => {
		let categoriesURL =
			"https://api.baasic.com/beta/furniture-store-app/resources/Categories";
		let accessToken = await getAccessToken();
		for await (let category of store.categories) {
			if (category.checked === "true") {
				let categoryURL = categoriesURL + `/${category.id}`;
				fetch(categoryURL, {
					method: "DELETE",
					headers: {
						Authorization: `bearer ${accessToken}`,
						"Content-Type": "application/json",
					},
				});
				getCategories(store);
			}
		}
	};
}

export default Form;
