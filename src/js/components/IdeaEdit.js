import React, { Component, PropTypes } from 'react';
import CategoryInput from './InputCategory';

export default class IdeaEdit extends Component {

	constructor(props) {
		super(props);
		const {title, description, category} = props.data;
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

	onDelete() {
		this.props.onDelete(this.props.data.id);
	}
	
	formSubmit() {
		let {title, description, category} = this.state;
		let {data, exitEdit, onEdit} = this.props;
		onEdit({id: data.id, title, description, category, createdOn: data.createdOn});
		exitEdit()
	}

	render() {
		const {title, description, category} = this.state;
		const {categories} = this.props;
		const {color} = categories[category] || {color: '#333'};
		const ideaStyle = {borderLeftColor: color};

		return (
			<div style={ideaStyle} className={`idea idea-edit cat-${category}`}>
				<div className="top-section">
					<input 
						className="title-edit"
						type='text'
						value={title}
						placeholder="Title"
						onChange={this.titleChange.bind(this)}
						autoFocus />
					<div className="buttons">
						<i className="fa fa-check fa-fw fa-lg" onClick={this.formSubmit.bind(this)}></i>
						<i className="fa fa-trash fa-fw fa-lg" onClick={this.onDelete.bind(this)}></i>
					</div>
				</div>
				<textarea 
					className="description-edit"
					placeholder="Description"
					rows={5} value={description}
					onChange={this.descriptionChange.bind(this)}/>
				<CategoryInput 
					categories={Object.assign({}, categories, {'none': {value: '', label: 'None', color: '#333'}})}
					onChange={this.categoryChange.bind(this)}
					prefix="edit-"
					value={category} />
			</div>
		)
	}
}

IdeaEdit.propTypes = {
	onDelete: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired,
	exitEdit: PropTypes.func.isRequired,
	categories: PropTypes.object.isRequired,
	data: PropTypes.shape({
		category: PropTypes.string,
		title: PropTypes.string, 
		description: PropTypes.string,
		createOn: PropTypes.date,
	}).isRequired
}