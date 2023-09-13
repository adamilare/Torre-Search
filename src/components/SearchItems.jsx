import { useSelector } from "react-redux";
import SearchItem from "./SearchItem";
import { useEffect, useState } from "react";

function SearchItems() {
  const { searchResult } = useSelector((store) => store.search);
  const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    if (searchResult !== null && searchResult !== undefined) {
      setSearchItems(searchResult.data.results);
    }
  }, [searchResult]);

  if (
    searchItems === null ||
    searchItems === undefined ||
    searchItems.length < 1
  )
    return null;

  return (
    <>
      <div className="">
        <div className="search-items">
          {searchItems.map((item) => (
            <SearchItem key={item.ardaId} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchItems;
