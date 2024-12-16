import { FormInstance } from "antd";
import { ReactNode } from "react";

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
  uploader,
  textArea,
  checkbox,
  radio,
  select,
  phoneNumber,
  url,
  range,
  search,
}

export type TTypeOfInput = keyof typeof ETypeOfInput;

enum ECategory {
  person,
  job,
  account,
  others,
}

export type TCategory = keyof typeof ECategory;

export interface IOptionType {
  name: string | ReactNode;
  value: string | boolean;
}

export interface ITabProps {
  form: FormInstance;
  fields: IFieldType[];
}

export interface INumericProps {
  name: string;
  label: string;
  min?: number;
  max?: number;
  form: FormInstance;
  required: boolean;
  pattern?: RegExp | undefined;
  patternErrorMessage?: string | undefined;
  isEditMode?: boolean;
}

export interface IRadioProps {
  name: string;
  label: string;
  options: IOptionType[];
  required: boolean;
  pattern?: RegExp | undefined;
  patternErrorMessage?: string | undefined;
  isEditMode?: boolean;
}

export interface ITextProps {
  label: string;
  name: string;
  form: FormInstance;
  required: boolean;
  pattern?: RegExp | undefined;
  patternErrorMessage?: string | undefined;
  isEditMode?: boolean;
}

export interface ISelectProps {
  label: string;
  name: string;
  form: FormInstance;
  required: boolean;
  options: IOptionType[];
  pattern?: RegExp | undefined;
  patternErrorMessage?: string | undefined;
  isEditMode?: boolean;
}

export interface ITextAreaProps {
  label: string;
  name: string;
  form: FormInstance;
  required: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp | undefined;
  patternErrorMessage?: string | undefined;
}

export interface IUploaderProps {
  name: string;
  label: string;
  max?: number;
  required: boolean;
  pattern?: RegExp | undefined;
  patternErrorMessage?: string | undefined;
}

export interface IFieldType {
  label: string;
  name: string;
  type: IOptionType;
  min: number;
  max: number;
  options: IOptionType[] | undefined;
  required: boolean;
  pattern: RegExp | undefined;
  patternErrorMessage?: string | undefined;
  id: number;
  category: TCategory;
}

export interface FormCategories {
  personFields: IFieldType[];
  jobFields: IFieldType[];
  accountFields: IFieldType[];
  othersFields: IFieldType[];
}
