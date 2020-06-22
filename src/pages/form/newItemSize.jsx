import React, { Component } from "react";
import { observer } from "mobx-react";
@observer
class NewItemSize extends Component {
	render() {
		let form = this.props.form;

		return (
			<div>
				<div id="item-size">
					<input {...form.$("itemWidth").bind()} />x
					<input {...form.$("itemLength").bind()} />x
					<input {...form.$("itemHeight").bind()} />
				</div>
			</div>
		);
	}
}

export default NewItemSize;
