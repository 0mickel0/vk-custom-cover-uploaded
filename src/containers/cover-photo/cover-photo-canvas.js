import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchUploadCoverUrl } from "../../actions/vk-actions";
import { fetchWeather } from "../../actions/weather-action";

class CoverCanvas extends Component {
  constructor(props) {
    super(props);
    this.postCover = this.postCover.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.drawCanvas();
  }

  addTimeText = (canvas, ctx, date) =>{
      ctx.stroke();
      //light square ctx.arcTo(x1, y1, x2, y2, radius);
      ctx.beginPath();
      ctx.fillStyle = "#ffffffc9";
      ctx.arcTo(1215,375,1215,25,10);
      ctx.arcTo(1215,25,1565,25,10);
      ctx.arcTo(1565,25,1565,375,10);
      ctx.arcTo(1565,375,1215,375,10);
      ctx.fill();

      ctx.font = "40px Courier";
      ctx.fillStyle = '#000';
      ctx.fillText(this.props.weather.main.temp, 1230, 75);
      ctx.fillText(this.props.weather.name, 1230, 140);
  };

  drawCanvas(s){
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext("2d");
    let date = new Date();
    if(s){
      console.log(s);
      let img = new Image();
      img.src = s.path[0].src;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, 1590, 400);
        this.addTimeText(canvas, ctx, date);
      };
    }
    else{
      let img = this.refs.image;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, 1590, 400);
        this.addTimeText(canvas, ctx, date);
      }
    }
  }

  dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) { ia[i] = byteString.charCodeAt(i); }
    return new Blob([ab], { type: 'image/jpeg' });
  }

  handleChange(e) {
    let fr = new FileReader();
    fr.readAsDataURL(e[0]);
    fr.onload = () => {
      let img;
      img = new Image();
      img.src = fr.result;
      img.onload = (img) => {
        this.drawCanvas(img)
      }
    };
  }

  postCover() {
    let blob = this.dataURItoBlob(this.refs.canvas.toDataURL());
    fetchUploadCoverUrl(blob);
  }

  render() {
    const cheese = "./cover.jpg";
    return(
      <div>
        <div className="cover-wrapper">
          <canvas className="cover-canvas" ref="canvas" width={1590} height={400} />
          <img className="cover-img" ref="image" src={cheese}/>
          <input type="file" accept="image/*" onChange={ (e) => this.handleChange(e.target.files) } />
          <button className="btn btn-secondary" onClick={ () => this.postCover() }>post cover</button>
          <div>
            {this.props.weather.name}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps, {fetchUploadCoverUrl, fetchWeather})(CoverCanvas);