import { TTypeOfInput } from "./types";

export interface IFirstNameType {
  title: string;
  name: string;
  type: TTypeOfInput;
  validator: () => void;
  min: number;
  max: number;
  onClick?: () => {};
  onBlur?: () => void;
  tabIndex: number;
  required: boolean;
}
