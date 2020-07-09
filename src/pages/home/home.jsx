import React, { Component } from "react";
import { observer } from "mobx-react";

import { ItemBox } from "../../components";
import store from "../../stores/homeStore.js";

import HomeCategory from "./homeCategory";
@observer
class Home extends Component {
	render() {
		let { items, categories } = store;

		return (
			<div id="home">
				<div id="home-feat">
					<ul id="home-feat-list">
						{items.map((item) => {
							return item.feat ? <ItemBox key={item.id} item={item} /> : false;
						})}
					</ul>
				</div>
				<div id="home-categories">
					<ul id="home-categories-list">
						{categories.map((category) => {
							return (
								<HomeCategory
									onSelectCategory={this.props.onSelectCategory}
									onChangePage={this.props.onChangePage}
									key={category.id}
									category={category}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default Home;
