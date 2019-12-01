# react-pipe
> Pipe for react.

## installation
```shell
npm install -S @feizheng/react-pipe
```
## properties
| property        | type | description |
| --------------- | ---- | ----------- |
| className       | -    | -           |
| value           | -    | -           |
| onChange        | -    | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-pipe/dist/style.scss";

  // customize your styles:
  $react-pipe-options: ()
  ```
2. import js
  ```js
  import ReactPipe from '../src/main';
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
          <ReactPipe
            items={[
              { fn: addZero },
              { fn: toString },
              { fn: addMore, args: ['hele', 'haha'] }
            ]}>
            HELLO
          </ReactPipe>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-pipe/
