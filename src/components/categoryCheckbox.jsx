import React, { Component } from "react";

class CategoryCheckbox extends Component {
	render() {
		return (
			<input
				type="checkbox"
				id={"checkbox" + this.props.category.id}
				defaultChecked={this.props.category.checked}
				onClick={() => this.props.onCategoryCheck(this.props.category.id)}
			></input>
		);
	}
}

export default CategoryCheckbox;
