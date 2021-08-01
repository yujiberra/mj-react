import ClickableTile from "./ClickableTile";

interface HandTilesProps {
  tiles: string[];
  tileClicked: (tile: string) => void;
}

const HandTiles = ({ tiles, tileClicked }: HandTilesProps) => {
  const indexedTiles: [string, number][] = [];
  let currentTile = "invalid";
  let currentTileCount = 0;
  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    currentTileCount = tile === currentTile
      ? currentTileCount + 1
      : 1;
    currentTile = tile;
    indexedTiles.push([tile, currentTileCount]);
  }
  const tileComponents = indexedTiles.map(([tile, index]) =>
    <ClickableTile
      tile={tile}
      key={`${tile}-${index}`}
      onClick={tileClicked}/>
  );
  return <div>{tileComponents}</div>;
}

export default HandTiles
