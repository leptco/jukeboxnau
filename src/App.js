import React, { Component } from 'react';

import AppStore from './events/AppStore';
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';

function getAppState() {
	// return {
	// 	tabIndex: AppStore.getRootState('tabIndex'),
	// };

	return AppStore.getState();
}

class App extends Component {

	state = getAppState()

	componentDidMount() {
		this.storeListener = AppStore.addListener(() => {
			this.setState(getAppState());
		});
	}

	componentWillUnmount() {
		this.storeListener.remove();
	}


	render() {
		return (
			<div>
				<AppHeader />
				<AppBody
					tabIndex={this.state.tabIndex}
					toggleBtnNav={this.state.toggleBtnNav}
				/>

			</div>
		);
	}
}

export default App;
