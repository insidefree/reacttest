import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetDataByLink from './components/GetDataByLink';
import ToggleWrap from './components/ToggleWrap'
import ChartsMaker from './components/ChartsMaker'
import Links from './components/Links'

const links = [
  {
      "id": 0,
      "description": "all",
      "url": 'https://www.fxempire.com/api/v1/en/markets/eur-usd/chart'
  },
  {
      "id": 1,
      "description": "MIN_1",
      "url": 'https://www.fxempire.com/api/v1/en/markets/eur-usd/chart?time=MIN_1'
  },
  {
      "id": 2,
      "description": "MIN_5",
      "url": 'https://www.fxempire.com/api/v1/en/markets/eur-usd/chart?time=MIN_5'
  },
  {
      "id": 3,
      "description": "HOUR_1",
      "url": 'https://www.fxempire.com/api/v1/en/markets/eur-usd/chart?time=HOUR_1'
  },
  {
      "id": 4,
      "description": "WEEK_1",
      "url": 'https://www.fxempire.com/api/v1/en/markets/eur-usd/chart?time=WEEK_1'
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charts: [],
      isToggled: false,
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
      charts: this.formatDate(data)
    })
  }

  handleSelector = event => {
      console.log(event.target.attributes.getNamedItem('value').value)
      this.setState({selected: event.target.attributes.getNamedItem('value').value})
      console.log('state:', this.state)
  }

  formatDate = data => {
    for (var el of data) {
      el.date = new Date(el.date).toTimeString().split(" ")[0]
    }
    return data
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">khAkAs</h1>
        </header>
        {this.state.isToggled ? <Links data={links}/> : ""}
        <ToggleWrap
          onToggle={this.handleToggle}
          isToggled={this.state.isToggled} />
        <GetDataByLink onGetData={this.handleGetData} link={links[this.state.selected]}/>
        <ChartsMaker data={this.state.charts} />
        
      </div>
    );
  }
}

export default App;
