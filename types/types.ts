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
