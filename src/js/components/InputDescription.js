import React, { PropTypes } from 'react';

function DescriptionInput (props) {
	const { value, onChange } = props;
	return (
		<div className="input-group description">
			<label>
				<span>Description</span>
				<textarea rows={5} value={value} onChange={onChange}/>
			</label>
		</div>
	)
}

DescriptionInput.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}

export default DescriptionInput