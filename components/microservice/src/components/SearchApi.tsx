import { useEffect, useRef } from "react";
import { apiList } from "../mocks/dummyAPIData";
import { SearchApiProps } from "../types/searchApiProps";
import SearchResult from "./SearchResult";

const SearchApi = ({ setShowMore }: SearchApiProps) => {
  const containerRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleHide = () => setShowMore(false);
    containerRef.current?.focus();
    window.addEventListener("mousedown", handleHide);
    window.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === "escape") {
        handleHide();
      }
    });
    return () => {
      window.removeEventListener("mousedown", handleHide);
      window.removeEventListener("keydown", handleHide);
    };
  }, []);
  return (
    <div className="flex flex-col gap-1 rounded-sm border-[0.5px] border-slate-300 p-0 text-xs">
      <input
        ref={containerRef}
        type="text"
        placeholder="Search for PIN APIs"
        className="border-outline-search-green caret-outline-search-green rounded-sm border-[0.5px] p-2 outline-0"
        onKeyDown={(e) => {
          if (e.key.toLowerCase() === "escape") {
            setShowMore(false);
          }
        }}
        onMouseDown={(e) => e.stopPropagation()}
      />
      <div
        className="ease-out-quad overflow-hidden transition-all duration-200"
        onMouseDown={(e) => e.stopPropagation()}
        style={{ height: 0 }}
        ref={(el) => {
          if (el) {
            requestAnimationFrame(() => {
              el.style.height = `${el.scrollHeight}px`;
            });
          }
        }}
      >
        {apiList.slice(3).map((api, index) => (
          <SearchResult api={api} index={index} key={`${api.path}-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default SearchApi;
