import PropTypes from "prop-types";
import Like from "./Like";

function SearchItem({ item }) {
  return (
    <>
      <div className="search-item">
        <Like />
        <h3>{item.name}</h3>
      </div>
    </>
  );
}

SearchItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchItem;
