import { useRef, useState } from "react";
import { ApiListProps } from "../types/apiListProps";
import { getApiTypeIcon } from "../utils/iconEngine";
import moreMenuIcon from "../assets/icons/dots-horizontal.svg";
import Tags from "./Tags";
import useStore from "./Store/store";

const ApiList = ({ data }: ApiListProps) => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [translate, setTranslate] = useState(false);
  const { showTags } = useStore();
  const container = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex w-[240px] overflow-hidden rounded-sm border-1 border-slate-200 bg-slate-300 text-xs">
      <div
        ref={container}
        className={`flex w-full flex-shrink-0 items-center justify-between rounded-sm bg-white px-2 py-3 transition-transform duration-300 ease-in-out ${translate ? "-translate-x-10" : "translate-x-0"}`}
        onMouseEnter={() => setShowMoreMenu(true)}
        onMouseLeave={() => setShowMoreMenu(false)}
      >
        <div className="flex w-[85%] items-center gap-2">
          {showTags ? (
            <div className="flex-shrink-0">
              <Tags tagData={data.tags || []} />
            </div>
          ) : null}
          <div className="line-clamp-2 flex-1 break-all">{data.path}</div>
        </div>
        <div className="relative flex w-[15%] items-center justify-end">
          {showMoreMenu ? (
            <img
              className="rounded-xs hover:bg-slate-200"
              src={moreMenuIcon}
              alt="More menu icon"
              onClick={() => {
                setTranslate(!translate);
              }}
            />
          ) : (
            <img className="" src={getApiTypeIcon(data.type)} alt="" />
          )}
        </div>
      </div>
      <div
        className={`flex items-center justify-center px-1 transition-transform duration-300 ease-in-out ${
          translate ? "-translate-x-10" : "translate-x-0"
        }`}
      >
        Hello
      </div>
    </div>
  );
};

export default ApiList;
