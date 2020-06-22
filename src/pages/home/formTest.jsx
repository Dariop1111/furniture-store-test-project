import { observer } from "mobx-react";
import MyForm from "./formTestClass.js";
import React, { Component } from "react";
const form = new MyForm();
@observer
export default class FormTest extends Component {
	render() {
		return (
			<form>
				<label htmlFor={form.$("email").id}>{form.$("email").label}</label>
				<input {...form.$("email").bind()} />
				<p>{form.$("email").error}</p>

				<label htmlFor={form.$("password").id}>
					{form.$("password").label}
				</label>
				<input {...form.$("password").bind()} />
				<p>{form.$("password").error}</p>

				<label htmlFor={form.$("passwordConfirm").id}>
					{form.$("passwordConfirm").label}
				</label>
				<input {...form.$("passwordConfirm").bind()} />
				<p>{form.$("passwordConfirm").error}</p>

				<button type="submit" onClick={form.onSubmit}>
					Submit
				</button>
				<button type="button" onClick={form.onClear}>
					Clear
				</button>
				<button type="button" onClick={form.onReset}>
					Reset
				</button>

				<p>{form.error}</p>
			</form>
		);
	}
}
