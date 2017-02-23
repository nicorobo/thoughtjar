import React, { Component, PropTypes } from 'react'; 
import CategoryItem from './CategoryItem';
import CategoryEdit from './CategoryEdit';
import palette from '../palette';

export default class CategorySettings extends Component {

	constructor(props) {
		super(props);
		this.state = {edit: '', new: false};
	}

	enterEdit(id) {
		this.setState({edit: id});
	}

	exitEdit() {
		this.setState({edit: -1});
	}

	newCategory() {
		const { saveCategories, categories } = this.props;
		const catID = `cat${Date.now()}`
		let g = {};
		g[catID] = {value: catID, label: 'Untitled', color: palette[Math.floor(Math.random() * palette.length)]};
		saveCategories(Object.assign(g, categories))
		this.enterEdit(catID);
	}

	editCategory(category) {
		const { saveCategories, categories } = this.props;
		let k = Object.assign({}, categories);
		k[category.value] = category;
		saveCategories(k);
		this.exitEdit();
	}

	deleteCategory(value) {
		const { categories, saveCategories } = this.props;
		let k = Object.assign({}, this.props.categories);
		delete k[value];
		saveCategories(k);
	}

	render() {
		const { categories } = this.props;
		return (
			<div className="settings-category">
				<h4 className="title">Categories</h4>
				<div className="btn-container"><button className="new-category-btn" onClick={this.newCategory.bind(this)}><i className="fa fa-plus"></i></button></div>
				<ul className="category-list">
					{Object.keys(categories).map(i => {
						const { value, color, label } = categories[i];
						const commonProps = {
							key: value,
							value: value,
							label: label,
							color: color,
							onDelete: this.deleteCategory.bind(this)
						}
						return i === this.state.edit 
							? <CategoryEdit {...commonProps} editCategory={this.editCategory.bind(this)} />
							: <CategoryItem {...commonProps} enterEdit={this.enterEdit.bind(this)} />
					})}
				</ul>
			</div>
		)
	}
}

CategorySettings.propTypes = {
	categories: PropTypes.object,
	saveCategories: PropTypes.func,
}





