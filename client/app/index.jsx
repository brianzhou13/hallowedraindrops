import React from 'react';
import { render } from 'react-dom';

// index.jsx is going to house both the editor as well the editors' output

class App extends React.Component {

  constructor(props) {
    super(props);
  }


  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

module.exports = App;

// render(<App/>, document.getElementById('app'));
