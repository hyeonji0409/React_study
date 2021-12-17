import React, { Component } from "react";
import Subject from './components/Subject';
import Content from './components/Content';
import NAV from './components/NAV';
import JSX from './components/JSX';


// 컴포넌트 추가

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h3>안녕하세요</h3> */}
        {/* JSX 영역 주석표시 */}
        {/* <Subject></Subject>
        <NAV></NAV>
        <Content></Content> */}
        <JSX></JSX>
      </div>
    );
  }
}

export default App;