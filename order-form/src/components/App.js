import React, { Component } from 'react';

import InputForm from './inputForm'
import Truck from './truck'
import Data from '../data/items.json'

import ItemsList from './itemsList';
// import InteractiveList from './components/list'
// import { Paper } from '@material-ui/core';


class App extends Component {
	constructor() {
		super()
		this.state = {
			items: Data.items,
			editing: false,
			itemToEdit: null,
		}

		this.delete = this.delete.bind(this);
		this.editItem = this.editItem.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.add = this.add.bind(this);
		this.nextId = this.nextId.bind(this);
	}

	onSubmit(target) {
		this.state.editing ? this.update(target) : this.add(target)
	}

	delete(target) {
		this.setState(prevState => ({
			items: prevState.items.filter(item => item.id !== target)
		}))
	}

	editItem(id) {
		const item = this.state.items.filter(item => item.id === id)[0];
		this.setState(() => ({
			editing: true,
			itemToEdit: item
		}));
	}

	add(item) {
		this.setState(prevState => ({
			items: [
				...prevState.items, {
					id: this.nextId(prevState.items),
					date: item.date,
					location: item.location,
					client: item.client
				}]
		}))
	}

	update(updatedItem) {
		this.setState(prevState => ({
			items: prevState.items.map(
				item => item.id === this.state.itemToEdit.id ? { id: item.id, client: updatedItem.client, date: updatedItem.date, location: updatedItem.location } : item
			),
			editing: false,
			itemToEdit: null
		}));
	}

	nextId(items = []) {
		let max = items.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
		return ++max;
	}


	render() {
		return (

			<div className="App">
				<div className="background" />
				< ItemsList items={ this.state.items } delete={ this.delete } edit={ this.editItem }></ItemsList>
				<InputForm initialData={ this.state.itemToEdit } editing={ this.state.editing } submit={ this.onSubmit }></InputForm>
				<Truck />

			</div>
		)
	}


}

export default App;


{/* <div className="App">
	<BackgroundImage />
	< ItemsList items={ this.state.items } delete={ this.delete } edit={ this.editItem }></ItemsList>
	{ this.state.editing ?
		<InputForm key={ item.id } date={ item.date } client={ item.client } location={ item.location } submit={ this.onSubmit }></InputForm> :
		<InputForm key={ this.state.idToEdit } submit={ this.onSubmit }></InputForm> }

</div> */}