import { useRef, useState } from "react";
import { ApiListProps } from "../types/apiListProps";
import { getApiTypeIcon } from "../utils/iconEngine";
import moreMenuIcon from "../assets/icons/dots-horizontal.svg";
import Tags from "./Tags";

const ApiList = ({ data }: ApiListProps) => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex w-[240px] overflow-hidden rounded-sm border-1 border-slate-200 text-xs">
      <div
        ref={container}
        // ${translate ? "-translate-x-10" : "translate-x-0"}
        className={`flex w-full items-center justify-between rounded-sm bg-white px-2 py-3`}
        onMouseEnter={() => setShowMoreMenu(true)}
        onMouseLeave={() => setShowMoreMenu(false)}
      >
        <div className="flex w-[85%] gap-2">
          <div className="flex-shrink-0">
            <Tags tagData={data.tags || []} />
          </div>
          <div className="line-clamp-2 flex-1 break-all">{data.path}</div>
        </div>
        <div className="relative flex w-[15%] items-center justify-end">
          {showMoreMenu ? (
            <img
              className="rounded-xs hover:bg-slate-200"
              src={moreMenuIcon}
              alt="More menu icon"
            />
          ) : (
            <img className="" src={getApiTypeIcon(data.type)} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiList;
