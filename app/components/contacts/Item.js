import React from 'react';

export default class Item extends React.Component {

	static propTypes = {
		idx: React.PropTypes.number.isRequired,
		name: React.PropTypes.any.isRequired
	};

	constructor() {
		super();

		this.state = {
			checked: false
		};
	}

	checkElement() {
		this.setState({
			checked: !this.state.checked
		});
	}

	render() {
		return (
			<li key={this.props.idx} onClick={() => this.checkElement()} className={this.state.checked ? 'check' : 'uncheck'}>
				{this.props.name}
			</li>
		);
	}
}