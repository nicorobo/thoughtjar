import React, { Component } from 'react'; 
import CategoryItem from './category-item.js';
import CategoryEdit from './category-edit.js';
import palette from '../palette.js';

export default class CategorySettings extends Component {
	constructor(props) {
		super(props);
		this.state = {edit: '', new: false};
	}
	enterEdit(value) {
		this.setState({edit: value});
	}
	exitEdit() {
		this.setState({edit: -1});
	}
	newCategory() {
		let { saveCategories, categories } = this.props;
		let catID = `cat${Date.now()}`
		let g = {};
		g[catID] = {value: catID, label: 'Untitled', color: palette[Math.floor(Math.random() * palette.length)]};
		saveCategories(Object.assign(g, categories))
		this.enterEdit(catID);
	}
	editCategory(category) {
		let { saveCategories, categories } = this.props;
		let k = Object.assign({}, categories);
		k[category.value] = category;
		saveCategories(k);
		this.exitEdit();
	}
	deleteCategory(value) {
		let { categories, saveCategories } = this.props;
		let k = Object.assign({}, this.props.categories);
		delete k[value];
		saveCategories(k);
	}

	render() {
		let options = getOptions(this.props.categories);
		return (
			<div className="settings-category">
				<h4 className="title">Categories</h4>
				<div className="btn-container"><button className="new-category-btn" onClick={this.newCategory.bind(this)}><i className="fa fa-plus"></i></button></div>
				<ul className="category-list">
					{options.map(opt => {
						if (opt.value === this.state.edit) {
							return <CategoryEdit
								key={opt.value}
								data={opt}
								editCategory={this.editCategory.bind(this)}
								onDelete={this.deleteCategory.bind(this)} />
						} else {
							return <CategoryItem 
								key={opt.value}
								data={opt}
								enterEdit={this.enterEdit.bind(this)}
								onDelete={this.deleteCategory.bind(this)} />
						}
					})}
				</ul>
			</div>
		)
	}
}

function getOptions(cat) {
	let arr = [];
	for (var i in cat) {
		arr.push(Object.assign({value: i}, cat[i]));
	}
	return arr;
}