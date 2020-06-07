let startID = 4;
export default class CategoryClass {
	constructor(name, checked = false) {
		this.id = this.getID();
		this.name = name;
		this.checked = checked;
		this.numOfItems = 0;
	}
	getID() {
		return startID++;
	}
}
