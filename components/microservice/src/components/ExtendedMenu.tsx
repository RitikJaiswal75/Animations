import Triangle from "./icons/Triangle";
import PinIcon from "./icons/Pin";
import Remove from "./icons/Remove";
import useStore from "./Store/store";
import Copy from "./icons/Copy";

const ExtendedMenu = ({ index }: { index: number }) => {
  const { setApiList, apiList } = useStore();
  return (
    <div className="absolute inset-y-0 -right-20 flex items-center justify-center">
      <div className="relative flex items-center justify-center gap-1 rounded-xs bg-white p-1">
        <div className="absolute -left-[9.5px] rotate-90 text-white">
          <Triangle />
        </div>
        <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-xs p-1 hover:bg-slate-100">
          <PinIcon />
        </div>
        <div
          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-xs p-1 hover:bg-slate-100"
          onClick={() => {
            console.log("I am clicked");
            setApiList([
              ...apiList.slice(0, index),
              ...apiList.slice(index + 1),
              apiList[index],
            ]);
          }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <Remove />
        </div>
        <div
          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-xs p-1 hover:bg-slate-100"
          onClick={() => {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard
                .writeText(apiList[index].path)
                .catch((err) => {
                  console.error("Failed to copy path to clipboard:", err);
                })
                .finally(() => {
                  const mouseDownEvent = new MouseEvent("mousedown", {
                    bubbles: true,
                    cancelable: true,
                    view: window,
                  });
                  document.dispatchEvent(mouseDownEvent);
                });
            } else {
              try {
                const textArea = document.createElement("textarea");
                textArea.value = apiList[index].path;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                document.body.removeChild(textArea);
              } catch (err) {
                console.error(
                  "Fallback: Failed to copy path to clipboard:",
                  err,
                );
              } finally {
                const mouseDownEvent = new MouseEvent("mousedown", {
                  bubbles: true,
                  cancelable: true,
                  view: window,
                });
                document.dispatchEvent(mouseDownEvent);
              }
            }
          }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <Copy />
        </div>
      </div>
    </div>
  );
};

export default ExtendedMenu;
