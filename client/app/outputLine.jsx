// a placeholder for our output (button, run items) component
// code in here is only for testing purposes

import React from 'react';
import { render } from 'react-dom';

var Promise = require('bluebird');

var OutputLine = ({line}) => (
  <p id="responseText" className="response">{line}</p>
)


export default OutputLine;
