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
var main_socket;
var client_id = chance.string({length:5, pool:'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'});



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
      console: null,
      current_question: '',
      github: '',
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
    this.testCode = this.testCode.bind(this);
    this.startConsole = this.startConsole.bind(this);
    this.pairMe = this.pairMe.bind(this);
    this.sidebar();
    this.startConsole();

    this.getGithubName = this.getGithubName.bind(this);
    this.analyzeCode = this.analyzeCode.bind(this);

    this.getGithubName();

    // reset the container to 0
    $('.container').css("margin", 0);

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
      url: '/api/replservice/runcode',
      data: {code: this.state.text},
      success: (data) => {
        this.socket.emit('append result', data);
        // $('.response').append(data);
        // console.log('after socket');
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus, errorThrown, jqXHR);
      }
    });
  }

  getGithubName() {
    // you'd use this to get the github id on the session
    $.ajax({
      method: 'GET',
      url: '/auth/github_user',
      success: (data) => {
        var x = JSON.stringify(data);
        var userIndex = x.search(/username/) + 13;
        var profileIndex = x.search(/profileUrl/);
        var sliced = x.slice(userIndex,profileIndex);
        var slicedIndex = (/[\W]/g).exec(sliced);
        var final = sliced.slice(0, slicedIndex.index);
        this.setState({
          github: final
        });
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus, errorThrown, jqXHR);
      }
    })

  }

  analyzeCode() {
    $.ajax({
      method: 'POST',
      data: {code: this.state.text },
      url: 'https://pacific-caverns-88696.herokuapp.com/api/analytics' + this.state.github + '/' + this.state.current_question,
      success: (data) => {
        // console.log('success in sending to analytics');
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus, errorThrown, jqXHR);
      }
    })
  }

  testCode() {
    $.ajax({
      method: 'POST',
      url: '/api/replservice/testcode',
      data: {code: this.state.text, name: this.state.current_question},
      success: (data) => {
        // var val = JSON.parse(data);
        if (data.err) {
          console.log(data.err);
        } else {
          this.socket.emit('append result', data, 'test');
        }
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus, errorThrown, jqXHR);
      }
    });
  }

  pasteConsole(data) {
    data = JSON.parse(data);
    var passed = data.passedTests;
    var failed = data.failedTests;
    var passes = passed.length;
    var fails = failed.length;

    if (!failed.length) {
      this.analyzeCode();
      var pass = 'All Tests Passed! \n Challenge has been added to the database';
      this.state.console.Write(pass + '\n', 'my-output-class');
    } else {
      var fail = 'Oh No! ' + fails.toString() + ' out of ' + (passes + fails).toString() +  ' tests did not pass! \n\n';

      failed.forEach((test) => {
        fail += 'Test #' + test.order_counter.toString() + ' failed!\n';
        fail += test.errs.message + "\n\n";
      });
      this.state.console.Write(fail + '\n', 'my-output-class');
    }

  }

  pairMe() {
    // console.log('pairme');
    main_socket.emit('message', {
      client_id: client_id
    });
  }

  // setupSocket will emit the events when the keydown event occurs
  // there is a problem here... where we are transmitting every key
  setupSocket() {
    var socket = io(window.location.pathname.split('editor')[1]); // FIX ME
    main_socket = io();
    main_socket.on(client_id, (data) => {
      window.location.pathname = '/editor' + data.namespace;
    });
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

    socket.on('alter result', (msg, test) => {
      if (test === 'test') {
        this.pasteConsole(msg);
      } else {
      //2 and 3
      var finalMsg = msg.slice(2, msg.length);
      var finalMsg = finalMsg.substring(0, finalMsg.length - 3);

      // write into the output console
      // note that it's expecting a string
      this.state.console.Write(finalMsg + '\n', 'my-output-class');
      }
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
    editor.setShowPrintMargin(false);
    editor.resize();

    return editor;
  }

  handleKeyPress (e) {
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
  	$("#wrapper").toggleClass("toggled");

    if(!this.state.sidebar) { // if it's not clicked
      // adjust the div=container
      $('.container').css("margin", 0);
      // $('.container').css("margin-right", "0px");
    }
	}

  startConsole () {
    // move jqconsole out
    var jqconsole = $('#console-terminal-editor').jqconsole('Hi\n', '>>>');

    this.setState({
      console: jqconsole
    });

    // jqconsole setup


    $(function () {
        var startPrompt = function () {
        // Start the prompt with history enabled.
        jqconsole.Prompt(true, function (input) {
        // Output input with the class jqconsole-output.
        jqconsole.Write(input + '\n', 'jqconsole-output');
        // Restart the prompt.ed
        });
      };
    startPrompt();
    });
    // $(div).jqconsole(welcomeString, promptLabel, continueLabel);
  }

  pasteCode(question) {
    this.editor.setValue(question.prompt);
    this.setState({current_question: question.name});
  }

	render () {
    var currentQ = this.state.current_question === '' ? <h3 className="panel-title">Editor</h3> :
                    <h3 className="panel-title">Challenge Name : {this.state.current_question}</h3>

    return (
    	<div className="container-fluid">
      	<Navigation sidebar={this.sidebar} sendcode={this.sendCode} testcode={this.testCode} pairme={this.pairMe} ></Navigation>
	    	<div id="wrapper">
	    		<Sidebar pasteCode={this.pasteCode.bind(this)}></Sidebar>
          <div className="container" id="editor-container">
            <div className="col-sm-12 col-md-6">
              <div className="panel">
                <div className="panel-heading">
                {currentQ}
                </div>
                <div className="panel-body">
                  <div id="editor" onKeyUp={this.handleKeyPress.bind(this)}> </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="panel">
                <div className="panel-heading">
                  <h3 className="panel-title">Console</h3>
                </div>

                <div className="panel-body">
                  <div className="home-editor">
                    <Output output={this.state.outputText} console={this.state.console}></Output>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Editor;

