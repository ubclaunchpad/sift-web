import App from './containers/app'
import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import store from './store'

// Need to modify with global container
ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.getElementById('app')
);
