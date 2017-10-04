import React, { Component } from 'react';

class TabUsers extends Component {
	render() {
		return (
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
								<form action="#">
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
		);
	}
}

export default TabUsers;
