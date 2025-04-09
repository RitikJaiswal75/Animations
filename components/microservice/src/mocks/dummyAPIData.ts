import { allowedRequestTypes } from "../types/serviceTypes";

type DummyData = {
  type: (typeof allowedRequestTypes)[number];
  path: string;
  pinned: boolean;
};

export const apiList: DummyData[] = [
  {
    type: "GET",
    path: "/insights/theatre/test/ritik-jaiswal/test/ritik-jaiswal/",
    pinned: false,
  },
  {
    type: "POST",
    path: "/user/login",
    pinned: true,
  },
  {
    type: "GET",
    path: "/user/profile",
    pinned: false,
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
