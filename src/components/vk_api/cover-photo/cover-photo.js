import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CoverCanvas from '../../../containers/cover-photo/cover-photo-canvas'
import SearchBarWeather from '../../../containers/cover-photo/search_bar'

export default class PostCoverPhoto extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back To Index</Link>
        <SearchBarWeather />
        <CoverCanvas />
      </div>
    );
  }
}