import { useState } from "react";
import Microservice from "./components/Microservice";
import { allowedServiceTypes } from "./types/serviceTypes";
import useStore from "./components/Store/store";

function App() {
  const [serviceType, setServiceType] =
    useState<(typeof allowedServiceTypes)[number]>("lambda");
  const { showTags, setShowTags } = useStore();
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center text-white">
        <div>
          <input
            type="checkbox"
            name="showtags"
            checked={showTags}
            onChange={() => setShowTags(!showTags)}
            id="showTags"
          />
          <label htmlFor="showTags">Show tags</label>
        </div>
        <select
          value={serviceType}
          onChange={(e) =>
            setServiceType(
              e.target.value as (typeof allowedServiceTypes)[number],
            )
          }
        >
          {allowedServiceTypes.map((type, index) => (
            <option key={index} value={type} className="text-black">
              {type}
            </option>
          ))}
        </select>
      </div>
      <Microservice
        serviceTitle="cms-base-service"
        serviceType={serviceType}
        icons={["redis", "sql", "redis"]}
      />
    </div>
  );
}

export default App;
