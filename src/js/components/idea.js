import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import Markdown from 'react-markdown';

export default class Idea extends Component {

	enterEdit() {
		this.props.enterEdit(this.props.data.id);
	}

	onDelete() {
		this.props.onDelete(this.props.data.id);
	}

	render() {
		const { data, categories } = this.props;
		const { color, label } = categories[data.category] || {color: '#333', label: ''};
		const ideaStyle = { borderLeftColor: color }
		const labelStyle = { color: color }

		return (
			<div style={ideaStyle} className={`idea cat-${data.category}`}>
				<h4 className="title">{data.title}</h4>
				<div className="buttons">
					<i className="fa fa-pencil fa-fw fa-lg" onClick={this.enterEdit.bind(this)}></i>
					<i className="fa fa-trash fa-fw fa-lg" onClick={this.onDelete.bind(this)}></i>
				</div>
				<div className="description">
					<Markdown 
						source={data.description} 
						allowedTypes={['Text', 'Paragraph', 'Softbreak', 'Hardbreak', 'Link', 'Strong', 'Emph']}
						unwrapDisallowed={true} />
				</div>
				<div className="category-footer"><span className="date">{moment(data.createdOn).format('MMMM Do, YYYY')}</span><span className="label" style={labelStyle}>{label}</span></div>
			</div>
		)
	}
}

Idea.propTypes = {
	onDelete: PropTypes.func.isRequired,
	enterEdit: PropTypes.func.isRequired,
	categories: PropTypes.object.isRequired,
	data: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string, 
		description: PropTypes.string,
		category: PropTypes.string,
		createdOn: PropTypes.date,
	}).isRequired
}