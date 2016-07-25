import React, { Component } from 'react';

export default class TitleInput extends Component {
	render() {
		let {value, onChange} = this.props;
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