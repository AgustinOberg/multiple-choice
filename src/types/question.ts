import { Option } from "./option";

export type Question = {
  question: string;
  options: Array<Option>;
  order: number;
  id: number;
};
