import React, { Component } from 'react';

import AppHeader from './components/AppHeader';


class App extends Component {

	render() {
		return (
			<div>
				<AppHeader name="Thanh" />
				<main className="tab">
					<button className="tab__collapse js-tab__collapse">
						<i className="fa fa-bars" aria-hidden="true" />
					</button>
					<nav className="tab__nav">
						<div className="container tab__nav__container">
							<ul className="nav-play-list">
								<li className="nav-play-list__item nav-play-list__item--active">
									<a href="#play-list">Play List</a>
								</li>
								<li className="nav-play-list__item">
									<a href="#play-list">Yesterday</a>
								</li>
								<li className="nav-play-list__item">
									<a href="#play-list">Last 7 day</a>
								</li>
								<li className="nav-play-list__item">
									<a href="#play-list">Top Lists</a>
								</li>
								<li className="nav-play-list__item">
									<a href="#play-list">Users</a>
								</li>
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
					{/* /.tab__nav */}
					<section className="tab__body song">
						<div className="container song__container">
							<ul className="song__list">
								<li className="row song__item song__item--playing">
									<span className="song__item__author">
										{" "}
										Phạm Thanh Huyền Phạm Thanh Huyền{" "}
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
										{" "}
										Phạm Thanh Huyền Phạm Thanh Huyền{" "}
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
					{/* /.tab__body song */}
					<section className="tab__body users">
						<div className="container users__container">
							<h5 className="users__title">
								Users
								<span>₦: Naucoin, ₦1.00 = 1000VND</span>
							</h5>
							<ul className="users__list">
								<li className="row users__item users__item--active">
									<img
										src="https://thumbs.dreamstime.com/t/imge-mint-closeup-green-leaves-texture-background-72159554.jpg"
										width={50}
										height={50}
										alt="image user"
										className="users__item__avt"
									/>
									<div className="users__item__info">
										<div className="users__item__user">
											<p className="users__item__name">
												Mondo Records Mondo Records Records Mondo Records
											</p>
											<span className="users__item__coin">2.00</span>
										</div>
									</div>
									{/* /.users__item__info */}
									<div className="users__item__payment">
										<form action="#" className>
											<div className="users__item__payment__input-wraper">
												<label
													htmlFor="users__item__payment__input"
													className="users__item__payment__label"
												>
													AMOUNT OF PAYMENT (+/-)
												</label>
												<input
													className="users__item__payment__input"
													type="number"
													id="users__item__payment__input"
												/>
											</div>
											<div className="col col--5">
												<input
													className="btn btn--primary users__item__payment__submit"
													type="submit"
													defaultValue="Submit"
												/>
											</div>
										</form>
									</div>
									{/* /.users__item__payment */}
								</li>
								{/* /.users__item */}
								<li className="row users__item">
									<img
										src="https://thumbs.dreamstime.com/t/imge-mint-closeup-green-leaves-texture-background-72159554.jpg"
										width={50}
										height={50}
										alt="image user"
										className="users__item__avt"
									/>
									<div className="users__item__info">
										<p className="users__item__name">
											Mondo Records Mondo Records Records Mondo Records
										</p>
										<span className="users__item__coin">2.00</span>
									</div>
									{/* /.users__item__info */}
								</li>
								{/* /.users__item */}
							</ul>
							{/* /.users__list */}
						</div>
						{/* /.container */}
					</section>
					{/* /.tab__body user */}
					<section className="tab__body top-song">
						<div className="container top-song__container">
							<h5 className="top-song__title">
								Top Songs
								<span>Sep 18th - Sep 24th</span>
							</h5>
							<ul className="flex-grid top-song__list">
								<li className="flex-grid__col top-song__item">
									<figure>
										<div className="top-song__item__img">
											<img
												src="https://thumbs.dreamstime.com/t/imge-mint-closeup-green-leaves-texture-background-72159554.jpg"
												alt="First image"
											/>
											<p className="top-song__item__count">
												4 <span>listings</span>
											</p>
										</div>
										<figcaption className="top-song__item__title">
											<h6>CHO HỌ GHÉT ĐI EM (OFFICIAL MV) - HUỲNH JAMES</h6>
											<p className="top-song__item__author">
												Mondo Records Mondo Records
											</p>
										</figcaption>
									</figure>
								</li>
								<li className="flex-grid__col top-song__item">
									<figure>
										<div className="top-song__item__img">
											<img
												src="https://thumbs.dreamstime.com/t/imge-mint-closeup-green-leaves-texture-background-72159554.jpg"
												alt="First image"
											/>
											<p className="top-song__item__count">
												4 <span>listings</span>
											</p>
										</div>
										<figcaption className="top-song__item__title">
											<h6>CHO HỌ GHÉT ĐI EM (OFFICIAL MV) - HUỲNH JAMES</h6>
											<p className="top-song__item__author">
												Mondo Records
											</p>
										</figcaption>
									</figure>
								</li>
								<li className="flex-grid__col top-song__item">
									<figure>
										<div className="top-song__item__img">
											<img
												src="https://thumbs.dreamstime.com/t/imge-mint-closeup-green-leaves-texture-background-72159554.jpg"
												alt="First image"
											/>
											<p className="top-song__item__count">
												4 <span>listings</span>
											</p>
										</div>
										<figcaption className="top-song__item__title">
											<h6>CHO HỌ GHÉT ĐI EM (OFFICIAL MV) - HUỲNH JAMES</h6>
											<p className="top-song__item__author">
												Mondo Records
											</p>
										</figcaption>
									</figure>
								</li>
								<li className="flex-grid__col top-song__item">
									<figure>
										<div className="top-song__item__img">
											<img
												src="https://thumbs.dreamstime.com/t/imge-mint-closeup-green-leaves-texture-background-72159554.jpg"
												alt="First image"
											/>
											<p className="top-song__item__count">
												4 <span>listings</span>
											</p>
										</div>
										<figcaption className="top-song__item__title">
											<h6>CHO HỌ GHÉT ĐI EM (OFFICIAL MV) - HUỲNH JAMES</h6>
											<p className="top-song__item__author">
												Mondo Records
											</p>
										</figcaption>
									</figure>
								</li>
								<li className="flex-grid__col top-song__item">
									<figure>
										<div className="top-song__item__img">
											<img
												src="https://thumbs.dreamstime.com/t/imge-mint-closeup-green-leaves-texture-background-72159554.jpg"
												alt="First image"
											/>
											<p className="top-song__item__count">
												4 <span>listings</span>
											</p>
										</div>
										<figcaption className="top-song__item__title">
											<h6>CHO HỌ GHÉT ĐI EM (OFFICIAL MV) - HUỲNH JAMES</h6>
											<p className="top-song__item__author">
												Mondo Records
											</p>
										</figcaption>
									</figure>
								</li>
							</ul>
							{/* /.flex-grid top-song__list */}
						</div>
						{/* /.container */}
					</section>
					{/* /.tab__body top-song */}
					<section className="popup-lyric js-popup-lyric">
						<div className="popup-lyric__wrap">
							<header className="popup-lyric__header">
								<h4 className="popup-lyric__title">Lyric</h4>
								<span className="popup-lyric__close js-popup-lyric-close">
									X
								</span>
							</header>
							<article className="popup-lyric__body">
								<h6 className="popup-lyric__name">Sau Chia Tay</h6>
								<p className="popup-lyric__full">
									Bài hát : Sau Chia Tay - Phạm Hồng Phước Rồi một mai đôi
									ta hết yêu Rồi em buông tay anh bước đi Và anh đây thật sự
									không chắc anh giữ lí trí không ôm em từ đằng sau Anh như
									bao người khác thôi, cũng yếu đuối và rất bấp bênh Khi
									lòng này giờ đã quen đi cùng một ai Bài hát : Sau Chia Tay
									- Phạm Hồng Phước Rồi một mai đôi ta hết yêu Rồi em buông
									tay anh bước đi Và anh đây thật sự không chắc anh giữ lí
									trí không ôm em từ đằng sau Anh như bao người khác thôi,
									cũng yếu đuối và rất bấp bênh Khi lòng này giờ đã quen đi
									cùng một ai Khi lòng này giờ đã quen đi cùng một ai Bài
									hát : Sau Chia Tay - Phạm Hồng Phước Rồi một mai đôi ta
									hết yêu Rồi em buông tay anh bước đi Và anh đây thật sự
									không chắc anh giữ lí trí không ôm em từ đằng sau Anh như
									bao người khác thôi, cũng yếu đuối và rất bấp bênh Khi
									lòng này giờ đã quen đi cùng một ai
								</p>
							</article>
						</div>
					</section>
					{/* /.popup-lyric */}
				</main>
				{/* /.tab */}
			</div>
		);
	}
}

export default App;
