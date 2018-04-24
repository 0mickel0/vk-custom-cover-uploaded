import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUploadedCover } from "../actions/cover-uploader";

class ImageUploader extends Component {

  handleChange(target) {
    this.props.imgUploaded(target);
  }

  render() {
    return (
      <div className="avatar-edit">
        <div>{this.props.canvasRef}</div>
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