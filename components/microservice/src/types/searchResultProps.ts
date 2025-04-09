import { apiList } from "../mocks/dummyAPIData";

export type SearchResultProps = {
  api: (typeof apiList)[number];
  index: number;
};
