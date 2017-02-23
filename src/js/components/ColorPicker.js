import React, { PropTypes } from 'react';
import palette from '../palette';

function ColorPicker(props){
	const { onChange, value } = props;
	return (
		<div className="colors">
			{palette.map((color, i) => 
				<span key={i} className="color-set">
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

ColorPicker.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
}

export default ColorPicker
