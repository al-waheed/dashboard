import React, { Component } from 'react'
import './App.css';
import Sidebar from './Sidebar';
import Cards from './Cards';
import Navbar from './Navbar';
import MainMenu from './MainMenu';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Sidebar />
        <main>
          <Navbar />
          <Cards />
          <MainMenu />
        </main>
      </div>
    )
  }
}

export default App;
