import React, { Component } from "react";
import { observer } from "mobx-react";

import { ItemPagination } from "../../components";
import {
	FormNewCategory,
	FormNewItem,
	FormRemoveItem,
	FormRemoveCategory,
} from "./components";
import { getData } from "../../http";
import store from "../../stores/formStore";
import { item, category } from "../../classes";

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
						onCategoryCheck={category.check}
						onDeleteCategory={category.deleteChecked}
						onSelectCategory={this.props.onSelectCategory}
					/>
					<div id="form-remove-item">
						<FormRemoveItem
							store={store}
							inputValues={this.props.inputValues}
							onInputValue={this.props.onInputValue}
							onDeleteItem={item.deleteChecked}
							onItemCheck={item.check}
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
		getData.getItems(store);
	};
}

export default Form;
