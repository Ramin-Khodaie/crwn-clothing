import { withRouter } from "react-router-dom";
import "./category.scss";
// import { selectCategory } from "../../redux/shop/shopSelectore";
import { useEffect } from "react";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/collection/collectionAction";

const Category = ({ match }) => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.collection);

  useEffect(() => {
    console.log(333, match.params.category);
    dispatch(selectCategory(match.params.category));
  }, []);

  // console.log(400, collection, match.params.category, selectedColection);
  const { title, items } = selectedCategory;
  console.log(200, selectedCategory);
  return (
    <div className="category">
      <h1 className="title"> {title} </h1>
      <div className="items">
        {items &&
          items.map((item) => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

// const mapToStateProps = (state, ownProps) => ({
//   collection: selectCategory(ownProps.match.params.category)(state),
// });
export default Category;
