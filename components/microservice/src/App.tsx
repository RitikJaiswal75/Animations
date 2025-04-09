import { useState } from "react";
import Microservice from "./components/Microservice";
import { allowedServiceTypes } from "./types/serviceTypes";

function App() {
  const [serviceType, setServiceType] =
    useState<(typeof allowedServiceTypes)[number]>("lambda");
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <select
          value={serviceType}
          onChange={(e) =>
            setServiceType(
              e.target.value as (typeof allowedServiceTypes)[number],
            )
          }
        >
          {allowedServiceTypes.map((type, index) => (
            <option key={index} value={type}>
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
