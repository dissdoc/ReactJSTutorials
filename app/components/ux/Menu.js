import React from 'react';
import LinkWrapper from './LinkWrapper';

export default class Menu extends React.Component {

	render() {
		return (
			<div> 
				<LinkWrapper to='/' onlyActiveOnIndex={true}>Список</LinkWrapper>
				&nbsp;|&nbsp;
				<LinkWrapper to='/add'>+Добавить</LinkWrapper>
				{ this.props.children }
			</div>
		);
	}
}