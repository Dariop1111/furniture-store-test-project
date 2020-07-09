import React, { Component } from "react";
import { observer } from "mobx-react";
@observer
class NewItemCategory extends Component {
	render() {
		let category = this.props.category;
		return (
			<label key={category.id} htmlFor={"category-" + category.id}>
				{category.name}
				<input
					key={category.id}
					type="radio"
					id={"category-" + category.id}
					name="itemCategoryID"
					value={category.id}
					onChange={this.props.onInputValue}
				></input>
			</label>
		);
	}
}

export default NewItemCategory;
