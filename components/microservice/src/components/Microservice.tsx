import { MicroserviceProps } from "../types/microserviceprops";
import { getServiceTypeIcon } from "../utils/iconEngine";
import minimizeIcon from "../assets/icons/minimize.svg";
import { getServiceTheme } from "../utils/themeEngine";
import ApiList from "./ApiList";
import MoreApis from "./MoreApis";
import useStore from "./Store/store";
import ServiceIcons from "./ServiceIcons";

const Microservice = ({
  serviceTitle,
  serviceType,
  icons,
}: MicroserviceProps) => {
  const theme = getServiceTheme(serviceType);
  const { apiList } = useStore();
  return (
    <div
      className={`font-roboto-mono relative ${theme.border} border-1 ${theme.background} font-regular m-4 w-[255px] rounded-sm px-1.5 py-2 text-sm leading-4`}
    >
      <div className="absolute top-0 -right-7 flex h-6 w-6 cursor-pointer items-center justify-center rounded-xs bg-white p-1 transition-all duration-300 ease-in-out hover:p-0">
        <img src={minimizeIcon} alt="minimize" />
      </div>
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center justify-center gap-0.5">
          <img
            className="m-0 h-4 w-4"
            src={getServiceTypeIcon(serviceType)}
            alt="service-type"
          />
          <div className={`${theme?.text} -mt-[2px] line-clamp-2`}>
            {serviceTitle}
          </div>
        </div>
        <ServiceIcons icons={icons} theme={theme} />
      </div>
      <div className="flex flex-col gap-1">
        {apiList.slice(0, 3).map((api, index) => (
          <ApiList key={`${api.path}_${index}`} data={api} />
        ))}
        {apiList.length > 3 ? <MoreApis /> : null}
      </div>
    </div>
  );
};

export default Microservice;
