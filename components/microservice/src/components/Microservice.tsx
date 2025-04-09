import { apiList } from "../mocks/dummyAPIData";
import { MicroserviceProps } from "../types/microserviceprops";
import { getIcon, getServiceTypeIcon } from "../utils/iconEngine";
import { getServiceTheme } from "../utils/themeEngine";
import ApiList from "./ApiList";
import MoreApis from "./MoreApis";

const Microservice = ({
  serviceTitle,
  serviceType,
  icons,
}: MicroserviceProps) => {
  const theme = getServiceTheme(serviceType);
  return (
    <div
      className={`font-roboto-mono ${theme.border} border-1 ${theme.background} font-regular m-4 w-[255px] rounded-sm px-1.5 py-2 text-sm leading-4`}
    >
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
