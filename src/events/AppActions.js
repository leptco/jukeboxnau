/* © 2017
 * @author Thanh
 */
import { dispatch } from './AppDispatcher';


export const CHANGE_TAB = 'CHANGE_TAB';

export const CHANGE_NHAP = 'CHANGE_NHAP';

export const DELETE_SONG = 'DELETE_SONG';

/**
 * @param  {String} tabIndex tab index of the new section
 * @return {void}
 */
export function changeTab(tabIndex) {
	console.log('Action.changeTab', tabIndex);
	dispatch({ type: CHANGE_TAB, tabIndex });
}


export function deleleSong(id) {
	dispatch({ type: DELETE_SONG, id });
}

