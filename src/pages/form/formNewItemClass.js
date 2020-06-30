import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import store from "../../stores/appStore";
import formStore from "../../stores/formStore";
import listStore from "../../stores/listStore";
import homeStore from "../../stores/homeStore";
import ItemClass from "../../classes/itemClass";
import { getItems, getAccessToken } from "../../stores/getData";

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
					store.inputValues[input.name] = input.value;
				});
				console.log(store.inputValues["itemPrice"]);
				this.handleAddNewItem();
				form.fields.forEach((input) => {
					store.inputValues[input.name] = "";
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
		let name = store.inputValues["itemName"];
		let categoryID = store.inputValues["itemCategoryID"];
		let itemWidth = store.inputValues["itemWidth"];
		let itemLength = store.inputValues["itemLength"];
		let itemHeight = store.inputValues["itemHeight"];
		let price = store.inputValues["itemPrice"];
		let desc = store.inputValues["itemDesc"];
		let item;

		if (
			categoryID != "" &&
			itemWidth != "" &&
			itemLength != "" &&
			itemHeight != "" &&
			price != "" &&
			desc != ""
		) {
			console.log(price != "");
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
		console.log(item.price);
		this.sendNewItemToDB(item);
	};
	//Sends new item to database
	sendNewItemToDB = async (item) => {
		item = JSON.stringify(item);
		let itemsURL =
			"https://api.baasic.com/beta/furniture-store-app/resources/Items";
		if (item) {
			let accessToken = await getAccessToken();
			await fetch(itemsURL, {
				method: "POST",

				headers: {
					Authorization: `bearer ${accessToken}`,
					"Content-Type": "application/json",
				},
				body: item,
			});
			getItems(formStore);
		}
	};
}
