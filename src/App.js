import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetDataByLink from './components/GetDataByLink';
import Toggle from './components/Toggle'
import ChartsMaker from './components/ChartsMaker'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charts: [],
      isToggled: true
    }

    this.handleToggle = this.handleToggle.bind(this);
    this.handleGetData = this.handleGetData.bind(this);
  }

  handleToggle() {
    this.setState({
      isToggled: !this.state.isToggled
    })
  }

  handleGetData(data) {
    this.setState({
      charts: data
    })
    console.log(data)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">khAkAs</h1>
        </header>
        <Toggle
          onTogle={this.handleToggle}
          isToggled={this.state.isToggled} />
        <GetDataByLink
          onGetData={this.handleGetData}
        />
        <ChartsMaker data={this.state.charts}/>
      </div>
    );
  }
}

export default App;
