//Import React Components
import { useState } from 'react'

//Import Components
import Canvas from './components/canvas'
import Menu from './components/menu' 
import useWindowDimensions from './components/screenDimensions' //Window Size

function App() {

  const [ canvasX, setCanvasX ] = useState(10);
  const [ canvasY, setCanvasY ] = useState(10);

  function handleX(e) {
    setCanvasX(e)
  }

  function handleY(e) {
    setCanvasY(e)
  }

  //<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  return (
      <div className="app">
        <Menu handleX={handleX} handleY={handleY} canvas={{"width": canvasX, "height": canvasY}} windowDimensions={useWindowDimensions()}/>
        <div className="center"> 
          <Canvas width={canvasX} height={canvasY} /> 
        </div>
      </div>
  );
}

export default App;
