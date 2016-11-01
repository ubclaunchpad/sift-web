import Button from './../components/Button';
import ConceptInput from './../components/ConceptInput';
import DropArea from './../components/DropArea';
import React from 'react';
import SentimentAnalysisGraph from './../components/SentimentAnalysisGraph';

const UploadForm = () => (
	<div>
		<DropArea />
		<Button />
		<ConceptInput />
		<SentimentAnalysisGraph />
	</div>
);

UploadForm.displayName = 'UploadForm';

export default UploadForm;
