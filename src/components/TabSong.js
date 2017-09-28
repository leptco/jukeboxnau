import React, { Component } from 'react';

class TabSong extends Component {
	state ={
		activeAuthor: false,
		playSongIndex: null,
		selectSongIndex: null,
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

	render() {
		return (
			<section className="tab__body song">
				<div className="container song__container">
					<ul className="song__list">
						<li className={`row song__item ${this.state.playSongIndex === '1' ? 'song__item--playing' : ''}`}>
							<span className="song__item__author" onClick={this.activeAuthor}>
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
									data-index={1}
									onClick={this.playSong}
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
									className="song__item__book-user js-song__item__book-user"
								>
									<i className="fa fa-eye" aria-hidden="true" />
								</a>
								<a
									href="#"
									className="song__item__lyric"
									onClick={this.props.openPopUp}
								>
									<i className="fa fa-file-text" aria-hidden="true" />
								</a>
								<a
									href="#"
									className="song__item__repeat js-song__item__repeat"
								>
									<i className="fa fa-retweet" aria-hidden="true" />
								</a>
								<a
									href="#"
									className="song__item__remove js-song__item__remove"
								>
									<i className="fa fa-times" aria-hidden="true" />
								</a>
							</div>
							{/* /.col col--4 song__item__control */}
						</li>
						<li className={`row song__item ${this.state.playSongIndex === '2' ? 'song__item--playing' : ''}`}>
							<span className="song__item__author" onClick={this.activeAuthor}>
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
									data-index={2}
									onClick={this.playSong}
									title="Hương Tràm - Em Gái Mưa ( Anh Khang Cover ) - YouTube"
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
									className="song__item__book-user js-song__item__book-user"
								>
									<i className="fa fa-eye" aria-hidden="true" />
								</a>
								<a
									href="#"
									className="song__item__lyric"
									onClick={this.props.openPopUp}
								>
									<i className="fa fa-file-text" aria-hidden="true" />
								</a>
								<a
									href="#"
									className="song__item__repeat js-song__item__repeat"
								>
									<i className="fa fa-retweet" aria-hidden="true" />
								</a>
								<a
									href="#"
									className="song__item__remove js-song__item__remove"
								>
									<i className="fa fa-times" aria-hidden="true" />
								</a>
							</div>
							{/* /.col col--4 song__item__control */}
						</li>
						{/* /.song__item */}
						<li data-index={2} className={`row song__item ${this.state.selectSongIndex === '2' ? 'song__item--selected' : ''}`} onClick={this.selectSong}>
							<span className="song__item__author">
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
									className="song__item__book-user js-song__item__book-user"
								>
									<i className="fa fa-eye" aria-hidden="true" />
								</a>
								<a
									href="#"
									className="song__item__lyric"
								>
									<i className="fa fa-file-text" aria-hidden="true" />
								</a>
								<a
									href="#"
									className="song__item__repeat js-song__item__repeat"
								>
									<i className="fa fa-retweet" aria-hidden="true" />
								</a>
								<a
									href="#"
									className="song__item__remove js-song__item__remove"
								>
									<i className="fa fa-times" aria-hidden="true" />
								</a>
							</div>
							{/* /.col col--4 song__item__control */}
						</li>
						{/* /.song__item */}
					</ul>
					{/* /.song__list */}
				</div>
				{/* /.container */}
			</section>
		);
	}
}

export default TabSong;
