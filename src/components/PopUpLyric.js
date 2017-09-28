import React, { Component } from 'react';

class PopUpLyric extends Component {
	render() {
		return (
			<section
				onClick={this.props.closePopUp}
				className={`popup-lyric ${this.props.openPopUp ? 'popup-lyric--active' : ''}`}>
				<div className="popup-lyric__wrap">
					<header className="popup-lyric__header">
						<h4 className="popup-lyric__title">Lyric</h4>
						<span className="popup-lyric__close" onClick={this.props.closePopUp}>
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
		);
	}
}

export default PopUpLyric;
