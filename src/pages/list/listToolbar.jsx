import React, { Component } from "react";
import getData from "../../http/getData";
class ListToolbar extends Component {
	render() {
		let { search } = this.props.inputValues;
		return (
			<form>
				<input
					type="text"
					id="search"
					name="search"
					value={search}
					onChange={this.props.onInputValue}
				></input>
				<button
					type="button"
					name="sortBy"
					value="abc"
					onClick={(e) => {
						this.props.onInputValue(e);
						getItems(this.props.store);
					}}
				>
					Sort alphabetically
				</button>
				<button
					type="button"
					name="sortBy"
					value="price"
					onClick={(e) => {
						this.props.onInputValue(e);
						getData.getItems(this.props.store);
					}}
				>
					Sort by price
				</button>
			</form>
		);
	}
}

export default ListToolbar;
