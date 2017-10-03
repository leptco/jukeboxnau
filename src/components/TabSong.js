import React, { Component } from 'react';
import { Container } from 'flux/utils';
import SongStore from '../events/SongStore';
import * as AppActions from '../events/AppActions';

class TabSong extends Component {
	static getStores() {
		return [SongStore];
	}

	static calculateState(prevState) {
		return {
			listSong: SongStore.getState()['listSong'],
		};
	}

	deleteSong = (e) => {
		const index = parseInt( e.currentTarget.dataset.index );
		AppActions.deleleSong(index);
	}

	activeAuthor = () => {
		const currentState = this.state.activeAuthor;
		this.setState({ activeAuthor: !currentState });
	}

	playSong = (e) => {
		const index = e.currentTarget.dataset.index;
		this.setState({ playSongIndex: index });
	}

	selectSong = (e) => {
		const index = e.currentTarget.dataset.index;
		this.setState({ selectSongIndex: index });
	}

	_renderSong = () => {
		const lst = this.state.listSong.map((item, index) => (
			<li key={index} data-index={index}
				className={`row song__item ${this.state.playSongIndex === String(index) ? 'song__item--playing' : ''}`}
			>
				<span className="song__item__author song__item__author--active" >
					Phạm Thanh Huyền Phạm Thanh Huyền
				</span>
				<i
					className="fa fa-caret-right song__item__mark"
					aria-hidden="true"
				/>
				<div className="col col--8 song__item__info">
					<div className="song__item__avt">
						<img
							src="https://thumbs.dreamstime.com/t/imge-mint-closeup-green-leaves-texture-background-72159554.jpg"
							width={40}
							height={40}
							alt="image song"
						/>
					</div>
					<a
						href="#"
						className="song__item__link"
						title="Hương Tràm - Em Gái Mưa ( Anh Khang Cover ) - YouTube"
						data-index={index}
						//onClick={this.playSong}
					>
						Hương Tràm - Em Gái Mưa ( Anh Khang Cover ) -
						YouTubeTràm - Em Gái Mưa ( Anh Khang Cover ) - YouTube
					</a>
				</div>
				{/* /.col col--4 song__item__info */}
				<div className="col col--4 song__item__control">
					<div className="song__item__time">4 hours ago</div>
					<a
						href="#"
						className="song__item__book-user"
						data-index={index}
					>
						<i className="fa fa-eye" aria-hidden="true" />
					</a>
					<a
						href="#"
						className="song__item__lyric"
						//onClick={this.props.openPopUp}
					>
						<i className="fa fa-file-text" aria-hidden="true" />
					</a>
					<a
						href="#"
						className="song__item__repeat"
					>
						<i className="fa fa-retweet" aria-hidden="true" />
					</a>
					<a
						href="#"
						className="song__item__remove"
						data-index={index}
						onClick={this.deleteSong}
					>
						<i className="fa fa-times" aria-hidden="true" />
					</a>
				</div>
				{/* /.col col--4 song__item__control */}
			</li>));

		return (lst);
	}
	render() {
		return (
			<section className="tab__body song">
				<div className="container song__container">
					<ul className="song__list">
						{this._renderSong()}
					</ul>
					{/* /.song__list */}
				</div>
				{/* /.container */}
			</section>
		);
	}
}

export default Container.create(TabSong);
