/* © 2017
 * @author Thanh
 */
import { dispatch } from './AppDispatcher';


export const CHANGE_TAB = 'CHANGE_TAB';

/**
 * @param  {String} tabIndex tab index of the new section
 * @return {void}
 */
export function changeTab(tabIndex) {
	console.log('Action.changeTab', tabIndex);
	dispatch({ type: CHANGE_TAB, tabIndex });
}

