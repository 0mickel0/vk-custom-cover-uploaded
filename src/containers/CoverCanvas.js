import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchUploadCoverUrl } from "../actions/vk-actions";
import ImageUploader from "../components/CoverUploader"
import Card from '../components/Card'
import { dataURItoBlob } from "../utils/image-transformation"
import { drawCover } from "../utils/draw-cover"
import SearchBarWeather from './search_bar'

class CoverCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = { icon: `./weather/${this.props.weather.weather[0].icon}.svg` };
    this.postCover = this.postCover.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let img = this.refs.image;
    img.onload = () => {
      drawCover(this.refs, this.props);
    }
  }

  componentWillReceiveProps(newProps){
    if (this.props.weather !== newProps.weather) {
      this.setState({icon : `./weather/${this.props.weather.weather[0].icon}.svg`});
      console.log(this.state.icon);
      drawCover(this.refs, newProps)
    }
  }

  handleChange =(target) => {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(target[0]);
    fileReader.onload = () => {
      let img;
      img = new Image();
      img.src = fileReader.result;
      img.onload = (img) => {
        drawCover(this.refs, this.props, img);
      }
    };
  };

  postCover() {
    let blob = dataURItoBlob(this.refs.canvas.toDataURL());
    fetchUploadCoverUrl(blob);
  }

  render() {
    return(
      <div>
        <div className="cover-canvas-wrapper">
          <canvas className="cover-canvas" ref="canvas" width={1590} height={400} />
          <img ref="image" className="cover-img" src={this.props.upload_url.src} alt=""/>

          <img src={this.state.icon} alt=""/>
          <ImageUploader imgUploaded={this.handleChange}/>
          <Card title="Weather Settings">
            <SearchBarWeather/>
          </Card>

          <button className="btn btn-secondary" onClick={ () => this.postCover() }>post cover</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ weather, upload_url }) {
  return { weather, upload_url };
}

export default connect(mapStateToProps, {fetchUploadCoverUrl})(CoverCanvas);