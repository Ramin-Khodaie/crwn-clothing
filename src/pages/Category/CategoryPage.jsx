import { useEffect } from "react";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/collection/collectionAction";
import "./category.scss";
import { withRouter } from "react-router-dom";
import Progress from "../../components/Progressbar/Progress";

const Category = ({ match }) => {
  const dispatch = useDispatch();
  const { selectedCategory, isLoading } = useSelector(
    (state) => state.collection
  );

  useEffect(() => {
    dispatch(selectCategory(match.params._id));
  }, []);

  const { title, items } = selectedCategory;

  if (isLoading) {
    return <Progress />;
  }
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

export default withRouter(Category);
