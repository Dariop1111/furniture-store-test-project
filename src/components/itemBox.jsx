import React, { Component } from "react";

class ItemBox extends Component {
	render() {
		let item = this.props.item;
		return (
			<div id={"box" + item.id} className="box">
				<div className="box-col-1">
					<h3>{item.name}</h3>

					<p>{item.price} kn</p>
				</div>
				<div className="box-col-2">
					<p>{item.desc}</p>
					<p>{item.size}</p>
				</div>
			</div>
		);
	}
}

export default ItemBox;
