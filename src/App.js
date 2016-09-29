import React, { Component } from 'react';
import './App.css';

const Foo = () => <div>Foo</div>

class Bar extends Component {
  render() { return <div>Bar</div> }
}

class App extends Component {
  render() { return <div><Foo/><Bar/></div> }
}

export { Foo, Bar }
export default App;
