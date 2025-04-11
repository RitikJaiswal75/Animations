import { allowedRequestTypes } from "../types/serviceTypes";

type DummyData = {
  type: (typeof allowedRequestTypes)[number];
  path: string;
  pinned: boolean;
  tags?: string[];
};

export const apiList: DummyData[] = [
  {
    type: "GET",
    path: "/insights/theatre/test/ritik-jaiswal/test/ritik-jaiswal/",
    pinned: false,
    tags: ["0.1", "0.5"],
  },
  {
    type: "POST",
    path: "/user/login",
    pinned: true,
    tags: ["0.1", "0.5"],
  },
  {
    type: "GET",
    path: "/user/profile",
    pinned: false,
    tags: ["0.1", "0.5", "0.1", "0.5", "0.1", "0.5"],
  },
  {
    type: "GET",
    path: "/user/account",
    pinned: true,
  },
  {
    type: "GET",
    path: "/products/list",
    pinned: false,
  },
  {
    type: "POST",
    path: "/order/update",
    pinned: true,
  },
];
