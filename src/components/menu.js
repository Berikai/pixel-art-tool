//Import React Components
import { useState } from 'react'
//Wimport Draggable from 'react-draggable'

//Icons
import {ReactComponent as Logo} from '../assets/logo.svg'
import {ReactComponent as Settings} from '../assets/settings.svg'
import {ReactComponent as Pencil} from '../assets/pencil.svg'
import {ReactComponent as Canvas} from '../assets/canvas.svg'

//Pixel React Object
function Menu(props) {

  //Is Menu Open?
  const [ isMenuOpen, setMenuOpen ] = useState(false);
  const [ canvasX, setCanvasX ] = useState(10);
  const [ canvasY, setCanvasY ] = useState(10);
  const [ isDragging, setDragging ] = useState(false);
  const [ toolSelected, setToolSelected ] = useState(0); 
  /*
    0 = Pencil,
    1 = Canvas,
    2 = ,
    3 = ,
    4 = ,
    5 = ,
    6 = ,
    7 = ,
    8 = Settings,

  */

  function menuHandle() {
    if(!isDragging){
      if(!isMenuOpen)
        setMenuOpen(true)
      else
        setMenuOpen(false)
    } else {
      setDragging(false)
    }
  }

  function dragHandle() {
    setDragging(true)
  }

  //Screen Resolution Properties
  const { height, width } = props.windowDimensions;

  var screenResolution = width / height; //Screen Resolution Ratio
  //var pictureResolution = props.canvas.width / props.canvas.height; //Picture Resolution Ratio
  
  var style; //Menu Style Variable
  var styletool;
  var styleLogo = {
    "border-width": "0.2%", 
  }; //Logo Style Variable
  var styleContent = {
    "border-width": "0.2%", 
  }; //Content Style Variable

    /*
    (Ratios are based on width divided to height formula*!)

    The aim here is to resize pixel logo due to screen resolution.
   */
      if(1 > screenResolution){
        // "vw" means Vertical Width
        style = {    
          width: 15 + "vw",  //width: width/props.width + "px",
          height: 15 + "vw", //height: width/props.width + "px", 
        };

        styletool = {    
          height: 15 + "vw", //height: width/props.width + "px", 
        };

      } else if (screenResolution > 1){
        // "vh" means Vertical Height
        style = {    
          width: 15 + "vh",  //width: height/props.height + "px", 
          height: 15 + "vh", //height: height/props.height + "px",
        };

        styletool = {    
          height: 15 + "vh", //height: width/props.width + "px", 
        };

      }

      function handleToolClick(e) {
        let bool;
        if (toolSelected === 0) { bool = false } else { bool = true }
        if(e === toolSelected) {
          bool = !bool;
          if (!bool) { setToolSelected(0) }
        } else {
          setToolSelected(e);
        }
      }

      function handleChangeX(e) {
        setCanvasX(e.target.value)
        props.handleX(e.target.value)
      }

      function handleChangeY(e) {
        setCanvasY(e.target.value)
        props.handleY(e.target.value)
      }

      function toolItems() {
        if (isMenuOpen) {
          if (toolSelected === 1)
            return(
              <div style={styletool} className="tool menu-item-border">
                <div className="tool-item">
                  <p>Pencil</p>
                  <div className="menu">
                    <div class="slidecontainer">
                      <input type="range" min="1" max="100" class="slider" />
                      <input type="range" min="1" max="100" class="slider" />
                      <input type="range" min="1" max="100" class="slider" />
                    </div>
                    <div class="slidecontainer">
                      <div className="marginLeft menu-item-border" style={{width: "50%", height: "80%", backgroundColor: "rgb(255, 255, 255)"}}>
a
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          if (toolSelected === 2)
            return(
              <div style={styletool} className="tool menu-item-border">
                <div className="tool-item canvasXY">
                  <p>Canvas Resolution</p>
                  <label>
                    X:
                    <input type="text" value={canvasX} onChange={handleChangeX} />
                  </label>
                  <br/>
                  <label>
                    Y:
                    <input type="text" value={canvasY} onChange={handleChangeY} />
                  </label>
                </div>
              </div>
            );
          if (toolSelected === 3)
            return(
              <div style={styletool} className="tool menu-item-border">
                <div className="tool-item">
                  None
                </div>
              </div>
            );
          if (toolSelected === 4)
            return(
              <div style={styletool} className="tool menu-item-border">
                <div className="tool-item">
                  None
                </div>
              </div>
            );
          if (toolSelected === 5)
            return(
              <div style={styletool} className="tool menu-item-border">
                <div className="tool-item">
                  None
                </div>
              </div>
            );
          if (toolSelected === 6)
            return(
              <div style={styletool} className="tool menu-item-border">
                <div className="tool-item">
                  None
                </div>
              </div>
            );
          if (toolSelected === 7)
            return(
              <div style={styletool} className="tool menu-item-border">
                <div className="tool-item">
                  None
                </div>
              </div>
            );  
          if (toolSelected === 8)
            return(
              <div style={styletool} className="tool menu-item-border">
                <div className="tool-item">
                  Settings
                </div>
              </div>
            );    
          if (toolSelected === 0)
            return(<></>);
        } else {
          return(<></>);
        }
      }

      function menuItems() {
        if (isMenuOpen) {
          return(
          <div className="menu-items">
            <div onClick={ () => handleToolClick(1) } style={styleContent} className="menu-content menu-content-30 menu-item-border">
              <Pencil />
            </div>
            <div onClick={ () => handleToolClick(2) } style={styleContent} className="menu-content menu-content-30 menu-item-border">
                <Canvas />
            </div>
            <div onClick={ () => handleToolClick(3) } style={styleContent} className="menu-content menu-content-30 menu-item-border">
              <Canvas />
            </div>
            <div onClick={ () => handleToolClick(4) } style={styleContent} className="menu-content menu-content-30 menu-item-border">
              <Settings />
            </div>
            <div onClick={ () => handleToolClick(5) } style={styleContent} className="menu-content menu-content-30 menu-item-border">
              <Pencil />
            </div>
            <div onClick={ () => handleToolClick(6) } style={styleContent} className="menu-content menu-content-30 menu-item-border">
              <Canvas />
            </div>
            <div onClick={ () => handleToolClick(7) } tyle={styleContent} className="menu-content menu-content-30 menu-item-border">
              <Canvas />
            </div>
            <div onClick={ () => handleToolClick(8) } style={styleContent} className="menu-content menu-content-30 menu-item-border">
              <Settings />
            </div>
          </div>
          );
        } else {
          return(
          <></>
          );
        }
      }

    return (
      //Pixel Skeleton
      <draggable
        bounds="parent"
        grid={[5, 5]}
        onDrag={() => dragHandle() }
        defaultPosition={{x: 0, y: 0}} >
        <div style={style} className="menu">
          <div className="menu-list">
            <div onClick={ () => menuHandle() } style={styleLogo} className="menu-logo menu-item-border center">
              <Logo />
            </div>
            {menuItems()}
          </div>
          {toolItems()}
        </div>
      </draggable>
    );
  }
  
  export default Menu;
  