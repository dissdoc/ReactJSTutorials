import React from 'react';

import Item from './Item';
import Empty from './Empty';

export default class ContactList extends React.Component {

	static propTypes = {
		list: React.PropTypes.array.isRequired
	};

	static defaultProps = {
		list: []
	};



	render() {
		const data = this.props.list;
		const tmpl = data.map((item, index) => {
			return (
				<Item idx={index} name={item.name} />
			);
		});

		return (
			<ul>
				{ data.length > 0 ? tmpl : <Empty />}
			</ul>
		);
	}
}