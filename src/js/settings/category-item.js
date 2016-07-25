import React, { Component } from 'react';

export default class CategoryItem extends Component {
	render() {
		let {enterEdit, onDelete, data} = this.props;
		let {label, value, color} = data;
		return (
			<li style={{borderLeft: `5px solid ${color}`}}>
				<div className="li-container">
					<span className="category-label">{label}</span>
					<span className="buttons">
						<i className="fa fa-pencil" onClick={() => enterEdit(value)}></i>
						<i className="fa fa-trash" onClick={() => onDelete(value)}></i>
					</span>
				</div>
			</li>
		);
	}
}