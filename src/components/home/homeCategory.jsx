import React, { Component } from "react";

class HomeCategory extends Component {
	render() {
		let category = this.props.category;
		return (
			<div
				id={"home-category-" + category.id}
				className="home-category"
				onClick={() => {
					this.props.onSelectCategory(category.name);
					this.props.onChangePage(1);
				}}
			>
				<h3>{category.name}</h3>
			</div>
		);
	}
}

export default HomeCategory;
