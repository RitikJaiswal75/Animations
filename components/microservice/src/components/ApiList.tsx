import { useState } from "react";
import { ApiListProps } from "../types/apiListProps";
import { getApiTypeIcon } from "../utils/iconEngine";
import moreMenuIcon from "../assets/icons/dots-horizontal.svg";

const ApiList = ({ data }: ApiListProps) => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  return (
    <div
      className="border-1 relative flex w-full items-center justify-between rounded-sm border-slate-400 bg-white px-2 py-3 text-xs"
      onMouseEnter={() => setShowMoreMenu(true)}
      onMouseLeave={() => setShowMoreMenu(false)}
    >
      <div className="line-clamp-2 w-[85%] break-all">{data.path}</div>
      <div className="flex h-4 w-[15%] flex-col items-end justify-center overflow-hidden">
        <img
          className="ease-out-quad absolute h-4 w-4 cursor-pointer rounded-sm bg-slate-100 px-1 transition-opacity duration-300"
          style={{ opacity: showMoreMenu ? 1 : 0 }}
          src={moreMenuIcon}
        />

        <img
          className="ease-out-quad absolute cursor-pointer transition-opacity duration-300"
          style={{ opacity: showMoreMenu ? 0 : 1 }}
          src={getApiTypeIcon(data.type)}
        />
      </div>
    </div>
  );
};

export default ApiList;
