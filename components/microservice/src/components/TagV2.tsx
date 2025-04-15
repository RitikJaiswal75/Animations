import Qps from "./icons/Qps";

const TagV2 = ({ showMoreMenu }: { showMoreMenu: boolean }) => {
  return (
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
  );
};

export default TagV2;
