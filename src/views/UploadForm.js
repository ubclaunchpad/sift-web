import Button from './../components/Button';
import ConceptInput from './../components/ConceptInput';
import DropArea from './../components/DropArea';
import ProgressIndicator from './../components/ProgressIndicator';
import React from 'react';
import SentimentAnalysisGraph from './../components/SentimentAnalysisGraph';

const UploadForm = () => (
	<div>
		<DropArea />
		<Button />
		<ConceptInput />
		<SentimentAnalysisGraph />
		<ProgressIndicator />
	</div>
);

UploadForm.displayName = 'UploadForm';

export default UploadForm;
