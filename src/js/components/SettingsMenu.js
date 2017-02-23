import React, { PropTypes } from 'react'; 
import CategorySettings from './SettingsCategory';

function SettingsMenu(props) {
	const { categories, saveCategories, active } = props;
	return (
		<div className={active ? 'settings-menu active' : 'settings-menu'} onClick={e => e.stopPropagation()}>
			<CategorySettings categories={categories} saveCategories={saveCategories} />
		</div>
	)
}

SettingsMenu.propTypes = {
	active: PropTypes.bool.isRequired,
	categories: PropTypes.object.isRequired,
	saveCategories: PropTypes.func.isRequired
}

export default SettingsMenu;