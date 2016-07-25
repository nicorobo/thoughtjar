import React, { Component } from 'react';
import palette from '../palette.js';

export default class ColorPicker extends Component {
	render() {
		let {onChange, value} = this.props;
		return (
			<div className="colors">
				{palette.map((color, i) => 
					<span className="color-set">
						<input
							onChange={() => onChange(color)}
							type="radio"
							name="color"
							value={color}
							checked={value === color}
							id={`color-${i}`}/>
						<label
							style={{backgroundColor: color}}
							htmlFor={`color-${i}`}
							id={`color-label-${i}`}>
						</label>
					</span>
				)}
			</div>
		)
	}
}