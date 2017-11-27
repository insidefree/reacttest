import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetDataByLink from './components/GetDataByLink';
import ToggleWrap from './components/ToggleWrap'
import ChartsMaker from './components/ChartsMaker'
import Links from './components/Links'
import links from './data/links.json'


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
      this.setState({selected: event.target.attributes.getNamedItem('value').value})
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
        {this.state.isToggled ? <Links data={links} onClick={this.handleSelector}/> : ""}
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
