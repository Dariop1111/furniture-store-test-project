import React, { Component } from "react";

class ItemPagination extends Component {
	render() {
		let buttons = [];
		if (this.props.itemPage > 1) {
			buttons.push("<<");
			buttons.push("<");
		}
		for (let i = 0; i < this.props.itemPages; i++) {
			buttons.push(i + 1);
		}
		if (this.props.itemPage < this.props.itemPages) {
			buttons.push(">");
			buttons.push(">>");
		}
		return (
			<div id="list-content-pagination">
				{buttons.map((buttonText, index) => {
					return (
						<button
							key={index}
							type="button"
							onClick={() => this.props.onChangeItemPage(buttonText)}
						>
							{buttonText}
						</button>
					);
				})}
			</div>
		);
	}
}

export default ItemPagination;
