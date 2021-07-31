import ClickableTile from './components/ClickableTile';
import TileImage from './components/TileImage';

const logTile = (tile: string) =>
  console.log(tile);

function App() {
  return (
    <div className="App">
        <h2>mj-react example</h2>
        <h3>Non-clickable tiles</h3>
        <TileImage tile="m1"></TileImage>
        <TileImage tile="z1"></TileImage>
        <h3>Clickable tiles</h3>
        <ClickableTile tile="m1" onClick={logTile}></ClickableTile>
        <ClickableTile tile="z1" onClick={logTile}></ClickableTile>
    </div>
  );
}

export default App;
