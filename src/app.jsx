import React, { Component } from "react";
import store from "./stores/appStore.js";
//CSS
import "./assets/style.css";
//mobX
import { observer } from "mobx-react";
//Components
import Header from "./components/header/header";
import Home from "./pages/home/home";
import List from "./pages/list/list";
import Form from "./pages/form/form";
@observer
class App extends Component {
	constructor(props) {
		super(props);
		this.updateValue = this.updateValue.bind(this);
		this.handleInputValue = this.handleInputValue.bind(this);
	}
	render() {
		let { currentPage, pages, inputValues } = store;
		let components = [
			<Home
				onChangePage={this.handleChangePage}
				onSelectCategory={this.handleSelectCategory}
			/>,
			<List
				inputValues={inputValues}
				onInputValue={this.handleInputValue}
				onSelectCategory={this.handleSelectCategory}
			/>,
			<Form
				inputValues={inputValues}
				onInputValue={this.handleInputValue}
				onSelectCategory={this.handleSelectCategory}
			/>,
		];

		return (
			<div>
				<Header pages={pages} onChangePage={this.handleChangePage} />
				{components[currentPage]}
			</div>
		);
	}
	handleSelectCategory = (categoryID) => {
		if (categoryID != store.inputValues["categorySelected"]) {
			store.inputValues["categorySelected"] = categoryID;
			store.itemPage = 1;
		} else {
			store.inputValues["categorySelected"] = "";
		}
	};

	handleChangePage = (pageID) => {
		store.currentPage = pageID;
	};

	//Handles updates for all inputs
	handleInputValue = (event) => {
		this.updateValue(event.target.name, event.target.value);
	};
	updateValue = (key, value) => {
		store.inputValues[key] = value;
	};
}
export default App;
