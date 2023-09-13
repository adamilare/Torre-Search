import PropTypes from "prop-types";
import Like from "./Like";
import { useDispatch } from "react-redux";
import { addNewRecentSearch } from "../store/search/searchThunk";
import Person from "../models/person.model";

function SearchItem({ item }) {
  const dispatch = useDispatch();

  /** open to Torre page and add user to recent search */
  const handleClick = () => {
    dispatch(addNewRecentSearch(new Person(item)));
  };

  return (
    <a
      href={`https://torre.ai/${item.username}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      <div className="search-item">
        <Like />
        <h3>{item.name}</h3>
      </div>
    </a>
  );
}

SearchItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchItem;
