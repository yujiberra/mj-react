import { parse } from 'eshanten';
import React from 'react';
import './App.css'
import ClickableTile from './components/ClickableTile';
import HandEditor from './components/HandEditor';
import HandTiles from './components/HandTiles';
import TileImage from './components/TileImage';
import TilePalette from './components/TilePalette';

const logTile = (tile: string) =>
  console.log(tile);

function App() {
  const [hand, setHand] = React.useState("123m4r56s456p東東東中");

  return (
    <div className="App">
        <h2>mj-react example</h2>
        <h3>Tiles</h3>
        <TileImage tile="1m"></TileImage>
        <TileImage tile="1z"></TileImage>
        <h3>Clickable tiles</h3>
        <ClickableTile tile="1m" onClick={logTile}></ClickableTile>
        <ClickableTile tile="1z" onClick={logTile}></ClickableTile>
        <h3>Tile palette</h3>
        <TilePalette onSelectTile={logTile}></TilePalette>
        <h3>Hand Tiles</h3>
        <HandTiles tiles={parse("123m4r56s456p111z2z")} tileClicked={logTile}/>
        <h3>Hand Editor</h3>
        <HandEditor hand={hand} handChanged={setHand}/>
    </div>
  );
}

export default App;
