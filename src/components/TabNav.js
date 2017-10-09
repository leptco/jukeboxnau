import React, { Component } from 'react';
import { Container } from 'flux/utils';
import AppStore from '../events/AppStore';
import UserStore from '../events/UserStore';
import { changeTab, signInUser, closeBtnNav } from '../events/AppActions';

class TabNav extends Component {

	static getStores() {
		return [AppStore, UserStore];
	}

	static calculateState(prevState) {
		return {
			isSignIn: UserStore.getState()['isSignIn'],
			userName: UserStore.getState()['userName'],
			errorSignIn: UserStore.getState()['errorSignIn'],
			toggleBtnNav: AppStore.getState()['toggleBtnNav'],
		};
	}

	onTabClick = (e) => {
		const index = parseInt(e.currentTarget.dataset.index, 10);
		changeTab(index);
	}

	signInUser = (e) => {
		signInUser('f');
	}

	tabList = ['Play List', 'Yesterday', 'Last 7 day', 'Top Lists', 'Users'];
	_renderTabNav = () => {
		const lst = this.tabList.map((item, index) => (
			<li
				key={index} data-index={index}
				className={`nav-play-list__item ${this.props.tabIndex === index ? 'nav-play-list__item--active' : ''}`}
				onClick={this.onTabClick}
			>
				<a href="#play-list">{item}</a>
			</li>));

		return (lst);
	}

	render() {

		return (
			<nav className="tab__nav">
				<div className="container tab__nav__container">
					<ul className={`nav-play-list ${this.state.toggleBtnNav ? 'nav-play-list--in' : ''}`}>
						{this._renderTabNav()}
					</ul>
					<div className="login-block">
						<div
							className="login-block__btn"
							onClick={this.signInUser}
						>
							<a href="#play-list">{this.state.userName}</a>
						</div>
						<div className={`login-block__error ${this.state.errorSignIn ? 'login-block__error--active' : ''}`}>
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

export default Container.create(TabNav);
