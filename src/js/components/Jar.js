import React, { Component, PropTypes } from 'react';
import IdeaList from './IdeaList';
import InputCategory from './InputCategory';

export default class Jar extends Component {

	render() {
		let { ideas, categories, filter, toggleFilter } = this.props;
		if(filter) ideas = ideas.filter(idea => idea.category === filter);
		return (
			<div className='jar'>
				<div className='idea-filter'>
					<InputCategory
						prefix='filter-'
						categories={Object.assign({all: {label: 'All', color: '#333', value: ""}}, categories)}
						value={filter}
						onChange={toggleFilter} />
				</div>
				<IdeaList
					{...this.props}
					ideas={ideas}
					filter={filter}/>
			</div>
		)
	}
}

Jar.propTypes = {
	categories: PropTypes.object.isRequired,
	ideas: PropTypes.array.isRequired,
	filter: PropTypes.string,
	editing: PropTypes.number.isRequired,
	toggleEdit: PropTypes.func.isRequired,
	toggleFilter: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired,
}
