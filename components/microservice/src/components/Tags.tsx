import { TagProps } from "../types/tagProps";
import Triangle from "./icons/Triangle";
import Qpm from "./icons/Qpm";
import Qps from "./icons/Qps";

const Tags = ({ tagData }: TagProps) => {
  return (
    <div className="flex flex-col gap-1">
      {tagData.slice(0, 2).map((tag, index) => (
        <div
          key={index}
          className="text-tertiary flex h-4 items-center justify-center gap-0.5 rounded-xs bg-slate-100 py-0.5 pl-1 text-xs"
        >
          <div className="flex items-center justify-center gap-0.5 whitespace-nowrap">
            24
            <div className="m-0 flex h-3 w-3 items-center justify-center">
              {(index + 1) % 2 === 0 ? <Qpm /> : <Qps />}
            </div>
          </div>
          <div
            className={`${
              Number(tag) > 0.4 ? "bg-red-100 text-red-400" : "text-slate-400"
            } flex items-center justify-center gap-0.5 pr-1 whitespace-nowrap`}
          >
            <div className="h-3 w-3">
              <Triangle />
            </div>
            <div>{tag}%</div>
          </div>
        </div>
      ))}
      {tagData.length > 2 && (
        <div className="relative rounded-xs bg-slate-300 px-1 py-0.5 text-center text-slate-700">
          <div className="absolute top-[30%] -left-1 h-2 w-2 rounded-full bg-slate-500"></div>
          {tagData.length - 2} more
        </div>
      )}
    </div>
  );
};

export default Tags;
