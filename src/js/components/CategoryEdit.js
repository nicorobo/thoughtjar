import React, { Component, PropTypes } from 'react';
import ColorPicker from './ColorPicker';

export default class CategoryEdit extends Component {

	constructor(props) {
		super(props);
		this.state = {label: props.label, color: props.color};
	}

	onLabelChange(e) {
		this.setState({label: e.target.value})
	}

	onColorChange(color) {
		this.setState({color: color})
	}

	finishEdit() {
		const {label, color} = this.state;
		this.props.editCategory({label, color, value: this.props.value})
	}

	render() {
		const {onDelete, label, value, color} = this.props;
		return (
			<li style={{borderLeft: `5px solid ${this.state.color}`}}>
				<div className="li-container">
					<input 
						value={this.state.label}
						className="category-label"
						onChange={this.onLabelChange.bind(this)}
						autoFocus={true}/>
					<span className="buttons">
						<i className="fa fa-check" onClick={this.finishEdit.bind(this)}></i>
						<i className="fa fa-trash" onClick={() => onDelete(value)}></i>
					</span>
				</div>
				<ColorPicker onChange={this.onColorChange.bind(this)} value={this.state.color}/>
			</li>
		);
	}
}

CategoryEdit.propTypes = {
	onDelete: PropTypes.func.isRequired,
	editCategory: PropTypes.func.isRequired,
	label: PropTypes.string,
	value: PropTypes.string,
	color: PropTypes.string
}
