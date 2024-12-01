import React from "react";
import TextInput from "../textInput";
import ImageUploader from "../imageUploader";
import FileUploader from "../fileUploader";
import RadioInput from "../radioInput";
import CheckboxButtons from "../checkboxButton";

function BusinessData() {
  return (
    <>
      <TextInput label="نام محصول" name="productName" />
      <TextInput label="شعار" name="slogan" />

      <ImageUploader name="imageUploader" label="لوگو" />

      <FileUploader name="fileUploader" label="آپلودر فایل" />

      <RadioInput
        name="radio"
        label="نوع خدمات درخواستی"
        options={[
          { name: "پشتیبانی دو ماهه", value: "value1" },
          { name: "پشتیبانی 6 ماهه", value: "value2" },
        ]}
      />

      <CheckboxButtons
        name="checkbox"
        label="نوع خدمات درخواستی"
        options={[
          { name: "پشتیبانی دو ماهه", value: "value1" },
          { name: "پشتیبانی 6 ماهه", value: "value2" },
        ]}
      />
    </>
  );
}

export default BusinessData;
