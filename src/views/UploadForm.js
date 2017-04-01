import Button from './../components/Button';
import ConceptInput from './../components/ConceptInput';
import DropArea from './../components/DropArea';
import React from 'react';
import LoginPage from './../components/LoginPage';

const UploadForm = () => (
	<div>
		<h1> Sift </h1>
		<h2> A simple review <span> aggregator</span> app. </h2>
		<DropArea />
		<Button />
		<ConceptInput />
		<LoginPage />
	</div>
);

UploadForm.displayName = 'UploadForm';

export default UploadForm;
