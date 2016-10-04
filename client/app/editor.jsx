// a placeholder for our editor file.
// code in here is only for testing purposes

import React from 'react';
import { render } from 'react-dom';

import Output from './output.jsx';
import Sidebar from './challenge.jsx';
import Navigation from './navigation.jsx';

import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';
import jqconsole from '../jqconsole.js';



var Promise = require('bluebird');

class Editor extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
	    text: "console.log('hello world')", // text is going to be the code the user inputs
	    outputText: [],
	    sidebar: false,
	    question: '',
	    auth: false,
      console: null
	  };
	}
	
	componentDidMount() {
    this.editor = this.editorSetup();
    this.socket = this.setupSocket();
    this.editor.setValue(this.state.text);

    // functions that are getting passed into navigation.jsx
    this.sidebar = this.sidebar.bind(this);
    this.getText = this.getText.bind(this);
    this.sendCode = this.sendCode.bind(this);
    this.startConsole = this.startConsole.bind(this);
    this.startConsole();

    console.log('state-bar', this.state.sidebar);
  }


  getText() {
    var code = this.editor.getValue();
    this.setState({
      text : code
    });
  }

  // sendCode will take the code on the 'text' state
  // and will be processed on the server
  sendCode() {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8080/api/replservice/runcode',
      data: {code: this.state.text},
      success: (data) => {
        console.log('data value is: ', data);
        this.socket.emit('append result', data);
        // $('.response').append(data);
        console.log('after socket');
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus, errorThrown, jqXHR);
      }
    });
  }

  // setupSocket will emit the events when the keydown event occurs
  // there is a problem here... where we are transmitting every key
  setupSocket() {
    console.log(window.location.pathname);
    var path = window.location.pathname;
    path = path.split('editor');
    console.log('path at 75 is: ', path);
    var socket = io(path[1]); // FIX ME
    var text = this.editor.getValue();
    this.setState({
      text: text
    });

    socket.on('alter text', (msg) => {
      if(this.state.text !== msg) {
        this.setState({
          text: msg
        });

        //Get the range of selected text adn cursor
        var pos = this.editor.getCursorPosition();
        var range = this.editor.getSelectionRange();

        this.editor.setValue(this.state.text);

        // make sure the selected word stays highlighted
        if (range.start.row === pos.row && range.start.column === pos.column) {
          this.editor.selection.setRange(range, true);
        } else {
          this.editor.selection.setRange(range);
        }
      }
    });

    socket.on('alter result', (msg) => {
      console.log('going to append this: ', msg);
      console.log('typeof msg is: ', typeof msg);
      //2 and 3
      var finalMsg = msg.slice(2, msg.length);
      var finalMsg = finalMsg.substring(0, finalMsg.length - 3);

      // var output = [];
      // msg.split('\n').forEach((line) => {
      //   output.push(line);
      // });

      // this.setState({
      //   outputText: output
      // });

      // write into the output console
      // note that it's expecting a string
      this.state.console.Write(finalMsg + '\n', 'my-output-class');


      // $('.response').append(msg);
    });

    return socket;
  }

  // editorSetup will place in the settings for our editor
  // i.e. themes, language, etc.
  editorSetup () {
    var editor = ace.edit("editor");

    editor.setTheme("ace/theme/dreamweaver");
    editor.getSession().setMode("ace/mode/javascript"); // going to execute js
    editor.getSession().setUseSoftTabs(true); // use soft-tabs
    editor.setHighlightActiveLine(false); // sets line highlighting
    document.getElementById('editor').style.fontSize='13px'; // sets the font-size
    editor.getSession().setUseWrapMode(true);
    editor.resize();

    return editor;
  }

  handleKeyPress (e) {
    console.log('keypress is called');
    var text = this.editor.getValue();
    this.setState({
      text: text
    });

    this.socket.emit('text change', text);
  }

	sidebar () {
	  this.setState({
	    sidebar: !this.state.sidebar
	  });
  	console.log('menutoggled has been triggered');
  	$("#wrapper").toggleClass("toggled");
	}

  startConsole () {
    // move jqconsole out
    var jqconsole = $('#console-terminal-editor').jqconsole('Hi\n', '>>>');

    this.setState({
      console: jqconsole
    });

    // jqconsole setup 
    // jqconsole.Write('\030[31mRed Text');


    $(function () {
        var startPrompt = function () {
        // Start the prompt with history enabled.
        jqconsole.Prompt(true, function (input) {
        // Output input with the class jqconsole-output.
        jqconsole.Write(input + '\n', 'jqconsole-output');
        // Restart the prompt.
        startPrompt();
        });
      };
    startPrompt();
    });
    // $(div).jqconsole(welcomeString, promptLabel, continueLabel);
  }


	render () {

    return (
    	<div>
    	<Navigation sidebar={this.sidebar} sendcode={this.sendCode}></Navigation>
	    	<div id="wrapper">
	    		<Sidebar></Sidebar>
	        <div id="page-content-wrapper">
	        	<Grid>
		        	<Row className="home-editor">
		        			<div id="editor" className="home-editor" onKeyUp={this.handleKeyPress.bind(this)}></div>
		        	</Row>
		        	<Row className="home-console">
		        			<Output output={this.state.outputText} console={this.state.console}></Output>
		      		</Row>
	      		</Grid>
		      </div>
		    </div>
	    </div>
    )
  }
}

export default Editor;
