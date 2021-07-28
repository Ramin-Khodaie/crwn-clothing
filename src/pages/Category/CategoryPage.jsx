import { withRouter } from "react-router-dom";
import "./category.scss";
import { selectCategory } from "../../redux/shop/shopSelectore";
import { connect } from "react-redux";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

const Category = ({ match, collection }) => {
  console.log(400, collection, match);
  const { title, items } = collection;
  return (
    <div className="category">
      <h1 className="title"> {title} </h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapToStateProps = (state, ownProps) => ({
  collection: selectCategory(ownProps.match.params.category)(state),
});
export default connect(mapToStateProps)(Category);
