import React, { Component } from 'react';
import IdeaEdit from '../forms/idea-edit.js';
import Idea from './idea.js';
import CategoryInput from '../forms/input-category.js';

export default class IdeaList extends Component {
	constructor(props) {
		super(props);
		this.state = {filter: 'all'};
	}
	changeFilter(e) {
		this.setState({filter: e.target.value});
	} 
	enterEdit(id) {
		this.props.toggleEdit(id);
	}
	exitEdit() {
		this.props.toggleEdit(-1);
	}
	render() {
		let {ideas, onDelete, onEdit, editing, categories} = this.props;
		let {filter} = this.state;
		if(filter !== 'all') ideas = ideas.filter(idea => idea.category === filter);
		if (ideas.length <= 0) {
			return (
				<div className='idea-list'>
					<div className="idea-filter">
						<CategoryInput 
							prefix="filter-"
							categories={Object.assign({all: {label: 'All', color: '#333', value: 'all'}}, categories)}
							value={this.state.filter}
							onChange={this.changeFilter.bind(this)} />
					</div>
					<div className="empty-msg">
						There are currently no entries{filter === 'all' ? '' : <span> for <span className="cat" style={{color: categories[filter].color}}>{categories[filter].label}</span></span>}
					</div>
				</div>
			)
		} else {
			return (
				<div className='idea-list'>
					<div className="idea-filter">
						<CategoryInput 
							prefix="filter-"
							categories={Object.assign({all: {label: 'All', color: '#333', value: 'all'}}, categories)}
							value={this.state.filter}
							onChange={this.changeFilter.bind(this)} />
					</div>
					{ideas.map(idea => {
						if(editing === idea.id){
							return <IdeaEdit
								key={idea.id}
								data={idea}
								categories={categories}
								onSubmit={onEdit}
								onDelete={onDelete}
								exitEdit={this.exitEdit.bind(this)} />
						}
						else {
							return <Idea
								key={idea.id}
								data={idea}
								categories={categories}
								onDelete={onDelete}
								enterEdit={this.enterEdit.bind(this)} />
						}
					})}
				</div>
			)
		}
	}
}

function getOptions(cat) {
	let arr = [];
	for (var i in cat) {
		arr.push(Object.assign({value: i}, cat[i]));
	}
	return arr;
}