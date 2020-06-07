import React, { Component } from "react";

class ItemCheckbox extends Component {
	render() {
		return (
			<input
				type="checkbox"
				id={"item-checkbox-" + this.props.item.id}
				defaultChecked={this.props.item.checked}
				onClick={() => this.props.onItemCheck(this.props.item.id)}
			></input>
		);
	}
}

export default ItemCheckbox;
