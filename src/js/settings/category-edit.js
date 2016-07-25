import React, { Component } from 'react';
import ColorPicker from './color-picker.js';

export default class CategoryEdit extends Component {
	constructor(props) {
		super(props);
		let {label, color} = props.data;
		this.state = {label, color};
	}
	onLabelChange(e) {
		this.setState({label: e.target.value})
	}
	onColorChange(color) {
		this.setState({color: color})
		console.log(color);
	}
	finishEdit() {
		let {label, color} = this.state;
		this.props.editCategory({label, color, value: this.props.data.value})
	}
	render() {
		let {onDelete, data} = this.props;
		let {label, value, color} = data;
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