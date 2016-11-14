import React, {PropTypes} from 'react';
import Radium from 'radium';

const getStyles = size => ({
	width: size,
	height: size,

	borderRadius: '50%',
	borderWidth: size / 8,
	borderStyle: 'solid',
	borderTopColor: 'blue',
	borderRightColor: 'green',
	borderBottomColor: 'red',
	borderLeftColor: 'yellow',

	animation: 'spin 2s linear infinite',
	animationName: Radium.keyframes({
		'0%': {transform: 'rotate(0deg)'},
		'100%': {transform: 'rotate(360deg)'}
	}, 'spin')
})

const ProgressIndicator = ({size}) => (
	<div style={getStyles(size)} />
);

ProgressIndicator.displayName = 'ProgressIndicator';
ProgressIndicator.propTypes = {size: PropTypes.number.isRequired};
ProgressIndicator.defaultProps = {size: 120};

export default Radium(ProgressIndicator);
