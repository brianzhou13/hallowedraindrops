// a placeholder for our output (button, run items) component
// code in here is only for testing purposes

import React from 'react';
import { render } from 'react-dom';
import OutputLine from './outputLine.jsx';

var Promise = require('bluebird');

var Output = ({output}) => {

/* ******
	
	I don't think we need this anymore. We only need output.jsx to output the
	div id tag of 'console-terminal-editor'

	// items before: 

	Program Response:
	{output.map((line, index) => <OutputLine key={index} line={line}/>)}

 * ******/
	return (
    <div id="console-terminal-editor" className="home-console"></div>
	)
}

export default Output;
