import React, { Component } from "react";
import { observer } from "mobx-react";
import CategoryListing from "../categoryListing";
@observer
class FormRemoveCategory extends Component {
	render() {
		let categories = this.props.categories;
		return (
			<div id="form-remove-category">
				<button type="button" onClick={this.props.onDeleteCategory}>
					Delete
				</button>
				{categories.map((category) => {
					return (
						<CategoryListing
							key={category.id}
							category={category}
							onSelectCategory={this.props.onSelectCategory}
							onCategoryCheck={this.props.onCategoryCheck}
						/>
					);
				})}
			</div>
		);
	}
}

export default FormRemoveCategory;
