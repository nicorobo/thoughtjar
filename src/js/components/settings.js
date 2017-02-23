import React, { Component, PropTypes } from 'react';
import SettingsMenu from './SettingsMenu';

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
		const { active } = this.state;
		return (
			<div className="settings">
				<i 
					className={"menu-btn fa fa-gear " + (active ? 'active' : '')}
					onClick={active ? this.exitMenu.bind(this) : this.enterMenu.bind(this)}></i>
				<SettingsMenu 
					{...this.props}
					active={active} />
			</div>
		)
	}
}

Settings.propTypes = {
	categories: PropTypes.object,
	saveCategories: PropTypes.func,
}