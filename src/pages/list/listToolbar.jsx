import React, { Component } from "react";
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
					onClick={this.props.onInputValue}
				>
					Sort alphabetically
				</button>
				<button
					type="button"
					name="sortBy"
					value="cba"
					onClick={this.props.onInputValue}
				>
					Sort reverse alphabetically
				</button>
				<button
					type="button"
					name="sortBy"
					value="priceMax"
					onClick={this.props.onInputValue}
				>
					Sort by max price
				</button>
				<button
					type="button"
					name="sortBy"
					value="priceMin"
					onClick={this.props.onInputValue}
				>
					Sort by min price
				</button>
			</form>
		);
	}
}

export default ListToolbar;
