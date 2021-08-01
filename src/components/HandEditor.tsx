import { parse, stringify, validate } from "eshanten";
import HandTiles from "./HandTiles";
import TilePalette from "./TilePalette";

interface HandEditorProps {
  hand: string;
  handChanged: (tiles: string) => void;
}

const HandEditor = ({ hand, handChanged}: HandEditorProps) => {
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) =>
    handChanged(e.currentTarget.value);

  const removeTile = (tile: string) => {
    const tiles = parse(hand)
    tiles.splice(tiles.findIndex(t => t === tile), 1)
    handChanged(stringify(tiles));
  }

  const addTile = (tile: string) => {
    const newTiles = [...parse(hand), tile];
    if (validate(newTiles)) handChanged(stringify(newTiles));
  }

  return (
    <div>
      <HandTiles tiles={parse(hand)} tileClicked={removeTile}/>
      <input value={hand} onChange={handleInputChange} />
      <TilePalette onSelectTile={addTile}/>
    </div>
  );
}

export default HandEditor;
