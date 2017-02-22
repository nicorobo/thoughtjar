import React, { Component } from 'react';

export default class DescriptionInput extends Component {
	render() {
		let {value, onChange} = this.props;
		return (
			<div className="input-group description">
				<label>
					<span>Description</span>
					<textarea rows={5} value={value} onChange={onChange}/>
				</label>
			</div>
		)
	}
}