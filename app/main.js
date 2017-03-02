import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/ux/Layout';
import Menu from './components/ux/Menu';
import Form from './components/contacts/Form';

const app = document.getElementById('contacts');

render(
	<Router history={browserHistory}>
		<Route path='/' component={Menu}>
			<IndexRoute component={Layout}/>
			<Route path='add' component={Form}/>
		</Route>
	</Router>, 
	app);