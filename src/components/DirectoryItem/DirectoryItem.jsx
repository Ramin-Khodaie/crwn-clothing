/**
 * This component display an Item
 */

import { Link, withRouter } from "react-router-dom";

import "./directoryitem.scss";
function DirectoryItem({ title, _id, history, imageUrl, match, linkUrl, size }) {
  console.log(222,match)
  return (
    <div
      className={`${size} directory-item`}
      onClick={() => history.push(`${match.url}shop/${_id}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
}
export default withRouter(DirectoryItem);
