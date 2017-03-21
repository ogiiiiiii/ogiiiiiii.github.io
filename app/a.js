// a.js

import React from 'react';
import { Button } from 'react-bootstrap';
import { render } from 'react-dom';

import { DropdownButton, MenuItem } from 'react-bootstrap';

class App extends React.Component {
    render() {
      return <div>
        <DropdownButton title="Dropdown">
            <MenuItem>{'Item 1'}</MenuItem>
            <MenuItem>{'Item 2'}</MenuItem>
            <MenuItem>{'Item 3'}</MenuItem>
        </DropdownButton>
        <h1>Hello, world! I am a CommentBox.</h1>
      </div>
    }
}


render(<App />, document.querySelector('#app'));
