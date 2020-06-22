import { observable } from "mobx";
class HomeStore {
	@observable items = [];
	@observable categories = [];
}
let homeStore = new HomeStore();
let url = "https://api.baasic.com/beta/furniture-store-app/resources/Items";
let categoriesURL =
	"https://api.baasic.com/beta/furniture-store-app/resources/Categories";
fetch(url)
	.then((response) => response.json())
	.then((data) => {
		homeStore.items = data.item;
	})
	.catch(() => {
		homeStore.items = [];
	});
fetch(categoriesURL)
	.then((response) => response.json())
	.then((data) => {
		homeStore.categories = data.item;
	})
	.catch(() => {
		homeStore.categories = [];
	});

export default homeStore;
