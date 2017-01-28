import ActionCreators from './../actions/ActionCreators';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Results from './../views/Results';
import UploadForm from './../views/UploadForm';
import views from './../actions/ViewEnum';

class App extends Component {
	static displayName = 'App';

	static propTypes = {
		viewState: React.PropTypes.string
	};

	static defaultProps = {
		viewState: views.FORM
	};

	render() {
		if (this.props.viewState === views.FORM) {
			return <UploadForm />;
		} /*else if (this.props.viewState === views.PROCESSING) {
			return // <Processing />;
		}*/ else if (this.props.viewState === views.RESULTS) {
			return <Results />;
		}
	}
}

const mapStateToProps = state => {
	return {viewState: state.view.viewState};
}

export default connect(mapStateToProps)(App)
