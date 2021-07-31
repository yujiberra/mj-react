import './App.css'
import ClickableTile from './components/ClickableTile';
import TileImage from './components/TileImage';
import TilePalette from './components/TilePalette';

const logTile = (tile: string) =>
  console.log(tile);

function App() {
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
    </div>
  );
}

export default App;
