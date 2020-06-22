import React, { Component } from "react";
import CategoryCheckbox from "./categoryCheckbox";

class CategoryListing extends Component {
	render() {
		let category = this.props.category;
		return (
			<p>
				<CategoryCheckbox
					key={category.id}
					category={category}
					onCategoryCheck={this.props.onCategoryCheck}
				/>
				<label
					htmlFor={"categoryRemove-" + category.id}
					onClick={() => {
						this.props.onSelectCategory(category.id);
					}}
				>
					{category.name}
				</label>
			</p>
		);
	}
}

export default CategoryListing;
