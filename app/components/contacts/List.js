import React from 'react';

export default class ContactList extends React.Component {

	render() {
		const data = this.props.list;
		const tmpl = data.map((item, index) => {
			return (
				<li key={index}>
					{item.name}
				</li>
			);
		});

		return (
			<ul>
				{tmpl}
			</ul>
		);
	}
}