import React, { Component } from 'react';

class TabSong extends Component {
	render() {
		return (
			<section className="tab__body song">
				<div className="container song__container">
					<ul className="song__list">
						<li className="row song__item song__item--playing">
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
									className="song__item__lyric js-song__item__lyric"
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
						<li className="row song__item song__item--selected">
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
									className="song__item__lyric js-song__item__lyric"
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
