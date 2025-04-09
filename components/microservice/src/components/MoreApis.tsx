import { useState } from "react";
import { apiList } from "../mocks/dummyAPIData";
import SearchApi from "./SearchApi";

const MoreApis = () => {
  const [showMore, setShowMore] = useState(false);
  if (showMore) return <SearchApi setShowMore={setShowMore} />;
  return (
    <div>
      <div className="bg-show-more border-1 flex items-center justify-between rounded-sm border-dashed border-slate-500 px-2 py-2 text-xs font-medium">
        <div>{apiList.slice(3).length} more APIs</div>
        <button
          className="text-queue cursor-pointer"
          onClick={() => setShowMore((prev) => !prev)}
        >
          + Show More
        </button>
      </div>
    </div>
  );
};

export default MoreApis;
