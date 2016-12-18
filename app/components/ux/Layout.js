import React from 'react';

import Header from '../Header';
import ContactList from '../contacts/List';

export default class Layout extends React.Component {

	constructor() {
		super();
		this.contacts = [
			{id: 1, name: 'Василий Пупкин'},
			{id: 2, name: 'Мария Иванова'},
			{id: 3, name: 'Петр  Сидоров'}
		];
	}

	render() {
		return(
			<div>
				<Header/>
				<ContactList list={this.contacts}/>
			</div>
		);
	}
}