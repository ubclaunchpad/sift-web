/* eslint-disable no-console */
const logger = store => next => action => {
	console.log('DISPATCH: ', action);
	const result = next(action)
	console.log('STATE: ', store.getState());
	return result;
};
/* eslint-enable */

export default logger
