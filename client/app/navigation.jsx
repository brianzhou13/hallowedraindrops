// a placeholder for our navigation (button, run items) component
// code in here is only for testing purposes

import React from 'react';
import { render } from 'react-dom';

var Promise = require('bluebird');

export default class Navigation extends React.Component {


	// ????
	getText() {
  	var code = this.editor.getValue();
  	this.setState({
  	  text : code
  	});
  }

	render () {
		return (
		  <div>
		    <button>Run Code </button>

		  </div>
		)
	}
}

// module.exports = Editor; // 