import React, { Component } from 'react';
import SettingsMenu from './settings-menu.js';

export default class Settings extends Component {
	constructor(props) {
		super(props);
		this.state = {active: false}
	}
	enterMenu(e) {
		e.stopPropagation();
		this.setState({active: true});
		window.addEventListener('click', this.exitMenu.bind(this));
	}
	exitMenu(e) {
		e.stopPropagation();
		this.setState({active: false});
		window.removeEventListener('click', this.exitMenu);
	}
	render() {
		let { active } = this.state;
		let { categories, saveCategories } = this.props;
		return (
			<div className="settings">
				<i 
					className={"menu-btn fa fa-gear " + (active ? 'active' : '')}
					onClick={active ? this.exitMenu.bind(this) : this.enterMenu.bind(this)}></i>
				<SettingsMenu 
					categories={categories}
					active={active}
					saveCategories={saveCategories} />
			</div>
		)
	}
}