import React, { Component } from "react";
import { observer } from "mobx-react";
@observer
class FormNewCategory extends Component {
	state = {};
	render() {
		let { categoryName } = this.props.inputValues;
		return (
			<div id="form-add-category">
				<h3>Add new category</h3>
				<label htmlFor="categoryName">
					Name:
					<input
						type="text"
						id="categoryName"
						name="categoryName"
						value={categoryName}
						onChange={this.props.onInputValue}
					></input>
				</label>
				<button
					type="button"
					onClick={() => {
						this.props.onAddNewCategory();
					}}
				>
					Add new category
				</button>
			</div>
		);
	}
}

export default FormNewCategory;
