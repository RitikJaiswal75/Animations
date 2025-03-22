import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import { SPRING } from "./constants/animation";
import { APPS } from "./constants/apps";
import AppIcon from "./AppIcon";

export default function Dock() {
  const mouseLeft = useMotionValue(-Infinity);
  const mouseRight = useMotionValue(-Infinity);
  const left = useTransform(mouseLeft, [0, 40], [0, -40]);
  const right = useTransform(mouseRight, [0, 40], [0, -40]);
  const leftSpring = useSpring(left, SPRING);
  const rightSpring = useSpring(right, SPRING);

  return (
    <>
      <motion.div
        onMouseMove={(e) => {
          const { left, right } = e.currentTarget.getBoundingClientRect();
          const offsetLeft = e.clientX - left;
          const offsetRight = right - e.clientX;
          mouseLeft.set(offsetLeft);
          mouseRight.set(offsetRight);
        }}
        onMouseLeave={() => {
          mouseLeft.set(-Infinity);
          mouseRight.set(-Infinity);
        }}
        className="mx-auto hidden h-16 items-end gap-3 px-2 pb-3 sm:flex inset-x-0 w-max absolute bottom-10"
      >
        <motion.div
          className="absolute inset-y-0 dock-bg -z-10 rounded-full text-white"
          style={{ left: leftSpring, right: rightSpring }}
        />

        {Array.from(Array(APPS.length).keys()).map((i) => (
          <AppIcon key={i} mouseLeft={mouseLeft} name={APPS[i].name}>
            <i className={APPS[i].icon}></i>
          </AppIcon>
        ))}
      </motion.div>

      <div className="sm:hidden">
        <div className="mx-auto flex h-16 max-w-full items-end gap-4 overflow-x-scroll rounded-2xl bg-gray-700 px-4 pb-3 sm:hidden">
          {Array.from(Array(8).keys()).map((i) => (
            <div
              key={i}
              className="aspect-square w-10 flex-shrink-0 rounded-full bg-gray-100"
            />
          ))}
        </div>
        <p className="mt-4 text-center text-xs font-medium text-gray-300">
          View at 640px with a mouse
          <br /> to see the interaction.
        </p>
      </div>
    </>
  );
}
