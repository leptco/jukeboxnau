import React, { Component } from 'react';
import PropTypes from 'proptypes';

import { changeTab } from '../events/AppActions';

class TabNav extends Component {
	static propTypes = {
		switchTab: PropTypes.func,
	}

	onTabClick = (e) => {
		const index = e.currentTarget.dataset.index;

		changeTab(index);

		this.props.switchTab(index);
	}
	tabList = ['Play List', 'Yesterday', 'Last 7 day', 'Top Lists', 'Users'];
	_renderTabNav = () => {
		const lst = this.tabList.map((item, index) => (
			<li
				key={index} data-index={index}
				className={`nav-play-list__item ${this.props.tabIndex === String(index) ? 'nav-play-list__item--active' : ''}`}
				onClick={this.onTabClick}
			>
				<a href="#play-list">{item}</a>
			</li>));

		return (lst);
	}

	render() {

		return (
			<nav className={`tab__nav ${this.props.openNav ? 'tab__nav--open' : ''}`}>
				<div className="container tab__nav__container">
					<ul className="nav-play-list">
						{this._renderTabNav()}
					</ul>
					{/* /.nav-play-list */}
					<div className="login-block">
						<div className="login-block__btn">
							<a href="#play-list">Sign in</a>
						</div>
						<div className="login-block__error">
							<p>Please login to book songs!</p>
						</div>
					</div>
					{/* /.login-block */}
				</div>
				{/* /.container */}
			</nav>
		);
	}
}

export default TabNav;
