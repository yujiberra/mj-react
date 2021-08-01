import TileImage from "./TileImage";
import './ClickableTile.css'

interface ClickableTileProps {
  tile: string;
  onClick: (tile: string) => void;
}

const ClickableTile = ({ tile, onClick }: ClickableTileProps) =>
  <button className="tile-button" onClick={() => onClick(tile)}>
    <TileImage tile={tile}></TileImage>
  </button>

export default ClickableTile
