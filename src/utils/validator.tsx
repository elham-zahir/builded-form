import { Col, FormInstance } from "antd";
import TextInput from "../components/textInput";
import { IFieldType } from "../types/types";
import EmailInput from "../components/emailInput";
import PhoneNumberInput from "../components/phoneNumberInput";
import NumberInput from "../components/numberInput";
import SelectionInput from "../components/selectionInput";
import NationalCodeInput from "../components/nationalCodeInput";
import RadioInput from "../components/radioInput";
import CheckboxButtons from "../components/checkboxButton";
import ImageUploader from "../components/imageUploader";
import FileUploader from "../components/fileUploader";
import PasswordInput from "../components/passwordInput";
import TextAreaInput from "../components/textArea";
import UrlInput from "../components/UrlInput";
import PersianCalendar from "../components/datePicker";

export const minValidation = (num: number): string => {
  return `مقدار کاراکتر ها نمی تواند از  ${num} کمتر باشد.`;
};

export const maxValidation = (num: number): string => {
  return `مقدار کاراکتر ها نمی تواند از  ${num} بیشتر باشد.`;
};

export const requiredValidation = (): string => {
  return "این فیلد الزامی است.";
};

export const fieldType = (
  item: IFieldType,
  form: FormInstance<any>,
  resetClicked: boolean
) => {
  switch (item.type.value) {
    case "text":
      return (
        <TextInput
          label={item.label}
          name={item.name}
          key={item.name}
          form={form}
          required={item.required}
          pattern={item.pattern}
          patternErrorMessage={item.patternErrorMessage}
          min={item.min}
          max={item.max}
          onReset={resetClicked}
        />
      );

    case "textarea":
      return (
        <TextAreaInput
          label={item.label}
          name={item.name}
          key={item.name}
          form={form}
          required={item.required}
          pattern={item.pattern}
          patternErrorMessage={item.patternErrorMessage}
          max={item.max}
          onReset={resetClicked}
        />
      );

    case "number":
      return (
        <NumberInput
          label={item.label}
          name={item.name}
          key={item.name}
          form={form}
          required={item.required}
          min={item.min}
          max={item.max}
          onReset={resetClicked}
        />
      );

    case "email":
      return (
        <EmailInput
          label={item.label}
          name={item.name}
          key={item.name}
          form={form}
          required={item.required}
          pattern={item.pattern}
          patternErrorMessage={item.patternErrorMessage}
          onReset={resetClicked}
        />
      );

    case "imageUploader":
      return (
        <ImageUploader
          label={item.label}
          name={item.name}
          key={item.name}
          required={item.required}
          pattern={item.pattern}
          patternErrorMessage={item.patternErrorMessage}
          max={item.max}
        />
      );

    case "fileUploader":
      return (
        <FileUploader
          label={item.label}
          name={item.name}
          key={item.name}
          required={item.required}
          max={item.max}
          pattern={item.pattern}
          patternErrorMessage={item.patternErrorMessage}
        />
      );

    case "tel":
      return (
        <PhoneNumberInput
          label={item.label}
          name={item.name}
          key={item.name}
          form={form}
          required={item.required}
          pattern={item.pattern}
          patternErrorMessage={item.patternErrorMessage}
          onReset={resetClicked}
        />
      );

    case "checkbox":
      return (
        <CheckboxButtons
          label={item.label}
          name={item.name}
          key={item.name}
          options={item.options}
          required={item.required}
        />
      );

    case "radio":
      return (
        <RadioInput
          label={item.label}
          name={item.name}
          key={item.name}
          options={item.options}
          required={item.required}
        />
      );

    case "select":
      return (
        <SelectionInput
          label={item.label}
          name={item.name}
          key={item.name}
          options={item.options}
          form={form}
          required={item.required}
          onReset={resetClicked}
        />
      );

    case "password":
      return (
        <PasswordInput
          label={item.label}
          name={item.name}
          key={item.name}
          form={form}
          required={item.required}
          min={item.min}
          max={item.max}
          pattern={item.pattern}
          patternErrorMessage={item.patternErrorMessage}
          onReset={resetClicked}
        />
      );

    case "nationalCode":
      return (
        <NationalCodeInput
          label={item.label}
          name={item.name}
          key={item.name}
          form={form}
          required={item.required}
          pattern={item.pattern}
          patternErrorMessage={item.patternErrorMessage}
          onReset={resetClicked}
        />
      );

    case "url":
      return (
        <UrlInput
          label={item.label}
          name={item.name}
          key={item.name}
          form={form}
          required={item.required}
          pattern={item.pattern}
          patternErrorMessage={item.patternErrorMessage}
          min={item.min}
          max={item.max}
          onReset={resetClicked}
        />
      );

    case "search":
      <>werwer</>;
      break;

    case "date":
      return (
        <PersianCalendar
          form={form}
          label={item.label}
          name={item.name}
          onReset={resetClicked}
          required={item.required}
        />
      );

    default:
      break;
  }
};
