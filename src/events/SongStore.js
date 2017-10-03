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
			listSong: [{ id: 1, type: 1 }, { id: 2, type: 1 }, { id: 3, type: 2 }, { id: 4, type: 1 }],
		};
	}

	deleteSong(id) {
		let listSong = { ...this.getRootState('listSong') };
		for (let i = 0, length = listSong.length; i < length; i++) {
			if (listSong.indexOf(listSong[i].id) === id) {
				listSong.splice(i, 1);
				break;
			}
		}
		console.log('new', listSong);
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
				console.log(reducedState.listSong);
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
