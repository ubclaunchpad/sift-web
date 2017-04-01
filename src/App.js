import React, {PropTypes} from 'react';
import Results from './views/Results';
import store from './store';
import {StyleRoot} from 'radium';
import UploadForm from './views/UploadForm';
import ViewTypes from './actions/ViewTypes';

// TODO: Why does this not update on viewState change?
// Possibly, need to switch on state viewstate

const App = ({viewState}) => {
	let ViewComponent = null;
	switch (store.getState().fileProcessing.viewState) {
		case ViewTypes.FORM:
			ViewComponent = UploadForm;
			break;
		case ViewTypes.PROCESSING:
			ViewComponent = null;
			break;
		case ViewTypes.RESULTS:
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
