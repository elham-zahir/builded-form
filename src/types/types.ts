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
  title: string;
  name: string;
  fields: IFieldType[];
  onSubmitTab: () => void;
}

export interface FormCategories {
  personFields: IFieldType[];
  jobFields: IFieldType[];
  accountFields: IFieldType[];
  othersFields: IFieldType[];
}

export interface IBaseProps {
  name: string;
  label: string;
  required: boolean;
  isEditMode?: boolean;
}

export interface IPatternProps {
  pattern?: RegExp | undefined;
  patternErrorMessage?: string | undefined;
}

export interface IMinAndMax {
  min?: number;
  max?: number;
}

export interface INumericProps extends IBaseProps, IPatternProps, IMinAndMax {
  form: FormInstance;
  onReset: boolean;
}

export interface IRadioProps extends IBaseProps, IPatternProps {
  options: IOptionType[];
}

export interface ITextProps extends IBaseProps, IPatternProps {
  form: FormInstance;
  onReset: boolean;
}

export interface ISelectProps extends IBaseProps, IPatternProps {
  form: FormInstance;
  options: IOptionType[];
  onReset: boolean;
}

export interface ITextAreaProps extends IBaseProps, IPatternProps, IMinAndMax {
  form: FormInstance;
  onReset: boolean;
}

export interface IUploaderProps extends IPatternProps {
  name: string;
  label: string;
  max?: number;
  required: boolean;
}

export interface IDatePickerType extends IBaseProps {
  form: FormInstance;
  required: boolean;
  onReset: boolean;
  isEditMode?: boolean;
}

export interface IFieldType extends IPatternProps, IMinAndMax {
  label: string;
  name: string;
  type: IOptionType;
  options: IOptionType[] | undefined;
  required: boolean;
  id: number;
  category: TCategory;
}
