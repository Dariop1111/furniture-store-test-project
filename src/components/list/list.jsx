import React, { Component } from "react";
import ItemBox from "../itemBox";
import ListCategory from "./listCategory.jsx";
import ListToolbar from "./listToolbar.jsx";
import ItemPagination from "../itemPagination.jsx";

class List extends Component {
	render() {
		let { trimmedItems, itemPages, itemPage } = this.props.itemBoxPagination;
		let categories = this.props.categories;
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
							onChangeItemPage={this.props.onChangeItemPage}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default List;
