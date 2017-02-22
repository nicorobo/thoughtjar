import React, { Component, PropTypes } from 'react';

const CreateIdeaButton = props => {
	return <button className="create-btn" onClick={()=>createIdea(props)}><i className="fa fa-plus"></i></button>
}

function createIdea(props) {
	const id = props.onSubmit("", "", "none");
	props.toggleEdit(id);
}

CreateIdeaButton.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	toggleEdit: PropTypes.func.isRequired
}

export default CreateIdeaButton;