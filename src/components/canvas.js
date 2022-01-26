//Import React Components
import { useState } from 'react'

import useWindowDimensions from './screenDimensions' //Import WindowDimensions
import Pixel from './pixel' //Import Pixel Object

//Creates a random pixel art in the defined resolution (It helps in developing phase)
function EmptyArt(width, height){
  let pixelArt = []; //Array of a row of columns

  for (let k = 0; k < width; k++) {
    let pixelColumn = [];
    for (let j = 0; j < height; j++) {
      pixelColumn[j] = [255, 255, 255];
    }
    pixelArt[k] = pixelColumn;
  }

  return pixelArt; //Canvas variable is a Multidimensional Array.
}

//Creates a random pixel art in the defined resolution (It helps in developing phase)
function RandomArt(width, height){
  let pixelArt = []; //Array of a row of columns

  for (let k = 0; k < width; k++) {
    let pixelColumn = [];
    for (let j = 0; j < height; j++) {
      pixelColumn[j] = [
        Math.floor(Math.random() * 256), 
        Math.floor(Math.random() * 256), 
        Math.floor(Math.random() * 256)
      ];
    }
    pixelArt[k] = pixelColumn;
  }

  return pixelArt; //Canvas variable is a Multidimensional Array.
}

//Canvas Creator as the title says
function CanvasCreator(props){
  //Picture that will be shown
  const [picture, setPicture] = useState(EmptyArt(props.width, props.height));

  //Picture that will be shown
  const [canvas, setCanvas] = useState([props.width, props.height]);

  //Screen Resolution Properties
  const { height, width } = useWindowDimensions();

  var screenResolution = width / height; //Screen Resolution Ratio
  var pictureResolution = props.width / props.height; //Picture Resolution Ratio
  
  var style; //Canvas Style Variable

  /*
    (Ratios are based on width divided to height formula*!)

    The aim here is to resize every pixel due to screen resolution and to make canvas as big as possible without overflow.
    To make that possible;
      -If the Picture Resolution Ratio is bigger then Screen Resolution Ratio, the size of pixels have to be (ScreenWidth/100*PictureWidth)
      -If the Picture Resolution Ratio is smaller then Screen Resolution Ratio, the size of pixels have to be (ScreenHeight/100*PictureHeight)
   */
  if(pictureResolution > screenResolution){
    // "vw" means Vertical Width
    style = {    
      width: 100/props.width + "vw",  //width: width/props.width + "px",
      height: 100/props.width + "vw", //height: width/props.width + "px", 
    };
  } else if (screenResolution > pictureResolution){
    // "vh" means Vertical Height
    style = {    
      width: 100/props.height + "vh",  //width: height/props.height + "px", 
      height: 100/props.height + "vh", //height: height/props.height + "px",
    };
  }

  //Pixel Click Listener Handle
  function handleClick(data) {
    var virtualPicture = picture; //Creates a virtual picture
    for(let i = 0; i < 3; i++) {
      virtualPicture[data[0]][data[1]][i] = Math.floor(Math.random() * 256); 
    }
    setPicture(virtualPicture); //Re-render Picture State Hook
  }

  /*
    The aim here is to create pixels of the canvas with for loops.
    Two for loops helps us to create a two dimensional system.

    k = width
    j = height

  */
  let columns = []; //Array of a row of columns

  for (let k = 0; k < props.width; k++) { 
    let pixelsInAColumn = []; //Array of Pixels in a column

    for (let j = 0; j < props.height; j++) {
      if (picture[k] === undefined) {
        var virtualPicture = picture; //Creates a virtual picture
        var virtualPictureJ = [];
        virtualPictureJ[j] = [255, 255, 255]; 
        virtualPicture[k] = virtualPictureJ; 
        setPicture(virtualPicture); //Re-render Picture State Hook
      }
      if (picture[k][j] === undefined) {
        var virtualPicture2 = picture; //Creates a virtual picture
        virtualPicture2[k][j] = [255, 255, 255]; 
        setPicture(virtualPicture2); //Re-render Picture State Hook
      }
      pixelsInAColumn[j] = (
      <Pixel 
          coordinates={[k, j]}
          styleObj={style}
          color={ picture[k][j] }
          onClick={ handleClick }
          />
      ) //Push pixels as much as canvas height in a column
    }
    columns.push(    
      <div className="row">
        {pixelsInAColumn}
      </div>
    ) //Push columns as much as canvas width in a row
  }

  return columns; //Canvas variable is a JSX object.

}

//Main Canvas React Object
function Canvas(props) {
    return (
      <div className={"canvas"}>
        <CanvasCreator width={props.width} height={props.height} /> {/*Creating Canvas*/}
      </div>
    );
  }
  
export default Canvas;