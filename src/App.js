import React, { Component } from "react";
//CSS
import "./assets/style.css";
//mobX
import { observer } from "mobx-react";
//Components
import Header from "./components/header/header";
import Home from "./components/home/home";
import List from "./components/list/list";
import Form from "./components/form/form";
//Classes
import ItemClass from "./classes/itemClass.js";
import CategoryClass from "./classes/categoryClass.js";
@observer
class App extends Component {
	constructor(props) {
		super(props);
		this.updateValue = this.updateValue.bind(this);
		this.handleInputValue = this.handleInputValue.bind(this);
	}
	render() {
		let {
			currentPage,
			pages,
			items,
			categories,
			inputValues,
			itemBoxPagination,
		} = this.props.store;
		let components = [
			<Home
				items={items}
				categories={categories}
				onChangePage={this.handleChangePage}
				onSelectCategory={this.handleSelectCategory}
			/>,
			<List
				itemBoxPagination={itemBoxPagination}
				categories={categories}
				onChangeItemPage={this.handleChangeItemPage}
				inputValues={inputValues}
				onInputValue={this.handleInputValue}
				onSelectCategory={this.handleSelectCategory}
			/>,
			<Form
				items={items}
				inputValues={inputValues}
				itemBoxPagination={itemBoxPagination}
				categories={categories}
				onInputValue={this.handleInputValue}
				onAddNewItem={this.handleAddNewItem}
				onAddNewCategory={this.handleAddNewCategory}
				onChangeItemPage={this.handleChangeItemPage}
				onDeleteItem={this.handleDeleteCheckedItems}
				onDeleteCategory={this.handleDeleteCheckedCategory}
				onCheck={this.handleCheck}
				onItemCheck={this.handleItemCheck}
				onSelectCategory={this.handleSelectCategory}
				onEdit={this.handleEdit}
				onCategoryCheck={this.handleCategoryCheck}
			/>,
		];

		return (
			<div>
				<Header pages={pages} onChangePage={this.handleChangePage} />
				{components[currentPage]}
			</div>
		);
	}
	handleSelectCategory = (categoryName) => {
		if (categoryName != this.props.store.inputValues["categorySelected"]) {
			this.props.store.inputValues["categorySelected"] = categoryName;
			this.props.store.itemPage = 1;
		} else {
			this.props.store.inputValues["categorySelected"] = "";
		}
	};

	handleChangePage = (pageID) => {
		this.props.store.currentPage = pageID;
	};

	handleChangeItemPage = (buttonTxt) => {
		if (buttonTxt === ">>") {
			this.props.store.itemPage = this.props.store.itemBoxPagination.itemPages;
		} else if (buttonTxt === "<<") {
			this.props.store.itemPage = 1;
		} else if (buttonTxt === ">") {
			this.props.store.itemPage++;
		} else if (buttonTxt === "<") {
			this.props.store.itemPage--;
		} else {
			this.props.store.itemPage = buttonTxt;
		}
	};

	//Handles updates for all inputs
	handleInputValue = (event) => {
		this.updateValue(event.target.name, event.target.value);
		console.log(event.target.name);
		console.log(event.target.value);
	};
	updateValue = (key, value) => {
		this.props.store.inputValues[key] = value;
	};

	//Adding items
	handleAddNewItem = () => {
		let name = this.props.store.inputValues["itemName"];
		let categoryID = this.props.store.inputValues["itemCategoryID"];
		let itemWidth = this.props.store.inputValues["itemWidth"];
		let itemLength = this.props.store.inputValues["itemLength"];
		let itemHeight = this.props.store.inputValues["itemHeight"];
		let price = this.props.store.inputValues["itemPrice"];
		let desc = this.props.store.inputValues["itemDesc"];

		if (
			categoryID != -1 &&
			itemWidth != "" &&
			itemLength != "" &&
			itemHeight != "" &&
			price != 0 &&
			desc != ""
		)
			this.props.store.items.push(
				new ItemClass(
					name,
					categoryID,
					itemWidth,
					itemLength,
					itemHeight,
					price,
					desc
				)
			);
		else if (categoryID != -1 && price != 0 && desc != "")
			this.props.store.items.push(
				new ItemClass(name, categoryID, "", "", "", price, desc)
			);
		else if (categoryID != -1 && price != 0)
			this.props.store.items.push(new ItemClass(name, categoryID, "", price));
		else if (categoryID != -1)
			this.props.store.items.push(new ItemClass(name, categoryID));

		this.resetItemForm();
	};

	//Resets item form to default values
	resetItemForm = () => {
		this.props.store.inputValues["itemPrice"] = 0;
		this.props.store.inputValues["itemDesc"] = "";
		this.props.store.inputValues["enableSize"] = false;
		this.props.store.inputValues["itemWidth"] = "";
		this.props.store.inputValues["itemLength"] = "";
		this.props.store.inputValues["itemHeight"] = "";
		this.props.store.inputValues["itemName"] = "";
		this.props.store.inputValues["itemCategoryID"] = 0;
	};

	handleEdit = (item) => {
		this.props.store.inputValues["itemPrice"] = item.price;
		this.props.store.inputValues["itemDesc"] = item.desc;
		this.props.store.inputValues["enableSize"] = true;
		this.props.store.inputValues["itemWidth"] = item.itemWidth;
		this.props.store.inputValues["itemLength"] = item.itemLength;
		this.props.store.inputValues["itemHeight"] = item.itemHeight;
		this.props.store.inputValues["itemName"] = item.name;
		this.props.store.inputValues["itemCategoryID"] = item.category;
		this.props.store.items = this.props.store.items.filter((filteringItem) => {
			return filteringItem.id != item.id;
		});
	};
	//Adding Categories
	handleAddNewCategory = () => {
		let name = this.props.store.inputValues["categoryName"];
		this.props.store.categories.push(new CategoryClass(name));
		this.resetCategoryForm();
	};

	resetCategoryForm = () => {
		this.props.store.inputValues["categoryName"] = "";
	};
	//Checking or unchecking items
	handleItemCheck = (id) => {
		this.props.store.items = this.props.store.items.map((item) => {
			item.checked = id === item.id ? !item.checked : item.checked;
			return item;
		});
	};
	//Checking or unchecking categories
	handleCategoryCheck = (id) => {
		this.props.store.numOfItems();
		this.props.store.categories = this.props.store.categories.map(
			(category) => {
				category.checked =
					id === category.id && category.numOfItems === 0
						? !category.checked
						: category.checked;
				return category;
			}
		);
	};
	handleCheck = (checkName) => {
		this.props.store.inputValues[checkName] = !this.props.store.inputValues[
			checkName
		];
	};
	//Deleting checked category
	handleDeleteCheckedCategory = () => {
		this.props.store.categories = this.props.store.categories.filter(
			(category) => {
				return category.checked === false;
			}
		);
	};
	//Deleting checked items
	handleDeleteCheckedItems = () => {
		this.props.store.items = this.props.store.items.filter(
			(item) => item.checked === false
		);
	};
}
export default App;
