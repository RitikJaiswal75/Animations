import { useState } from "react";
import addIcon from "../assets/icons/plus-circle.svg";
import qpsIcon from "../assets/icons/qps.svg";
import { getApiTypeIcon } from "../utils/iconEngine";
import { SearchResultProps } from "../types/searchResultProps";
import useStore from "./Store/store";

const SearchResult = ({ api, index }: SearchResultProps) => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const { showTags } = useStore();
  return (
    <div
      key={`${api.path}-${index}`}
      className="text-search-text relative flex w-full items-center justify-between px-2 py-3 transition-colors duration-500 ease-in-out hover:bg-slate-50"
      onMouseEnter={() => setShowMoreMenu(true)}
      onMouseLeave={() => setShowMoreMenu(false)}
    >
      <div className="flex gap-1">
        {showTags ? (
          <div
            className="flex flex-shrink-0 items-center justify-center gap-0.5 bg-slate-100 px-1 whitespace-nowrap transition-colors duration-150"
            ref={(el) => {
              if (showMoreMenu) {
                el?.classList.remove("bg-slate-100");
                el?.classList.add("bg-white");
              } else {
                el?.classList.add("bg-slate-100");
                el?.classList.remove("bg-white");
              }
            }}
          >
            24 <img src={qpsIcon} alt="" className="inline-block" />
          </div>
        ) : null}
        <div className="line-clamp-2 w-[85%] flex-1 break-all">{api.path}</div>
      </div>
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
