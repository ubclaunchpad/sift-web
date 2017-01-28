import Button from './../components/Button';
import ConceptInput from './../components/ConceptInput';
import DropArea from './../components/DropArea';
import ProgressIndicator from './../components/ProgressIndicator';
import React from 'react';
import SentimentAnalysisGraph from './../components/SentimentAnalysisGraph';

const ReportView = () => (
	<div>
		<SentimentAnalysisGraph />
	</div>
);

ReportView.displayName = 'ReportView';

export default ReportView;
