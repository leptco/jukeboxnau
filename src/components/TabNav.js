import React, { Component } from 'react';

class TabNav extends Component {



	tabList = ['Play List', 'Yesterday', 'Last 7 day', 'Top Lists', 'Users'];
	listItems = this.tabList.map((item, index) =>
		<li key={index} className="nav-play-list__item" onClick={this.switchTab.bind(this, index)}>
			<a href="#play-list">{item}</a>
		</li>
	);

	render() {
		return (
			<nav className={`tab__nav ${this.props.openNav ? 'tab__nav--open' : ''}`}>
				<div className="container tab__nav__container">
					<ul className="nav-play-list">
						{this.listItems}
					</ul>
					{/* /.nav-play-list */}
					<div className="login-block">
						<div className="login-block__btn">
							<a href="#play-list">{this.state.nowTab}</a>
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
