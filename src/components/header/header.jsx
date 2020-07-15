import React, { Component } from "react";
import HeaderButton from "./headerButton";
class Header extends Component {
	render() {
		return (
			<div id="header">
				<div id="header-logo">
					<img
						src={require("../../assets/images/kitchen-store-logo.png")}
						onClick={() => this.props.onChangePage(0)}
					></img>
				</div>
				<ul id="header-menu">
					{this.props.pages.map((page) => {
						return (
							<HeaderButton
								onChangePage={this.props.onChangePage}
								key={page.id}
								name={page.name}
								id={page.id}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Header;
