import "../assets/css/App.css";
import SearchBox from "../components/SearchBox";
import SearchItems from "../components/SearchItems";

function Search() {
  return (
    <div className="search-item-container">
      <SearchBox />
      <SearchItems />
    </div>
  );
}

export default Search;
