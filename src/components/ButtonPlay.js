import React, { Component } from 'react';

class ButtonPlay extends Component {
	state = {
		activeButton: false,
	};
	activeButton = () => {
		const currentState = this.state.activeButton;
		this.setState({ activeButton: !currentState });
	}
	render() {
		return (
			<li className="navbar__item">
				<div className={`play-button play-button--play ${this.state.activeButton ? 'play-button--pause' : ''}`} onClick={this.activeButton}>
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
