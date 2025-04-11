import { TagProps } from "../types/tagProps";
import qpsIcon from "../assets/icons/qps.svg";
import Triangle from "./icons/Triangle";

const Tags = ({ tagData }: TagProps) => {
  return (
    <div className="flex flex-col gap-1">
      {tagData.slice(0, 2).map((tag, index) => (
        <div
          key={index}
          className="flex h-4 items-center justify-center gap-0.5 bg-slate-100 py-0.5 pl-1 text-xs text-slate-600"
        >
          <div className="flex items-center justify-center gap-0.5 whitespace-nowrap">
            24 <img src={qpsIcon} alt="" className="inline-block" />
          </div>
          <div
            className={`${
              Number(tag) > 0.4 ? "bg-red-100 text-red-400" : "text-slate-400"
            } flex items-center justify-center gap-0.5 pr-1 whitespace-nowrap`}
          >
            <Triangle />
            <div>{tag}%</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tags;
