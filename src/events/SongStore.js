/* © 2017 Goalify
 * @author Thanh
 */
import { ReduceStore } from 'flux/utils';
import AppDispatcher from './AppDispatcher';
import * as AppActions from './AppActions';

/**
 * The Flux ReducedStore to keep the states of the whole app
 *
 * @example
 * // to get the whole state object, avoid mutate the store object
 * AppStore.getState().stateName
 * // to get a root object from the state tree
 * AppStore.getRootState('stateName')
 */
class SongStore extends ReduceStore {
	/**
	 * Get state at the root property
	 * @param  {String} stateName name of root state
	 * @return {any}           State object
	 */
	getRootState(stateName) {
		return this.getState()[stateName];
	}

	// built-in ReduceStore hook
	getInitialState() {
		return {
			listSong: [{ id: 1, type: 0, toggleUserBook: false }, { id: 2, type: 1, toggleUserBook: false }, { id: 3, type: 2, toggleUserBook: false }, { id: 4, type: 1, toggleUserBook: false }],
			openPopUp: false,
		};
	}

	deleteSong(index) {
		let listSong = [...this.getRootState('listSong')];
		for (let i = 0, length = listSong.length; i < length; i++) {

			if (i === index) {
				listSong.splice(i, 1);
				break;
			}
		}

		return listSong;
	}

	activeSong(id) {
		let listSong = [...this.getRootState('listSong')];
		for (let i = 0, length = listSong.length; i < length; i++) {

			if (listSong[i].id === id) {
				listSong.splice(i, 1);
				break;
			}
		}

		return listSong;
	}

	toggleUserBook(id) {
		let listSong = [...this.getRootState('listSong')];
		for (let i = 0, length = listSong.length; i < length; i++) {

			if (listSong[i].id === id) {
				listSong[i].toggleUserBook = !listSong[i].toggleUserBook;
				break;
			}
		}

		return listSong;
	}

	repeatSong(id) {
		let listSong = [...this.getRootState('listSong')];
		listSong.push({ id: listSong[listSong.length - 1].id + 1, type: 1, toggleUserBook: false });

		return listSong;
	}

	addSong(link) {
		let listSong = [...this.getRootState('listSong')];
		listSong.push({ id: listSong[listSong.length - 1].id + 1, type: 1, toggleUserBook: false });

		return listSong;
	}

	/**
	 * Pure function, avoid mutate inputs
	 * @param  {Object} state  Current state object
	 * @param  {Object} action Action payload object
	 * @return {Object}        new state
	 */
	reduce(state, action) {
		let reducedState;
		switch (action.type) {
			case AppActions.DELETE_SONG:
				reducedState = {
					listSong: this.deleteSong(action.id),
				};
				break;
			case AppActions.TOGGLE_USER_BOOK:
				reducedState = {
					listSong: this.toggleUserBook(action.id),
				};
				break;
			case AppActions.REPEAT_SONG:
				reducedState = {
					listSong: this.repeatSong(action.id),
				};
				break;
			case AppActions.ADD_SONG:
				reducedState = {
					listSong: this.addSong(action.link),
				};
				break;
			case AppActions.OPEN_POP_UP:
				reducedState = {
					openPopUp: true,
				};
				break;
			case AppActions.CLOSE_POP_UP:
				reducedState = {
					openPopUp: false,
				};
				break;
			default:
				console.log(action.type, 'does nothing');
		}

		// return a new object, to immitate pure function
		return Object.assign({}, state, reducedState);
	}

}

// This will create a singleton AppStore and register events trigger from AppDispatcher
const instance = new SongStore(AppDispatcher);

export default instance;
