import React, { Component } from "react";
import ItemBox from "../../components/itemBox";
import ListCategory from "./listCategory.jsx";
import ListToolbar from "./listToolbar.jsx";
import ItemPagination from "../../components/itemPagination.jsx";

import store from "../../stores/listStore.js";
import { observer } from "mobx-react";
@observer
class List extends Component {
	render() {
		let { categories, itemBoxPagination } = store;
		let { trimmedItems, itemPages, itemPage } = itemBoxPagination;
		return (
			<div id="list">
				<div id="col-1">
					<div id="list-categories">
						{categories.map((category) => {
							return (
								<ListCategory
									key={category.id}
									category={category}
									onSelectCategory={this.props.onSelectCategory}
								/>
							);
						})}
					</div>
				</div>
				<div id="col-2">
					<div id="list-toolbar">
						<ListToolbar
							inputValues={this.props.inputValues}
							onInputValue={this.props.onInputValue}
						/>
					</div>

					<div id="list-content">
						<div id="list-content-box">
							{trimmedItems.map((item) => {
								return <ItemBox key={item.id} item={item} />;
							})}
						</div>
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
	};
	updateStore(store) {
		let itemsURL =
			"https://api.baasic.com/beta/furniture-store-app/resources/Items";
		let categoriesURL =
			"https://api.baasic.com/beta/furniture-store-app/resources/Categories";
		fetch(itemsURL)
			.then((response) => response.json())
			.then((data) => {
				store.items = data.item;
			})
			.catch(() => {
				store.items = [];
			});
		fetch(categoriesURL)
			.then((response) => response.json())
			.then((data) => {
				store.categories = data.item;
			})
			.catch(() => {
				store.categories = [];
			});
	}
}

export default List;
