import { useState } from "react";
import addIcon from "../assets/icons/plus-circle.svg";
import { getApiTypeIcon } from "../utils/iconEngine";
import { SearchResultProps } from "../types/searchResultProps";

const SearchResult = ({ api, index }: SearchResultProps) => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  return (
    <div
      key={`${api.path}-${index}`}
      className="text-search-text relative flex items-center justify-between px-2 py-3"
      onMouseEnter={() => setShowMoreMenu(true)}
      onMouseLeave={() => setShowMoreMenu(false)}
    >
      <div className="line-clamp-2 w-[85%] break-all">{api.path}</div>
      <div className="flex h-4 w-[15%] flex-col items-end justify-center overflow-hidden">
        <img
          className="absolute h-6 w-6 cursor-pointer rounded-sm px-1 transition-opacity duration-300 ease-in"
          style={{ opacity: showMoreMenu ? 1 : 0 }}
          src={addIcon}
        />
        <img
          className="absolute cursor-pointer transition-opacity duration-300 ease-in"
          style={{ opacity: showMoreMenu ? 0 : 1 }}
          src={getApiTypeIcon(api.type)}
        />
      </div>
    </div>
  );
};

export default SearchResult;
