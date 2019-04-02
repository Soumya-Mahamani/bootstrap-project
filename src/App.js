import React, { Component } from 'react';
import Bootstrap from './Bootstrap';
import Footer from './Footer';
import './changes.css';
class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: '#000033'}}>
        <Bootstrap></Bootstrap>
        <hr/>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
