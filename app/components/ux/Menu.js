import React from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component {

	render() {
		return (
			<div> 
				<Link to='/'>Список</Link>
				&nbsp;|&nbsp;
				<Link to='/add'>+Добавить</Link>
				{ this.props.children }
			</div>
		);
	}
}