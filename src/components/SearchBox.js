import React, { Component } from 'react';

class SearchBox extends Component {
	render() {
		return (
			<li className="col col--7 navbar__item navbar__item--input">
				<form action="#" className="search-box search-box--focus">
					<div className="search-box__wrap">
						<div className="search-box__input">
							<input
								type="text"
								className="search-box__input"
								placeholder="Search old song or add new NCT, Zing, YouTube, SoundClound URL"
							/>
						</div>
						<button type="submit" className="search-box__submit">
							SEARCH
						</button>
					</div>
				</form>
			</li>
		);
	}
}

export default SearchBox;
