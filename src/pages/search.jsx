import { useDispatch } from "react-redux";
import "../assets/css/App.css";
import SearchBox from "../components/SearchBox";
import SearchItems from "../components/SearchItems";
import { getFavorites } from "../store/favorite/favoriteThunk";
import { getRecentSearches } from "../store/search/searchThunk";

function Search() {
  const dispatch = useDispatch();
  dispatch(getFavorites());
  dispatch(getRecentSearches());

  return (
    <div className="search-item-container">
      <SearchBox />
      <SearchItems />
    </div>
  );
}

export default Search;
