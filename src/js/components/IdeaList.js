import React, { Component, PropTypes } from 'react';
import IdeaEdit from './IdeaEdit';
import Idea from './Idea';
import CategoryInput from './InputCategory';

export default class IdeaList extends Component {
	
	enterEdit(id) {
		this.props.toggleEdit(id);
	}
	
	exitEdit() {
		this.props.toggleEdit(-1);
	}
	
	render() {
		const {ideas, filter, onDelete, onEdit, editing, categories} = this.props;
		if(ideas.length < 1) return (
			<div className='empty-msg'>
				There are currently no entries{filter ===  ''
					? '' 
					: <span> for <span className='cat' style={{color: categories[filter].color}}>{categories[filter].label}</span></span>
				}
			</div>
		);
		return (
			<div className='idea-list'>
				{ideas.map(idea => {
					const commonProps = { 
						key: idea.id,
						data: idea,
						categories,
						onDelete,
					}
					return editing === idea.id 
						? <IdeaEdit {...commonProps} onEdit={onEdit} exitEdit={this.exitEdit.bind(this)} />
						: <Idea {...commonProps} enterEdit={this.enterEdit.bind(this)} />
				})}
			</div>
		)


	}
}

IdeaList.propTypes = {
	ideas: PropTypes.array.isRequired,
	filter: PropTypes.string.isRequired,
	categories: PropTypes.object.isRequired,
	editing: PropTypes.number.isRequired,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	toggleEdit: PropTypes.func.isRequired,
}