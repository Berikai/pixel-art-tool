//Import React Components
import { useState } from 'react'

//Pixel React Object
function Pixel(props) {
  const [hover, setHover] = useState(false); //Hover State React Hook
  const [clicked, setClicked] = useState(false); //Hover State React Hook

  let isHovered = 1 //Transparency Variable of Pixel Color 

  if(hover) {
    isHovered = 0.5 
    //This code works when cursor is on the pixel
  } else {
    isHovered = 1
    //This code works when cursor is not on the pixel
  }

  if(clicked) {
    setClicked(false);
    props.onClick(props.coordinates);
    //This code works when pixel clicked
  } 

    return (
      <div 
        style={{...props.styleObj, ...{"background-color": `rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]}, ${isHovered})`}}} 
        className={ "pixel noselect" + props.className} 
        onMouseOver = { () => setHover(true) } 
        onMouseOut = { () => setHover(false) }
        onClick = { () => setClicked(true) }
        >
        </div>
    );
  }
  
  export default Pixel;
  