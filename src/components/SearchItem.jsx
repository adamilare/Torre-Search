import PropTypes from "prop-types";

function SearchItem({ item }) {
  return (
    <>
      <div className="search-item">
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
