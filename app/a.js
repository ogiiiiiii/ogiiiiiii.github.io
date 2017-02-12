// a.js

import React from 'react';
import { Button } from 'react-bootstrap';
import { render } from 'react-dom';

class App extends React.Component {
    render() {
        return <div>
            <Button>{'Button'}</Button>
        </div>;
    }
}

render(<App />, document.querySelector('#app'));