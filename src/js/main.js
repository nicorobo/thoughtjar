import React, { Component } from 'react';
import { render } from 'react-dom';
import Jar from './components/Jar';
import CreateIdeaButton from './components/CreateIdeaButton';
import Settings from './components/Settings';
import {thoughts, categories} from './initial';
let ideaID = null;

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {ideas: thoughts, categories: categories, editing: -1, filter: ""};
	}

	toggleEdit(id) {
		this.setState({editing: id < 0 ? -1 : id});
	}

	toggleFilter(e) {
		this.setState({filter: (e.target.value || "")});
	}

	saveIdeas(ideas) {
		this.setState({ideas});
		window.localStorage.setItem('ideas', JSON.stringify(ideas));
	}

	saveCategories(categories) {
		this.setState({categories});
		window.localStorage.setItem('categories', JSON.stringify(categories));
	}

	createIdea(title, description, category) {
		ideaID++;
		window.localStorage.setItem('ideaID', ideaID);
		this.saveIdeas([{id: ideaID, title, description, category, createdOn: Date.now()}].concat(this.state.ideas));
		return ideaID;
	}

	deleteIdea(id) {
		this.saveIdeas(this.state.ideas.filter(idea => idea.id !== id));
	}

	editIdea(idea) {
		this.saveIdeas(this.state.ideas.map(i => i.id !== idea.id ? i : idea));
	}

	populateStorage() {
		window.localStorage.setItem('ideas', JSON.stringify(this.state.ideas))
		window.localStorage.setItem('categories', JSON.stringify(this.state.categories))
		window.localStorage.setItem('ideaID', JSON.stringify(400))
		ideaID = 400;
	}

	componentDidMount() {
		if (!window.localStorage.ideas || !window.localStorage.categories) {
			this.populateStorage();
		} else {
			ideaID = parseInt(window.localStorage.ideaID);
			this.setState({
				ideas: JSON.parse(window.localStorage.ideas),
				categories: JSON.parse(window.localStorage.categories)
			});
		}
	}

	render() {
		const {ideas, categories, editing, filter} = this.state;
		return (
			<div className="main-container">
				<Settings
					saveCategories={this.saveCategories.bind(this)}
					categories={categories} />
				<CreateIdeaButton
					onSubmit={this.createIdea.bind(this)}
					toggleEdit={this.toggleEdit.bind(this)}
					filter={filter} />
				<Jar
					categories={categories}
					ideas={ideas}
					filter={filter}
					editing={editing}
					toggleEdit={this.toggleEdit.bind(this)}
					toggleFilter={this.toggleFilter.bind(this)}
					onDelete={this.deleteIdea.bind(this)}
					onEdit={this.editIdea.bind(this)} />
			</div>
		)
	}
}

render(<App />, document.getElementById('app'));