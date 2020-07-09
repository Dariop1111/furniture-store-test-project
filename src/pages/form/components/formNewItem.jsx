import React, { Component } from "react";
import { observer } from "mobx-react";
import NewItemCategory from "./newItemCategory";
import NewItemSize from "./newItemSize";

@observer
class FormNewItem extends Component {
	render() {
		let form = this.props.form;
		let categories = this.props.categories;
		return (
			<form id="form-add-items">
				<h3>Add new item</h3>

				<label htmlFor={form.$("itemName").id}>
					{form.$("itemName").label}
				</label>
				<input {...form.$("itemName").bind()} />
				<br></br>

				<label htmlFor={form.$("itemPrice").id}>
					{form.$("itemPrice").label}
				</label>
				<input {...form.$("itemPrice").bind()} />

				<NewItemSize form={form} />

				<label htmlFor={form.$("itemDesc").id}>
					{form.$("itemDesc").label}
				</label>
				<input {...form.$("itemDesc").bind()} />

				<h4>Choose item Category</h4>
				{categories.map((category, index) => {
					return (
						<NewItemCategory
							key={index}
							category={category}
							inputValues={this.props.inputValues}
							onInputValue={this.props.onInputValue}
						/>
					);
				})}

				<button type="button" onClick={form.onSubmit}>
					Submit
				</button>
			</form>
		);
	}
}

export default FormNewItem;
