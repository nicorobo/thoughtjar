import React, { Component } from 'react';
export default class CategoryInput extends Component {
	render() {
		let {value, onChange, categories, prefix} = this.props;
		let options = getOptions(categories);
		return (
			<div className="input-group category">
				<span className="label">Category</span>
				<div className="category-options">
					{options.map(opt => (<span key={`${opt.value}-container`}>
						<input 
							type="radio"
							key={prefix+opt.value}
							id={prefix+opt.value}
							value={opt.value}
							name="category"
							onChange={onChange}
							checked={value === opt.value} />
						<label 
							style={{color: (value === opt.value ? opt.color : '')}}
							key={`${prefix+opt.value}-label`}
							htmlFor={prefix+opt.value}
							class="category-label">{opt.label}</label>
					</span>))}
				</div>
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