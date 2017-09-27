import React, { Component } from 'react';

class ButtonPlay extends Component {
	render() {
		return (
			<li className="navbar__item navbar__item--play">
				<div className="play-button play-button--play">
					<div className="play-button__item play-button__top" />
					<div className="play-button__item play-button__right" />
					<div className="play-button__item play-button__bottom" />
					<div className="play-button__item play-button__left" />
				</div>
			</li>
		);
	}
}

export default ButtonPlay;
