import React, { Component } from "react";
import FormNewCategory from "./formNewCategory";
import FormNewItem from "./formNewItem";
import FormRemoveItem from "./formRemoveItem";
import FormRemoveCategory from "./formRemoveCategory";
import ItemPagination from "../itemPagination.jsx";
import { observer } from "mobx-react";
@observer
class Form extends Component {
	render() {
		let { trimmedItems, itemPages, itemPage } = this.props.itemBoxPagination;
		let categories = this.props.categories;
		let inputValues = this.props.inputValues;
		return (
			<div id="form">
				<div id="form-add">
					<FormNewItem
						categories={categories}
						inputValues={inputValues}
						items={this.props.items}
						onCheck={this.props.onCheck}
						onAddNewItem={this.props.onAddNewItem}
						onInputValue={this.props.onInputValue}
					/>

					<FormNewCategory
						categories={categories}
						inputValues={inputValues}
						onInputValue={this.props.onInputValue}
						onAddNewCategory={this.props.onAddNewCategory}
					/>
				</div>
				<div id="form-remove">
					<FormRemoveCategory
						categories={categories}
						onCategoryCheck={this.props.onCategoryCheck}
						onDeleteCategory={this.props.onDeleteCategory}
						onSelectCategory={this.props.onSelectCategory}
					/>
					<div id="form-remove-item">
						<FormRemoveItem
							items={trimmedItems}
							categories={categories}
							inputValues={inputValues}
							onInputValue={this.props.onInputValue}
							onDeleteItem={this.props.onDeleteItem}
							onItemCheck={this.props.onItemCheck}
							onEdit={this.props.onEdit}
						/>
						<ItemPagination
							itemPages={itemPages}
							itemPage={itemPage}
							onChangeItemPage={this.props.onChangeItemPage}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Form;
