import { IFieldType, IOptionType } from "./types";

export const inputTypes: IOptionType[] = [
  { name: "متن کوتاه", value: "text" },
  { name: "متن طولانی", value: "textarea" },
  { name: "عدد", value: "number" },
  { name: "ایمیل", value: "email" },
  { name: "آپلودر عکس", value: "imageUploader" },
  { name: "آپلودر فایل", value: "fileUploader" },
  { name: "شماره تلفن", value: "number" },
  { name: "چند گزینه ای چند انتخابی", value: "checkbox" },
  { name: "چند گزینه ای تک انتخابی", value: "radio" },
  { name: "سلکشن", value: "select" },
  { name: "URL", value: "url" },
  { name: "تقویم", value: "date" },
  { name: "سرچ", value: "search" },
  { name: "پسورد", value: "password" },
];

export const initialFields: IFieldType[] = [
  {
    label: "نام",
    name: "name",
    type: { name: "متن کوتاه", value: "text" },
    required: false,
    min: 2,
    max: 10,
  },
  {
    label: "نام خانوادگی",
    name: "familyName",
    type: { name: "متن کوتاه", value: "text" },
    required: false,
    min: 2,
    max: 10,
  },
  {
    label: "ایمیل",
    name: "email",
    type: { name: "ایمیل", value: "email" },
    required: false,
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
  },
];
