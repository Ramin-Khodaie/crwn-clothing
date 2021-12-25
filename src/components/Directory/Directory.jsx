/**
 * Directory component which list directory items stored in directory state
 */

import DirectoryItem from "../DirectoryItem/DirectoryItem";
import "./directory.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fecthProducts } from "../../redux/shop/productAction";
import Progress from "../Progressbar/Progress";

const Directory = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthProducts());
  }, []);

  return (
    <div className="directory">
      {products ? (
        products.map(({ id, ...otherItems }) => (
          <DirectoryItem key={id} {...otherItems} />
        ))
      ) : (
        <div style={{ flex: "auto", textAlign: "center" }}>
          <Progress />
        </div>
      )}
    </div>
  );
};
//fetch sections from directory stored in state
// const mapStateToProps = (state) => ({
//   sections: state.directory,
// });

export default Directory;
