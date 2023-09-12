import { useDispatch } from "react-redux";
import { getSearch } from "../store/search/searchThunk";

function SearchInput() {
  const dispatch = useDispatch();

  const handleFocus = (e) => {
    console.log("handleFocus");
    console.log(e.target);
  };

  return (
    <>
      <div>
        <div className="flex w-full items-center">
          <div className="flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs">
            <input
              id="search-input"
              tabIndex="0"
              inputMode="search"
              type="text"
              onFocus={(e) => {
                handleFocus(e);
              }}
              onChange={(e) => {
                dispatch(getSearch(e.target.value));
              }}
              placeholder="Search for people or jobs"
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchInput;
