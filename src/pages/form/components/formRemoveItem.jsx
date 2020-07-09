import React, { Component } from "react";
import ItemListing from "../../../components/itemListing";
import { observer } from "mobx-react";
import getData from "../../../http/getData";
@observer
class FormRemoveItem extends Component {
	render() {
		let { items, categories } = this.props.store;
		let { search } = this.props.inputValues;
		return (
			<div>
				<div id="form-remove-search">
					<input
						type="text"
						id="search"
						name="search"
						value={search}
						onChange={this.props.onInputValue}
					></input>
					<button type="button" onClick={() => this.props.onDeleteItem()}>
						Delete
					</button>
					<button
						type="button"
						name="sortBy"
						value="abc"
						onClick={(e) => {
							this.props.onInputValue(e);
							getData.getItems(this.props.store);
						}}
					>
						Sort alphabetically
					</button>
					<button
						type="button"
						name="sortBy"
						value="price"
						onClick={(e) => {
							this.props.onInputValue(e);
							getData.getItems(this.props.store);
						}}
					>
						Sort by price
					</button>
				</div>
				<div id="form-remove-list">
					{items.map((item) => {
						return (
							<ItemListing
								key={item.id}
								category={categories.find((category) => {
									return category.id === item.category;
								})}
								item={item}
								onItemCheck={this.props.onItemCheck}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default FormRemoveItem;
