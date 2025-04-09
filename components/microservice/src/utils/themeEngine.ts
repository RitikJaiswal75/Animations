import { allowedServiceTypes } from "../types/serviceTypes";

export const getServiceTheme = (
  serviceType: (typeof allowedServiceTypes)[number],
) => {
  switch (serviceType) {
    case "microservice":
      return {
        border: "border-outline-microservice",
        background: "bg-custom-microservice",
        text: "text-microservice",
      };
    case "database":
      return {
        border: "border-outline-database",
        background: "bg-custom-database",
        text: "text-database",
      };
    case "queue":
      return {
        border: "border-outline-queue",
        background: "bg-custom-queue",
        text: "text-queue",
      };
    case "external":
      return {
        border: "border-outline-external",
        background: "bg-custom-external",
        text: "text-external",
      };
    case "frontend":
      return {
        border: "border-outline-frontend",
        background: "bg-custom-frontend",
        text: "text-frontend",
      };
    case "lambda":
      return {
        border: "border-outline-lambda",
        background: "bg-custom-lambda",
        text: "text-lambda",
      };
    default:
      return {
        border: "border-microservice",
        background: "bg-custom-microservice",
        text: "text-microservice",
      };
  }
};
