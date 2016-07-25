import React, { Component } from 'react';
import TitleInput from './input-title.js';
import DescriptionInput from './input-description.js';
import CategoryInput from './input-category.js';

export default class IdeaForm extends Component {

	constructor(props) {
		super(props);
		this.state = {active:false, title: "", description: "", category: "none"};
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
		if(title){
			this.setState({title: "", description: ""});
			this.props.onSubmit(title, description, category);
		}
	}
	openForm() {
		this.setState({active: true});

	}

	closeForm() {
		this.setState({active: false});
	}

	render() {
		let {categories, toggleCreate} = this.props;
		let {active, title, description, category} = this.state;
		if (active) {
			return (
				<div className="idea-form">
					<form>
						<TitleInput onChange={this.titleChange.bind(this)} value={title}/>
						<DescriptionInput onChange={this.descriptionChange.bind(this)} value={description} />
						<CategoryInput 
							prefix="form-"
							onChange={this.categoryChange.bind(this)}
							value={category}
							categories={Object.assign({}, categories, {'none': {value: 'none', label: 'None', color: '#333'}})}/>
					</form>
					<div className="btn-set">
						<button className="submit-btn" onClick={this.formSubmit.bind(this)}><i className="fa fa-check"></i></button>
						<button className="close-btn" onClick={this.closeForm.bind(this)}><i className="fa fa-close"></i></button>
					</div>
				</div>
			)
		} else {
			return <button className="create-btn" onClick={this.openForm.bind(this)}><i className="fa fa-plus"></i></button>
		}
	}
}