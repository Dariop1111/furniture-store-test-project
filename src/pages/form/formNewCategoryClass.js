import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import store from "../../stores/appStore";
import formStore from "../../stores/formStore";
import listStore from "../../stores/listStore";
import homeStore from "../../stores/homeStore";

import CategoryClass from "../../classes/categoryClass.js";
import { getCategories, getAccessToken } from "../../stores/getData";
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
		return {
			fields: [
				{
					name: "categoryName",
					label: "Category Name",
					placeholder: "Insert new category name",
					rules: "required|string|min:1",
				},
			],
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
				this.handleAddNewCategory();
				form.fields.forEach((input) => {
					store.inputValues[input.name] = "";
				});
			},
			/*
        Error Validation Hook
      */
			onError(form) {
				console.log("All form errors", form.errors());
			},
		};
	}

	//Adding Categories
	handleAddNewCategory = () => {
		let name = store.inputValues["categoryName"];
		if (name != "") {
			let category = new CategoryClass(name);
			this.sendNewCategoryToDB(category);
		}
	};
	//Sends new category to database
	sendNewCategoryToDB = async (category) => {
		category = JSON.stringify(category);
		let categoriesURL =
			"https://api.baasic.com/beta/furniture-store-app/resources/Categories";
		if (category) {
			let accessToken = await getAccessToken();
			await fetch(categoriesURL, {
				method: "POST",
				headers: {
					Authorization: `bearer ${accessToken}`,
					"Content-Type": "application/json",
				},
				body: category,
			});
			getCategories(formStore);
		}
	};
}
