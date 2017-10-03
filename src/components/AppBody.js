import React, { Component } from 'react';
import PropTypes from 'proptypes';
import TabNav from './TabNav';
import TabSong from './TabSong';
import TabUsers from './TabUsers';
import TabTopSong from './TabTopSong';
import PopUpLyric from './PopUpLyric';


class AppBody extends Component {
	static propTypes = {
		tabIndex: PropTypes.number.isRequired,
		listSong: PropTypes.array,
		deleteSong: PropTypes.func,
		openNav: PropTypes.number,
		switchTab: PropTypes.func,
	}

	state = {
		activeHost: false,
		activeTabnav: false,
		activePopup: false,
		tabIndex: '0',
	};

	activeHost = () => {
		const currentState = this.state.activeHost;
		this.setState({ activeHost: !currentState });
	}

	activeTabnav = () => {
		const currentState = this.state.activeTabnav;
		this.setState({ activeTabnav: !currentState });
	}

	activePopup = () => {
		const currentState = this.state.activePopup;
		this.setState({ activePopup: !currentState });
	}

	closePopup = () => {
		this.setState({ activePopup: false });
	}

	switchTab = (index) => {
		this.setState({
			tabIndex: index,
		});
	}

	_renderTabItem = () => {
		const index = parseInt(this.state.tabIndex, 10);
		switch (index) {
			case 0:
				return (<TabSong openPopUp={this.activePopup} listSong={this.props.listSong} deleteSong={this.props.deleteSong} />);
			case 1:
				return (<TabSong listSong={this.props.listSong} />);
			case 2:
				return (<TabSong />);
			case 3:
				return (<TabTopSong />);
			case 4:
				return (<TabUsers />);
			default:
				return (<TabSong />);
		}
	}

	render() {

		return (
			<main className="tab">
				<button className="tab__collapse" onClick={this.activeTabnav}>
					<i className="fa fa-bars" aria-hidden="true" />
				</button>
				<TabNav
					openNav={this.state.activeTabnav}
					switchTab={this.switchTab}
					tabIndex={this.state.tabIndex}
				/>
				{this._renderTabItem()}
				<PopUpLyric
					openPopUp={this.state.activePopup}
					closePopUp={this.closePopup}
				/>
			</main>
		);
	}
}

export default AppBody;
