import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";

import { appStore, formStore } from "../../stores";
import ItemClass from "../../classes/itemClass";
import { getData, postData } from "../../http";

export default class MyForm extends Form {
	/*
    Below we are returning a `plugins` object using the `validatorjs` package
    to enable `DVR` functionalities (Declarative Validation Rules).
  */
	plugins() {
		return {
			dvr: dvr(validatorjs),
		};
	}

	/*
    Return the `fields` as a collection into the `setup()` method
    with a `rules` property for the validation.
  */
	setup() {
		let inputs = [
			{
				name: "itemName",
				label: "Item Name",
				placeholder: "Insert new item name",
				rules: "required|string",
			},
			{
				name: "itemPrice",
				label: "Price",
				placeholder: "Insert new item price",
			},
			{
				name: "itemDesc",
				label: "Description",
				placeholder: "Insert new item description",
				type: "textbox",
			},
			{
				name: "itemWidth",
				label: "itemWidth",
				placeholder: "Width",
			},
			{
				name: "itemLength",
				label: "itemLength",
				placeholder: "Length",
			},
			{
				name: "itemHeight",
				label: "itemHeight",
				placeholder: "Height",
			},
		];

		return {
			fields: inputs,
		};
	}

	/*
    Event Hooks
  */
	hooks() {
		return {
			/*
        Success Validation Hook
      */
			onSuccess(form) {
				form.fields.forEach((input) => {
					appStore.inputValues[input.name] = input.value;
				});
				this.handleAddNewItem();
				form.fields.forEach((input) => {
					appStore.inputValues[input.name] = "";
				});
			},
			/*
        Error Validation Hook
      */
			onError(form) {
				alert("Form has errors!");
			},
		};
	}
	//Adding items
	handleAddNewItem = () => {
		let name = appStore.inputValues["itemName"];
		let categoryID = appStore.inputValues["itemCategoryID"];
		let itemWidth = appStore.inputValues["itemWidth"];
		let itemLength = appStore.inputValues["itemLength"];
		let itemHeight = appStore.inputValues["itemHeight"];
		let price = appStore.inputValues["itemPrice"];
		let desc = appStore.inputValues["itemDesc"];
		let item;

		if (
			categoryID != "" &&
			itemWidth != "" &&
			itemLength != "" &&
			itemHeight != "" &&
			price != "" &&
			desc != ""
		) {
			item = new ItemClass(
				name,
				categoryID,
				itemWidth,
				itemLength,
				itemHeight,
				price,
				desc
			);
		} else if (categoryID != "" && price != "" && desc != "")
			item = new ItemClass(name, categoryID, "", "", "", price, desc);
		else if (categoryID != "" && price != "")
			item = new ItemClass(name, categoryID, "", "", "", price);
		else if (categoryID != "") item = new ItemClass(name, categoryID);
		postData.postItem(item);
		getData.getItems(formStore);
	};
}
