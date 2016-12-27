import React from 'react';

export default class Item extends React.Component {

	render() {
		return (
			<li key={this.props.idx}>
				{this.props.name}
			</li>
		);
	}
}