import React, { Component } from "react";
import ItemCheckbox from "./itemCheckbox.jsx";
class ItemListing extends Component {
	render() {
		let item = this.props.item;
		let category = this.props.category;
		return (
			<div key={item.id} className="item-listing">
				<label key={item.id} htmlFor={"item-checkbox-" + this.props.item.id}>
					<ItemCheckbox
						key={item.id}
						item={item}
						onItemCheck={this.props.onItemCheck}
					/>
					#{item.id} {item.name} {category.name} {item.size} {item.price}kn{" "}
					{item.desc}
				</label>
				<button type="button" onClick={() => this.props.onEdit(item)}>
					Edit
				</button>
			</div>
		);
	}
}

export default ItemListing;
