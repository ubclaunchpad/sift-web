import {applyMiddleware, createStore} from 'redux'
import logger from './middleware/logger';
import reducers from './reducers'

export default createStore(
	reducers,
	applyMiddleware(logger)
)
