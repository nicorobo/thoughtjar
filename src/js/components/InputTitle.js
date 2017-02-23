import React, { PropTypes } from 'react';

function TitleInput(props) {
	render() {
		const { value, onChange } = this.props;
		return (
			<div className="input-group title">
				<label>
					<span>Title</span>
					<input type="text" value={value} onChange={onChange} autoFocus={true} />
				</label>
			</div>
		)
	}
}

TitleInput.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}

export default TitleInput