import React, {PropTypes} from 'react';
import Results from './views/Results';
import {StyleRoot} from 'radium';
import UploadForm from './views/UploadForm';
import ViewTypes from './actions/ViewTypes';

const App = ({viewState}) => {
	console.log('app');
	let ViewComponent = null;

	switch (viewState) {
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
			ViewComponent = UploadForm
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
