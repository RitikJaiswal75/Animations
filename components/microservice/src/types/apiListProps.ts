import { apiList } from "../mocks/dummyAPIData";

export type ApiListProps = {
  data: (typeof apiList)[number];
  index: number;
};
