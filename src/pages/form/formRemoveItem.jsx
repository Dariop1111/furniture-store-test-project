import React, { Component } from "react";
import ItemListing from "../../components/itemListing";
import { observer } from "mobx-react";
@observer
class FormRemoveItem extends Component {
	render() {
		let items = this.props.items;
		let categories = this.props.categories;
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
					<br></br>
					<button
						type="button"
						name="sortBy"
						value="abc"
						onClick={this.props.onInputValue}
					>
						Sort alphabetically
					</button>
					<button
						type="button"
						name="sortBy"
						value="cba"
						onClick={this.props.onInputValue}
					>
						Sort reverse alphabetically
					</button>
					<button
						type="button"
						name="sortBy"
						value="priceMax"
						onClick={this.props.onInputValue}
					>
						Sort by max price
					</button>
					<button
						type="button"
						name="sortBy"
						value="priceMin"
						onClick={this.props.onInputValue}
					>
						Sort by min price
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
