import React from 'react';
import { render } from 'react-dom';

var Promise = require('bluebird');

class App extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
  	  text: 'hello world', // text is going to be the code the user inputs
  	};
  }

  componentDidMount() {

    this.editor = this.editorSetup();
    this.socket = this.setupSocket();
    this.editor.setValue(this.state.text);
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
      url: 'http://127.0.0.1:8080/api/replservice/runcode',
      data: {code: this.state.text},
      success: (data) => {
        console.log('data value is: ', data);
        console.log('value for success is: ', this);
        this.socket.emit('append result', data);
        // $('.response').append(data);
      },
      error: (err) => {
        console.log('error is: ', err);
      }
    });
  }

  // setupSocket will emit the events when the keydown event occurs
  // there is a problem here... where we are transmitting every key
  setupSocket() {
    var socket = io();
    var text = this.editor.getValue();
    this.setState({
      text: text
    });

    socket.on('alter text', (msg) => {
      if (this.state.text !== msg) {
        console.log('making changes');
        this.setState({
          text: msg
        });
        var range = this.editor.getSelectionRange();
        var pos = this.editor.getCursorPosition();
        console.log(range);
        console.log(this.editor);
        this.editor.setValue(this.state.text);
        // this.editor.clearSelection();
        this.editor.selection.setRange(range);
        // this.editor.navigateTo(range.start.row, range.start.colum);
        // this.editor.moveCursorTo(range.end.row, range.end.column);
      }
    });

    socket.on('alter result', (msg) => {
      console.log('going to append this: ', msg);
      $('.response').append(msg);
    });

    return socket;
  }

  // editorSetup will place in the settings for our editor
  // i.e. themes, language, etc.
  editorSetup () {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
    editor.resize();

    // editor.on('change', function(e) {
    //   console.log('This changed!, ', e);
    // });
    var socket = io();

    return editor;
  }

  handleKeyPress (e) {
    var text = this.editor.getValue();
    this.setState({
      text: text
    });

    this.socket.emit('text change', text);
  }

  render () {
  	return (
  	  <div>
  	  	<button onClick={this.getText.bind(this)}>get code</button>
        <button onClick={this.sendCode.bind(this)}>process code</button>
        <div>
          Response is: <p className="response"></p>
        </div>
  	    <div>
  	    <div id="editor" onKeyUp={this.handleKeyPress.bind(this)}></div>
  	    </div>
  	  </div>
  	)
  }
}

render(<App/>, document.getElementById('app'));
