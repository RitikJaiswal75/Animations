import { allowedIcons, allowedServiceTypes } from "./serviceTypes";

export type MicroserviceProps = {
  serviceTitle: string;
  serviceType: (typeof allowedServiceTypes)[number];
  icons?: (typeof allowedIcons)[number][];
};
