import { FormInstance } from "antd";

enum EInputType {
  firstName,
  lastName,
  password,
  email,
  phoneNumber,
  nationalCode,
  age,
  gender,
  dateOfBirth,
  description,
  productName,
  image,
  pdf,
  video,
  checkbox,
  radio,
}

export type TInputType = keyof typeof EInputType;

enum ETypeOfInput {
  password,
  email,
  text,
  number,
  date,
}

export type TTypeOfInput = keyof typeof ETypeOfInput;

export interface IOptionType {
  name: string;
  value: string;
}

export interface ITabProps {
  form: FormInstance;
}

export interface INumericProps {
  name: string;
  label: string;
  min?: number;
  max?: number;
  form: FormInstance;
  required: boolean;
}

export interface IRadioProps {
  name: string;
  label: string;
  options: IOptionType[];
  required: boolean;
}

export interface ITextProps {
  label: string;
  name: string;
  form: FormInstance;
  required: boolean;
}

export interface IUploaderProps {
  name: string;
  label: string;
  max?: number;
  required: boolean;
}
