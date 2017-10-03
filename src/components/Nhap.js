import React, { Component } from 'react';
import { Container } from 'flux/utils';
import NhapStore from '../events/NhapStore';
import * as AppActions from '../events/AppActions';

class NhapContainer extends Component {
	static getStores() {
		return [NhapStore];
	}

	static calculateState(prevState) {
		return {
			counter: NhapStore.getState(),
		};
	}

	changNhap = () => {
		AppActions.changeNhap();
	}

	render() {
		console.log('haha', this.state.counter);
		return (
			<button onClick= { AppActions.changeNhap }>
				{this.state.counter['tabIndex']}
			</button>
		);
	}
}

export default Container.create(NhapContainer);

