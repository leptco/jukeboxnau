import React, { Component } from 'react';
import TabNav from './TabNav';
import TabSong from './TabSong';
import TabUsers from './TabUsers';
import TabTopSong from './TabTopSong';
import PopUpLyric from './PopUpLyric';

class AppBody extends Component {

	state = { activeClasses: false, nowTab: 'Play List' };

	toggleClass = () => {
		const currentState = this.state.activeClasses;
		this.setState({ activeClasses: !currentState });
	}

	switchTab = (tabIndex) => {
		this.setState({
			nowTab: tabIndex,
		});
	}

	render() {
		return (
			<main className="tab">
				<button className="tab__collapse" onClick={this.toggleClass}>
					<i className="fa fa-bars" aria-hidden="true" />
				</button>
				{/*<TabNav openNav={this.state.activeClasses} switchTab={this.props.switchTab}/>*/}
				<TabSong />
				<TabUsers />
				<TabTopSong />
				<PopUpLyric />
			</main>
		);
	}
}

TabNav.propTypes = {
	openNav: React.PropTypes.string,
	switchTab: React.PropTypes.func,
};

TabNav.defaultProps = {
	openNav: 'Hello',
	onClick: this.switchTab
};

export default AppBody;
