import React, { Component, PropTypes } from 'react';

export default class CreateIdeaButton extends Component {

	createIdea() {
		const { onSubmit, toggleEdit } = this.props;
		const id = onSubmit('', '', 'none');
		toggleEdit(id);
	}

	render() {
		return <button className="create-btn" onClick={this.createIdea.bind(this)}><i className="fa fa-plus"></i></button>
	}
}

CreateIdeaButton.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	toggleEdit: PropTypes.func.isRequired
}