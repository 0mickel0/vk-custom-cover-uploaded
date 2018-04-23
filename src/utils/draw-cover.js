export const drawCover = (refs, props, defImg) => {

  debugger;
  if(defImg) {
    let img = new Image();
    img.src = defImg.path[0].src;
    addDataToCover(refs, img, props);
  }
  else {
    let img = refs.image;
    addDataToCover(refs, img, props);
  }
};

const addDataToCover = (refs, img, props) =>{
  let canvas = refs.canvas;
  let ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, 1590, 400);
  let date = new Date();
  ctx.stroke();
  ctx.beginPath();
  ctx.fillStyle = "#ffffffc9";
  ctx.arcTo(1215,375,1215,25,10);
  ctx.arcTo(1215,25,1565,25,10);
  ctx.arcTo(1565,25,1565,375,10);
  ctx.arcTo(1565,375,1215,375,10);
  ctx.fill();
  ctx.font = "40px Courier";
  ctx.fillStyle = '#000';
  ctx.fillText(props.weather.main.temp, 1230, 75);
  ctx.fillText(props.weather.name, 1230, 140);
  ctx.fillStyle = '#fff';
  ctx.fillText(date, 100, 140);
};