import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetDataByLink from './components/GetDataByLink';
import Toggle from './components/Toggle'
import ChartsMaker from './components/ChartsMaker'

const links = [
  {
      "id": 0,
      "description": 11111,
      "url": 'https://www.fxempire.com/api/v1/en/markets/eur-usd/chart'
  },
  {
      "id": 1,
      "description": 22222,
      "url": 'https://www.fxempire.com/api/v1/en/markets/eur-usd/chart?time=MIN_1'
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charts: [],
      isToggled: true,
      test: "",
      selected: 1
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
  }

  handleSelector = event => {
      console.log(event.target.attributes.getNamedItem('value').value)
      this.setState({selected: event.target.attributes.getNamedItem('value').value})
      console.log('state:', this.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">khAkAs</h1>
        </header>
        
        <div onClick={this.handleSelector} value={links[0].id}>{links[0].url}</div>
        <div onClick={this.handleSelector} value={links[1].id}>{links[1].url}</div>
        <Toggle
          onTogle={this.handleToggle}
          isToggled={this.state.isToggled} />
        <GetDataByLink onGetData={this.handleGetData} link={links[this.state.selected]}/>
        <ChartsMaker data={[]} />
        
      </div>
    );
  }
}

export default App;
