import React from 'react';

import Header from '../Header';
import ContactList from '../contacts/List';

export default class Layout extends React.Component {

	render() {
		return(
			<div>
				<Header/>
				<ContactList/>
			</div>
		);
	}
}