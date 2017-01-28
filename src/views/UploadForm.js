import Button from './../components/Button';
import ConceptInput from './../components/ConceptInput';
import DropArea from './../components/DropArea';
import React from 'react';

const UploadForm = () => (
	<div>
		<DropArea />
		<Button />
		<ConceptInput />
	</div>
);

UploadForm.displayName = 'UploadForm';

export default UploadForm;
