import {
  allowedIcons,
  allowedRequestTypes,
  allowedServiceTypes,
} from "../types/serviceTypes";
import redisIcon from "../assets/icons/redis-colour.svg";
import sqlIcon from "../assets/icons/mySQL.svg";
import microserviceIcon from "../assets/icons/serviceType/microservice.svg";
import queueIcon from "../assets/icons/serviceType/queue.svg";
import databaseIcon from "../assets/icons/serviceType/database.svg";
import externalIcon from "../assets/icons/serviceType/web-outline.svg";
import frontendIcon from "../assets/icons/serviceType/mobile.svg";
import lambdaIcon from "../assets/icons/serviceType/lambda.svg";
import getRequestIcon from "../assets/icons/requestType/get.svg";
import postRequestIcon from "../assets/icons/requestType/post.svg";

export const getIcon = (iconType: (typeof allowedIcons)[number]) => {
  switch (iconType) {
    case "redis":
      return redisIcon;
    case "sql":
      return sqlIcon;
    default:
      return sqlIcon;
  }
};

export const getServiceTypeIcon = (
  serviceType: (typeof allowedServiceTypes)[number],
) => {
  switch (serviceType) {
    case "microservice":
      return microserviceIcon;
    case "queue":
      return queueIcon;
    case "database":
      return databaseIcon;
    case "external":
      return externalIcon;
    case "frontend":
      return frontendIcon;
    case "lambda":
      return lambdaIcon;
    default:
      return microserviceIcon;
  }
};

export const getApiTypeIcon = (
  requestType: (typeof allowedRequestTypes)[number],
) => {
  switch (requestType) {
    case "GET":
      return getRequestIcon;
    case "POST":
      return postRequestIcon;
    default:
      return getRequestIcon;
  }
};
