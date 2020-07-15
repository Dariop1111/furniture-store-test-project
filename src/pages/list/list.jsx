import React, { Component } from "react";
import { observer } from "mobx-react";

import { ItemBox, ItemPagination } from "../../components";
import { getData } from "../../http";
import store from "../../stores/listStore.js";

import ListCategory from "./listCategory.jsx";
import ListToolbar from "./listToolbar.jsx";
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
									onSelectCategory={(e) => {
										this.props.onSelectCategory(e);
										getData.getItems(store);
									}}
								/>
							);
						})}
					</div>
				</div>
				<div id="col-2">
					<div id="list-toolbar">
						<ListToolbar
							store={store}
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
		getData.getItems(store);
	};
}

export default List;
