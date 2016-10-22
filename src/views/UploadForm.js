import Button from './../components/Button';
import DropArea from './../components/DropArea';
import ConceptInput from './../components/ConceptInput';
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
