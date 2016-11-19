import { Provider } from "react-redux"
import React from 'react'
import ReactDOM from 'react-dom'

import store from './store'
import UploadForm from './views/UploadForm'


// TODO: Need to modify with global container
ReactDOM.render(
	<Provider store={store}><UploadForm /></Provider>,
	document.getElementById('app')
);
