import { useEffect } from "react";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/collection/collectionAction";
import "./category.scss";

const Category = ({ match }) => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.collection);

  useEffect(() => {
    dispatch(selectCategory(match.params.category));
  }, []);


  const { title, items } = selectedCategory;
  
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

export default Category;
