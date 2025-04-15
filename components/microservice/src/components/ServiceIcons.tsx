import { allowedIcons } from "../types/serviceTypes";
import { getIcon } from "../utils/iconEngine";

const ServiceIcons = ({
  icons,
  theme,
}: {
  icons?: (typeof allowedIcons)[number][];
  theme: { border: string };
}) => {
  return (
    <>
      {icons && icons.length ? (
        <div
          className={`border-[0.5px] ${theme.border} flex gap-2 rounded-full bg-white px-2 py-0.5`}
        >
          {icons.map((icon, index) => (
            <img
              src={getIcon(icon)}
              alt={`${icon} icon`}
              key={`${icon}_${index}`}
            />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default ServiceIcons;
