import React, { Component } from 'react';
import CategoryInput from './input-category.js';

export default class IdeaForm extends Component {

	constructor(props) {
		super(props);
		let {title, description, category} = props.data;
		this.state = { title: title || "", description: description || "", category: category || ""};
	}

	titleChange(e) {
		this.setState({title: e.target.value});
	}

	descriptionChange(e) {
		this.setState({description: e.target.value});
	}

	categoryChange(e) {
		this.setState({category: e.target.value});
	}
	
	formSubmit() {
		let {title, description, category} = this.state;
		let {data, exitEdit} = this.props;
		if(title && description && category){
			this.props.onSubmit({id: data.id, title, description, category, createdOn: data.createdOn});
		}
		exitEdit()
	}

	render() {
		let {title, description, category} = this.state;
		let {data, categories, onDelete} = this.props;
		let {color} = categories[category] || {color: '#333'};
		let ideaStyle = {
			borderLeftColor: color,
		}
		return (
			<div style={ideaStyle} className={`idea idea-edit cat-${category}`}>
				<div className="top-section">
					<input className="title-edit" type='text' value={title} onChange={e => this.setState({title: e.target.value})}/>
					<div className="buttons">
						<i className="fa fa-check fa-fw fa-lg" onClick={this.formSubmit.bind(this)}></i>
						<i className="fa fa-trash fa-fw fa-lg" onClick={() => onDelete(data.id)}></i>
					</div>
				</div>
				<textarea 
					className="description-edit"
					rows={5} value={description}
					onChange={e => this.setState({description: e.target.value})}/>
				<CategoryInput 
					categories={Object.assign({}, categories, {'none': {value: 'none', label: 'None', color: '#333'}})}
					onChange={this.categoryChange.bind(this)}
					prefix="edit-"
					value={category} />
			</div>
		)
	}
}