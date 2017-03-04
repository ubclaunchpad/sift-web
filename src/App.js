import React, {PropTypes} from 'react';
import Results from './views/Results';
import store from './store';
import {StyleRoot} from 'radium';
import UploadForm from './views/UploadForm';
import ViewTypes from './actions/ViewTypes';

// TODO: Why does this not update on viewState change?
// Possibly, need to switch on state viewstate

const App = ({viewState}) => {
	console.log('app');
	let ViewComponent = null;
	console.log(store.getState().fileProcessing.viewState);
	switch (store.getState().fileProcessing.viewState) {
		case "FORM":
			ViewComponent = UploadForm;
			break;
		case "PROCESSING":
			console.log("Processing!");
			ViewComponent = null;
			break;
		case "RESULTS":
			ViewComponent = Results;
			break;
		default:
			ViewComponent = UploadForm;
	}

	return (
		<StyleRoot>
			<ViewComponent />
		</StyleRoot>
	)
}

App.displayName = 'App';

App.propTypes = {
	viewState: PropTypes.string
}

export default App;
