import { applyMiddleware, createStore} from 'redux'
import combineReducers from './reducers/CombinedReducers'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();
const store = createStore(
	combineReducers,
	applyMiddleware(thunk, logger)
);

export default store;
