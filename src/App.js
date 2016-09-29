import React, { Component } from 'react';
import './App.css';

const Foo = () => <div>Foo</div>

class Bar extends Component {
  render() { return <div>Bar</div> }
}

class Baz extends Component {
  render() { return <div><Foo/></div> }
}

class App extends Component {
  render() { return <div><Foo/><Bar/><Baz/></div> }
}

export { Foo, Bar, Baz }
export default App;
