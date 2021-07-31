function importAll(r: __WebpackModuleApi.RequireContext) {
  let images = new Map<string, string>();
  r.keys().forEach((item, _index) =>
    images.set(item.replace('./', '').replace('.gif', ''),r(item).default));
  return images;
}

const images = importAll(require.context('./images', false, /\.(gif|png|jpe?g|svg)$/));

const TileImage = ({ tile }: { tile: string }) =>
  <img src={images.get(tile)} alt={tile}></img>

export default TileImage;
