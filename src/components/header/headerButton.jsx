import React, { Component } from "react";

class HeaderButton extends Component {
	render() {
		return (
			<li onClick={() => this.props.onChangePage(this.props.id)}>
				{this.props.name}
			</li>
		);
	}
}

export default HeaderButton;
