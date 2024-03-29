import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox'


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield:''
		}
	}
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}
	render() {
		const filteredRobots = this.state.robots.filter(robot => {
		  const lowerCaseSearch = this.state.searchfield.toLowerCase();
		  return (
		    robot.name.toLowerCase().includes(lowerCaseSearch) ||
		    robot.email.toLowerCase().includes(lowerCaseSearch)
		  );
		});
		return (
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList robots={filteredRobots}/>
		</div>
		);
	}
}

export default App;