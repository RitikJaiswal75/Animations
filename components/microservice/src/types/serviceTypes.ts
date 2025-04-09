export const allowedServiceTypes = [
  "microservice",
  "database",
  "queue",
  "external",
  "frontend",
  "lambda",
] as const;

export const allowedIcons = ["redis", "sql"] as const;

export const allowedRequestTypes = ["GET", "POST"] as const;
