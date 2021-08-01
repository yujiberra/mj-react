import { parse, stringify, validate } from "eshanten";
import HandTiles from "./HandTiles";
import TilePalette from "./TilePalette";

interface HandEditorProps {
  tiles: string[];
  tilesChanged: (tiles: string[]) => void;
}

const HandEditor = ({ tiles, tilesChanged}: HandEditorProps) => {
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) =>
    tilesChanged(parse(e.currentTarget.value));

  const removeTile = (tile: string) => {
    const newTiles = [...tiles];
    newTiles.splice(tiles.findIndex(t => t === tile), 1)
    tilesChanged(newTiles);
  }

  const addTile = (tile: string) => {
    const newTiles = [...tiles, tile];
    if (validate(newTiles)) tilesChanged(newTiles);
  }

  return (
    <div>
      <HandTiles tiles={tiles} tileClicked={removeTile}/>
      <input value={stringify(tiles)} onChange={handleInputChange} />
      <TilePalette onSelectTile={addTile}/>
    </div>
  );
}

export default HandEditor;
