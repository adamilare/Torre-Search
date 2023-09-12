import { useDispatch } from "react-redux";
import { getRecentSearches, getSearch } from "../store/search/searchThunk";

function SearchBox() {
  const dispatch = useDispatch();

  const handleFocus = (e) => {
    if (e.target.value === "") {
      dispatch(getRecentSearches());
    }
  };

  const handleSearch = (e) => {
    if (e.target.value !== "") {
      dispatch(getRecentSearches());
    }
    dispatch(getSearch(e.target.value));
  };

  return (
    <>
      <div>
        <div className="search-box">
          <div className="">
            <input
              id="search-input"
              tabIndex="0"
              inputMode="search"
              type="text"
              onFocus={(e) => {
                handleFocus(e);
              }}
              onChange={(e) => {
                handleSearch(e);
              }}
              placeholder="Search for people or jobs"
              className="search-input"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
