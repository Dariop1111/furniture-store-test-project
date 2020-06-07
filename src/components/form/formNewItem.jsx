import React, { Component } from "react";
import { observer } from "mobx-react";
import NewItemCategory from "./newItemCategory";
import NewItemSize from "./newItemSize";
@observer
class FormNewItem extends Component {
	render() {
		let categories = this.props.categories;
		let { itemName, itemPrice, itemDesc } = this.props.inputValues;
		return (
			<div id="form-add-items">
				<h3>Add new item</h3>
				<label htmlFor="name">
					Name:
					<input
						type="text"
						id="name"
						name="itemName"
						value={itemName}
						onChange={this.props.onInputValue}
					></input>
				</label>
				<br></br>
				<label htmlFor="price">
					Price:
					<input
						type="text"
						id="price"
						name="itemPrice"
						value={itemPrice}
						onChange={this.props.onInputValue}
					></input>
				</label>
				<NewItemSize
					onInputValue={this.props.onInputValue}
					inputValues={this.props.inputValues}
					onCheck={this.props.onCheck}
				/>
				<label htmlFor="desc">
					Description:
					<textarea
						id="desc"
						name="itemDesc"
						value={itemDesc}
						onChange={this.props.onInputValue}
					></textarea>
				</label>
				<h4>Choose item Category</h4>
				{categories.map((category) => {
					return (
						<NewItemCategory
							key={category.id}
							category={category}
							onInputValue={this.props.onInputValue}
						/>
					);
				})}
				<button
					type="button"
					onClick={() => {
						this.props.onAddNewItem();
					}}
				>
					Add new item
				</button>
			</div>
		);
	}
}

export default FormNewItem;
