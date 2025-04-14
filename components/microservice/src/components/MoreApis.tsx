import { useState } from "react";
import SearchApi from "./SearchApi";
import useStore from "./Store/store";

const MoreApis = () => {
  const [showMore, setShowMore] = useState(false);
  const { apiList } = useStore();
  if (showMore) return <SearchApi setShowMore={setShowMore} />;
  return (
    <div>
      <div
        className="bg-show-more font-regular flex cursor-pointer items-center justify-between rounded-sm border-1 border-dashed border-slate-200 px-2 py-2 text-xs [stroke-dasharray:6,20]"
        onClick={() => setShowMore((prev) => !prev)}
      >
        <div>{apiList.slice(3).length} more APIs</div>
        <button className="text-queue">+ Show More</button>
      </div>
    </div>
  );
};

export default MoreApis;
