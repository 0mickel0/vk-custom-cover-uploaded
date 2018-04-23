import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchUploadCoverUrl } from "../actions/vk-actions";
import { fetchWeather } from "../actions/weather-action";
import ImageUploader from "../components/CoverUploader"
import { dataURItoBlob } from "../utils/image-transformation"
import { drawCover } from "../utils/draw-cover"

class CoverCanvas extends Component {
  constructor(props) {
    super(props);
    this.postCover = this.postCover.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log(this.child.heading.getDOMNode());
    // let img = this.refs.image;
    // img.onload = () => {
    //   drawCover(this.refs, this.props);
    // }
  }

  handleChange(target) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(target[0]);
    fileReader.onload = () => {
      let img;
      img = new Image();
      img.src = fileReader.result;
      img.onload = (img) => {
        debugger;
        drawCover(this.refs, this.props, img);
      }
    };
  }

  postCover() {
    let blob = dataURItoBlob(this.refs.canvas.toDataURL());
    fetchUploadCoverUrl(blob);
  }

  render() {
    return(
      <div>
        <div className="cover-canvas-wrapper">
          <canvas className="cover-canvas" ref="canvas" width={1590} height={400} />
          <input type="file" accept="image/*" onChange={ (e) => this.handleChange(e.target.files) } />
          <button className="btn btn-secondary" onClick={ () => this.postCover() }>post cover</button>
          <ImageUploader
            ref={(node) => { this.child = node; }}
            canvasRef={this.refs}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ weather, upload_url }) {
  return { weather, upload_url };
}

export default connect(mapStateToProps, {fetchUploadCoverUrl, fetchWeather})(CoverCanvas);