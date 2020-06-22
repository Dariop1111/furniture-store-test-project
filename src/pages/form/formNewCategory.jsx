import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class FormNewCategory extends Component {
	render() {
		let form = this.props.form;
		return (
			<form id="form-add-category">
				<h3>Add new category</h3>
				<label htmlFor={form.$("categoryName").id}>
					{form.$("categoryName").label}
				</label>
				<input {...form.$("categoryName").bind()} />
				<button type="button" onClick={form.onSubmit}>
					Submit
				</button>
			</form>
		);
	}
}

export default FormNewCategory;
