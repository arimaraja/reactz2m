import React, {Component} from 'react';
import CardList from './CardList';
import {robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {

	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: 'open',
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}


	render() {
		return (
				<div className='tc'>
					<h1> RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<p>hi {this.state.searchfield}</p>
					<CardList robots={robots} />
				</div>
			);		
	}
};

export default App;
