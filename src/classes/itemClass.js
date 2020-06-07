let startID = 9;
export default class ItemClass {
	constructor(
		name,
		categoryID = 0,
		itemWidth = "",
		itemLength = "",
		itemHeight = "",
		price = 0,
		desc = "",
		checked = false,
		feat = false
	) {
		this.id = this.getID();
		this.name = name;
		this.itemWidth = itemWidth;
		this.itemLength = itemLength;
		this.itemHeight = itemHeight;
		this.size =
			itemWidth != "" && itemLength != "" && itemHeight != ""
				? itemWidth + "cm x " + itemLength + "cm x " + itemHeight + "cm"
				: "";
		this.category = categoryID;
		this.checked = checked;
		this.feat = feat;
		this.price = price;
		this.desc = desc;
	}
	getID() {
		return startID++;
	}
}
