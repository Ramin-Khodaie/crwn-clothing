import DirectoryItem from "../DirectoryItem/DirectoryItem";
import "./directory.scss";
export default function Directory({ data }) {
  return (
    <div className="directory">
      {data.map(({ id, ...otherItems }) => (
        <DirectoryItem key={id} {...otherItems} />
      ))}
    </div>
  );
}
