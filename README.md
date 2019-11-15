# react-pipe
> Pipe for react.

## install
```shell
npm install -S afeiship/react-pipe
```

## usage
1. import css
  ```scss
  @import "~react-pipe/style.scss";

  // customize your styles:
  $react-pipe-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactPipe from 'react-pipe';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactPipe />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-pipe/
