import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUploadedCover } from "../actions/cover-uploader";
import { drawCover } from "../utils/draw-cover";
import PropTypes from 'prop-types';

class ImageUploader extends Component {

  componentDidMount() {
  }

  handleChange(target) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(target[0]);
    fileReader.onload = () => {
      let img;
      img = new Image();
      img.src = fileReader.result;
      img.onload = (img) => {
        drawCover(this.props.canvasRef.canvas, this.props, img);
      }
    };
  }

  render() {
    return (
      <div className="avatar-edit">
        <div>{this.props.canvasRef.canvas}</div>
        <img
           ref={(node) => { this.heading = node; }}
           className="cover-img"
           src={this.props.upload_url.src}
        />
        <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" onChange={ (e) => this.handleChange(e.target.files) }/>
        <label htmlFor="imageUpload"></label>
      </div>
    )
  }
}

function mapStateToProps({ weather, upload_url }) {
  return {
    weather, upload_url
  };
}

export default connect(mapStateToProps, {fetchUploadedCover})(ImageUploader);