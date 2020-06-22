export default class ItemClass {
	constructor(
		name,
		categoryID,
		itemWidth = "",
		itemLength = "",
		itemHeight = "",
		price = "0",
		desc = "",
		checked = "false",
		feat = "false"
	) {
		this.id = "";
		this.desc = desc;
		this.feat = feat;
		this.name = name;
		this.size =
			itemWidth != "" && itemLength != "" && itemHeight != ""
				? itemWidth + "cm x " + itemLength + "cm x " + itemHeight + "cm"
				: "";
		this.price = price;
		this.checked = checked;
		this.category = categoryID;
		this.itemWidth = itemWidth;
		this.itemHeight = itemHeight;
		this.itemLength = itemLength;
	}
}
