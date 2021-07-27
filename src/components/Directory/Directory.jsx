import DirectoryItem from "../DirectoryItem/DirectoryItem";
import "./directory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelectore";
const Directory = ({ sections }) => {
  console.log(8000, sections);
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

const mapStateToProps = (state) => ({
  sections: state.directory,
});

export default connect(mapStateToProps)(Directory);
