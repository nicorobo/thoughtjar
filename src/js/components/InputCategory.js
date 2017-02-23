import React, { Component, PropTypes } from 'react';

export default class InputCategory extends Component {

	render() {
		const {value, onChange, categories, prefix} = this.props;
		return (
			<div className="input-group category">
				<span className="label">Category</span>
				<div className="category-options">
					{Object.keys(categories).map(i => {
						const { value:val, label, color } = categories[i];
						return (
							<span key={`${val}-container`}>
								<input 
									type="radio"
									key={prefix+val}
									id={prefix+val}
									value={val}
									name="category"
									onChange={onChange}
									checked={value === val} />
								<label 
									style={{color: (value === val ? color : '')}}
									key={`${prefix+val}-label`}
									htmlFor={prefix+val}
									className="category-label">{label}</label>
							</span>
						)
					})}
				</div>
			</div>
		)
	}
}

InputCategory.propTypes = {
	value: PropTypes.string.isRequired,
	categories: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	prefix: PropTypes.string.isRequired,
}