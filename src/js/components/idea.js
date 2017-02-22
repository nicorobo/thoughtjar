import React, { Component } from 'react';
import moment from 'moment';
import Markdown from 'react-markdown';

export default class Idea extends Component {
	render() {
		let {data, onDelete, enterEdit, categories} = this.props;
		let {color, label} = categories[data.category] || {color: 'black', label: 'none'};
		let ideaStyle = {
			borderLeftColor: color,
		}
		let labelStyle = {
			color: color
		}
		// let description = this.parseDescription(data.description);
		return (
			<div style={ideaStyle} className={`idea cat-${data.category}`}>
				<h4 className="title">{data.title}</h4>
				<div className="buttons">
					<i className="fa fa-pencil fa-fw fa-lg" onClick={() => enterEdit(data.id)}></i>
					<i className="fa fa-trash fa-fw fa-lg" onClick={() => onDelete(data.id)}></i>
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