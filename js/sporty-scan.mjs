
import { define, html, render } from 'https://unpkg.com/hybrids@2.0.2/src/index.js';

import jsQR from "./dist/index.js"

var canvasElement = document.createElement("canvas");
canvasElement.setAttribute("id","canvas")
var loadingMessage = document.createElement("div");
var outputContainer = document.createElement("div");
var outputMessage = document.createElement("div");
var outputData = document.createElement("div");


var video = document.createElement("video");
video.style.width = "300px"
var canvas = canvasElement.getContext("2d");


const SportyScan = {
    render: (host) => {
        return (host, target) => {
            target.appendChild(canvasElement);
            target.appendChild(loadingMessage);
            target.appendChild(outputContainer);
            target.appendChild(outputMessage);
            target.appendChild(outputData);
        }
    }
}


function drawLine(begin, end, color) {
  canvas.beginPath();
  canvas.moveTo(begin.x, begin.y);
  canvas.lineTo(end.x, end.y);
  canvas.lineWidth = 4;
  canvas.strokeStyle = color;
  canvas.stroke();
}

// Use facingMode: environment to attemt to get the front camera on phones
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function(stream) {
  video.srcObject = stream;
  video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
  video.play();
  requestAnimationFrame(tick);
});

function tick() {
  loadingMessage.innerText = "⌛ Loading video..."
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    loadingMessage.hidden = true;
    canvasElement.hidden = false;
    outputContainer.hidden = false;

    canvasElement.height = video.videoHeight;
    canvasElement.width = video.videoWidth;
    canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
    var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
    var code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: "dontInvert",
    });
    if (code) {
      drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
      drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
      drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
      drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");
      outputMessage.hidden = true;
      //outputData.parentElement.hidden = false;
      outputData.innerText = code.data;
    } else {
      outputMessage.hidden = false;
      //outputData.parentElement.hidden = true;
    }
  }
  requestAnimationFrame(tick);
}

define('sporty-scan', SportyScan);