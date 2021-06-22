import DirectoryItem from "./DirectoryItem";
import tileData from "./dummy";
export default function Directory() {
  return (
    <div>
      {tileData.map((tile) => (
        <DirectoryItem
          image={tile.img}
          title={tile.title}
          featured={tile.featured}
          author={tile.author}
          col={tile.col}
        />
      ))}
    </div>
  );
}
