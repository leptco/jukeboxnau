import React, { Component } from 'react';
import { Container } from 'flux/utils';
import AppStore from '../events/AppStore';
import { activeHost } from '../events/AppActions';

class Host extends Component {
	static getStores() {
		return [AppStore];
	}

	static calculateState(prevState) {
		return {
			activeHost: AppStore.getState()['activeHost'],
		};
	}

	activeHost = () => {
		const passCode = parseInt(prompt('Passcode for host is: Nau\'s birthday (6 digits)', '110114'), 10);
		activeHost(passCode);
	}

	render() {

		return (
			<div
				className={`host ${this.state.activeHost ? 'host--active' : ''}`}
				onClick={this.state.activeHost ? null : this.activeHost}
			>
				<div className="dot" />
			</div>
		);
	}
}

export default Container.create(Host);
