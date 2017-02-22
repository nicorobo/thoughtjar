import React, { Component } from 'react'; 
import CategorySettings from './settings-category.js';

export default class SettingsMenu extends Component {
	render() {
		let { categories, saveCategories, active } = this.props;
		return (
			<div className={active ? 'settings-menu active' : 'settings-menu'} onClick={e => e.stopPropagation()}>
				<CategorySettings categories={categories} saveCategories={saveCategories} />
			</div>
		)
	}
}