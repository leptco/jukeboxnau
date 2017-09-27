import React, { Component } from 'react';

import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import Nhap from './components/nhap';


class App extends Component {

	render() {
		return (
			<div>
				<AppHeader />
				<AppBody />
				{/*<Nhap />*/}
			</div>
		);
	}
}

export default App;
