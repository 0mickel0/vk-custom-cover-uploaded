import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CoverCanvas from './CoverCanvas'
import SearchBarWeather from './search_bar'
import { fetchWeather } from "../actions/weather-action";

import Card from '../components/Card'
import WeatherSettings from '../components/WeatherSettings'

class App extends Component {
  render() {
    return (
      <div>
        <CoverCanvas />
        <Card title="Weather Settings">
          <SearchBarWeather />
          <WeatherSettings />
        </Card>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);