import { manzus, pinzus, sozus, zupais } from 'eshanten'
import ClickableTile from './ClickableTile';
import './TilePalette.css'

interface TilePaletteProps {
  onSelectTile: (tile: string) => void;
}

const TilePalette = ({ onSelectTile }: TilePaletteProps) => {
  const tileToCLickableTile = (tile: string) =>
    <ClickableTile tile={tile} key={tile} onClick={onSelectTile} />

  const manzuButtons = manzus().map(tileToCLickableTile);
  const pinzuButtons = pinzus().map(tileToCLickableTile);
  const sozuButtons = sozus().map(tileToCLickableTile);
  const zupaiButtons = zupais().map(tileToCLickableTile);
  return (
    <div className="tile-palette">
      {manzuButtons} <br/>
      {pinzuButtons} <br/>
      {sozuButtons} <br/>
      {zupaiButtons} <br/>
    </div>
  );
}
export default TilePalette;
