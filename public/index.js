import ReactFilter from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

import addZero from './pipes/add-zero';
import toString from './pipes/to-string';
import addMore from './pipes/add-more';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <ReactFilter
          items={[
            { fn: addZero },
            { fn: toString },
            { fn: addMore, args: ['hele', 'haha'] }
          ]}>
          HELLO
        </ReactFilter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
