/**
 * Directory component which list directory items stored in directory state
 */

import DirectoryItem from "../DirectoryItem/DirectoryItem";
import "./directory.scss";
import { connect } from "react-redux";

const Directory = ({ sections }) => {
  return (
    <div className="directory">
      {sections ? (
        sections.map(({ id, ...otherItems }) => (
          <DirectoryItem key={id} {...otherItems} />
        ))
      ) : (
        <div style={{ flex: "auto", textAlign: "center" }}>
          <h1>there is no sections</h1>
        </div>
      )}
    </div>
  );
};
//fetch sections from directory stored in state
const mapStateToProps = (state) => ({
  sections: state.directory,
});

export default connect(mapStateToProps)(Directory);
