import React, { Component } from "react";
import { observer } from "mobx-react";
import CategoryListing from "../../../components/categoryListing";
import { httpClient } from "../../../http";
@observer
class FormRemoveCategory extends Component {
	render() {
		let { categories } = this.props.store;
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
							onSelectCategory={(e) => {
								this.props.onSelectCategory(e);
								httpClient.getItems(this.props.store);
							}}
							onCategoryCheck={this.props.onCategoryCheck}
						/>
					);
				})}
			</div>
		);
	}
}

export default FormRemoveCategory;
