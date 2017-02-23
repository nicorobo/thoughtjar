import React, { Component, PropTypes } from 'react';

export default class CategoryItem extends Component {

	enterEdit() {
		this.props.enterEdit(this.props.value);
	}

	onDelete() {
		this.props.onDelete(this.props.value);
	}

	render() {
		const { label, value, color } = this.props;
		return (
			<li style={{borderLeft: `5px solid ${color}`}}>
				<div className="li-container">
					<span className="category-label">{label}</span>
					<span className="buttons">
						<i className="fa fa-pencil" onClick={this.enterEdit.bind(this)}></i>
						<i className="fa fa-trash" onClick={this.onDelete.bind(this)}></i>
					</span>
				</div>
			</li>
		);
	}
}

CategoryItem.propTypes = {
	onDelete: PropTypes.func.isRequired,
	enterEdit: PropTypes.func.isRequired,
	label: PropTypes.string,
	value: PropTypes.string,
	color: PropTypes.string,
}