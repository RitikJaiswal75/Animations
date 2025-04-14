import { useState } from "react";
import addIcon from "../assets/icons/plus-circle.svg";
import { getApiTypeIcon } from "../utils/iconEngine";
import { SearchResultProps } from "../types/searchResultProps";
import useStore from "./Store/store";
import Qps from "./icons/Qps";

const SearchResult = ({ api, index }: SearchResultProps) => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const { showTags, apiList, setApiList } = useStore();
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
            className="flex flex-shrink-0 items-center justify-center gap-0.5 rounded-xs bg-slate-100 px-1 whitespace-nowrap transition-colors duration-150"
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
            24
            <div className="flex h-3 w-3 items-center justify-center">
              <Qps />
            </div>
          </div>
        ) : null}
        <div className="line-clamp-2 w-[85%] flex-1 break-all">{api.path}</div>
      </div>
      <div className="flex h-4 w-[15%] flex-col items-end justify-center overflow-hidden">
        {showMoreMenu ? (
          <img
            className="h-6 w-6 cursor-pointer rounded-sm px-1"
            src={addIcon}
            onClick={() => {
              const newApiList = apiList;
              const temp = newApiList[index];
              newApiList[index] = newApiList[2];
              newApiList[2] = temp;
              setApiList(newApiList);
            }}
          />
        ) : (
          <img className="cursor-pointer" src={getApiTypeIcon(api.type)} />
        )}
      </div>
    </div>
  );
};

export default SearchResult;
