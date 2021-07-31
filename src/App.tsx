import './App.css'
import ClickableTile from './components/ClickableTile';
import TileImage from './components/TileImage';

const logTile = (tile: string) =>
  console.log(tile);

function App() {
  return (
    <div className="App">
        <h2>mj-react example</h2>
        <h3>Non-clickable tiles</h3>
        <TileImage tile="1m"></TileImage>
        <TileImage tile="1z"></TileImage>
        <h3>Clickable tiles</h3>
        <ClickableTile tile="1m" onClick={logTile}></ClickableTile>
        <ClickableTile tile="1z" onClick={logTile}></ClickableTile>
    </div>
  );
}

export default App;
