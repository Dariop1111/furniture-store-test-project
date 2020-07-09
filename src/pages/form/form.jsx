import React, { Component } from "react";
import { observer } from "mobx-react";

import { ItemPagination } from "../../components";
import {
	FormNewCategory,
	FormNewItem,
	FormRemoveItem,
	FormRemoveCategory,
} from "./components";
import { getData, deleteData } from "../../http";
import store from "../../stores/formStore";

import FormItem from "./formNewItemClass";
import FormCategory from "./formNewCategoryClass";
let formItem = new FormItem();
let formCategory = new FormCategory();
//Classes
@observer
class Form extends Component {
	render() {
		let { itemBoxPagination, categories } = store;
		let { itemPages, itemPage } = itemBoxPagination;
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
		getData.getItems(store);¸¸
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
		for await (let item of store.items) {
			console.log(item.checked);
			if (item.checked === "true") {
				let itemURL = itemsURL + `/${item.id}`;
				await deleteData.deleteItem(itemURL);
				await getData.getItems(store);
			}
		}
	};
	//Delete cheked categories
	handleDeleteCheckedCategory = async () => {
		let categoriesURL =
			"https://api.baasic.com/beta/furniture-store-app/resources/Categories";
		for await (let category of store.categories) {
			if (category.checked === "true") {
				let categoryURL = categoriesURL + `/${category.id}`;
				await deleteData.deleteCategory(categoryURL);
				await getData.getCategories(store);
			}
		}
	};
}

export default Form;
