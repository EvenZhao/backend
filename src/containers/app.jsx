import React from 'react';
import { Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { hot } from 'react-hot-loader';

import SideMenu from '../components/SideMenu';
import Content from '../routes/Index';

const history = createHistory();

class App extends React.Component {
	render() {
		return (
			<Router history={ history }>
				<>
					<SideMenu history={ history } />
					<div style={{ width: '85%', float: 'right' }}>
						<Content />
					</div>
				</>
			</Router>
		);
	}
}

export default hot(module)(App);
