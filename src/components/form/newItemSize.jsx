import React, { Component } from "react";
import { observer } from "mobx-react";
@observer
class NewItemSize extends Component {
	render() {
		let {
			enableSize,
			itemWidth,
			itemLength,
			itemHeight,
		} = this.props.inputValues;

		let enableItemSize = () => {
			console.log(enableSize);
			if (enableSize) {
				return (
					<div>
						<div id="item-size">
							<span>Width</span>
							<span>Length</span>
							<span>Height</span>
							<br></br>
							<input
								type="text"
								id="itemWidth"
								name="itemWidth"
								value={itemWidth}
								onChange={this.props.onInputValue}
							></input>
							x
							<input
								type="text"
								id="itemLength"
								name="itemLength"
								value={itemLength}
								onChange={this.props.onInputValue}
							></input>
							x
							<input
								type="text"
								id="itemHeight"
								name="itemHeight"
								value={itemHeight}
								onChange={this.props.onInputValue}
							></input>
						</div>
					</div>
				);
			} else return <div></div>;
		};
		return (
			<div>
				<label htmlFor="enableSize">
					Enable size:
					<input
						type="checkbox"
						id="enableSize"
						name="enableSize"
						value={enableSize}
						onChange={() => {
							this.props.onCheck("enableSize");
						}}
					></input>
				</label>
				{enableItemSize()}
			</div>
		);
	}
}

export default NewItemSize;
