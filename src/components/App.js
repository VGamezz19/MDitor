import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import CircleButton from './CircleButton'
import Sidenav from './Sidenav'


class App extends Component {
  render() {
    return (
      <section className="App">
        <article>
          <Sidenav  
            style={{ButtonClassName:'grey lighten-2', IconClassName:'black-font', icon:'menu'}}
            className=''/>
          <CircleButton ButtonClassName='grey lighten-2' IconClassName='black-font' icon='edit' />
        </article>
      </section>
    );
  }
}

export default App;
