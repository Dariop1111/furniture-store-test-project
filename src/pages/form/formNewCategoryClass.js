import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";

import { appStore } from "../../stores";
import { category } from "../../classes";
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
					appStore.inputValues[input.name] = input.value;
				});
				category.addNew();
				form.fields.forEach((input) => {
					appStore.inputValues[input.name] = "";
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
}
