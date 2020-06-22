import React, { Component } from "react";

class ListCategory extends Component {
	render() {
		let category = this.props.category;
		return (
			<div
				id={"list-category-" + category.id}
				className="list-category"
				onClick={() => {
					this.props.onSelectCategory(category.id);
				}}
			>
				<h3>{category.name}</h3>
			</div>
		);
	}
}

export default ListCategory;
