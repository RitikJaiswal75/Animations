import { useEffect, useState } from "react";
import { ApiListProps } from "../types/apiListProps";
import { getApiTypeIcon } from "../utils/iconEngine";
import moreMenuIcon from "../assets/icons/dots-horizontal.svg";
import pinIcon from "../assets/icons/pin.svg";
import Tags from "./Tags";
import useStore from "./Store/store";
import ExtendedMenu from "./ExtendedMenu";

const ApiList = ({ data, index }: ApiListProps) => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showExtendedMenu, setShowExtendedMenu] = useState(false);
  const [translate, setTranslate] = useState(false);
  const { showTags } = useStore();

  useEffect(() => {
    const handleTranslate = () => setTranslate(false);
    const handleExtendedMenu = () => setShowExtendedMenu(false);
    const handleHide = () => {
      handleExtendedMenu();
      handleTranslate();
    };
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
    <div className="relative m-0 p-0">
      <div className="relative flex w-[240px] overflow-hidden rounded-sm border-1 border-slate-200 bg-slate-300 text-xs">
        <div
          className={`flex w-full flex-shrink-0 items-center justify-between bg-white px-2 py-3 transition-transform duration-300 ease-in-out ${translate ? "-translate-x-13 rounded-sm" : "translate-x-0"}`}
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
          <div
            className="relative flex w-[15%] cursor-pointer items-center justify-end rounded-xs"
            onClick={() => {
              setTranslate(!translate);
            }}
          >
            {showMoreMenu ? (
              <img
                className="rounded-xs transition-colors duration-150 ease-out hover:bg-slate-100"
                src={moreMenuIcon}
                alt="More menu icon"
              />
            ) : (
              <img src={getApiTypeIcon(data.type)} alt="" />
            )}
          </div>
        </div>
        <div
          className={`flex items-center justify-center px-0.5 transition-transform duration-300 ease-in-out ${
            translate ? "-translate-x-13" : "translate-x-0"
          }`}
        >
          <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-xs p-1 hover:bg-slate-100">
            <img src={pinIcon} alt="" className="" />
          </div>
          <div
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-xs p-1 hover:bg-slate-100"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <img
              src={moreMenuIcon}
              alt=""
              className=""
              onClick={() => setShowExtendedMenu(true)}
            />
          </div>
        </div>
      </div>
      {showExtendedMenu ? <ExtendedMenu index={index} /> : null}
    </div>
  );
};

export default ApiList;
