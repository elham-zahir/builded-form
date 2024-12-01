import React from "react";
import TextInput from "../textInput";
import ImageUploader from "../imageUploader";
import FileUploader from "../fileUploader";
import RadioInput from "../radioInput";
import CheckboxButtons from "../checkboxButton";
import { Col, FormInstance, Row } from "antd";

interface IProps {
  form: FormInstance;
}

function BusinessData({ form }: IProps) {
  return (
    <Row gutter={[20, 24]}>
      <Col span={12}>
        <TextInput label="نام محصول" name="productName" form={form} />
      </Col>
      <Col span={12}>
        <TextInput label="شعار" name="slogan" form={form} />
      </Col>

      <Col span={12}>
        <RadioInput
          name="radio"
          label="نوع خدمات درخواستی"
          options={[
            { name: "پشتیبانی دو ماهه", value: "value1" },
            { name: "پشتیبانی 6 ماهه", value: "value2" },
          ]}
        />
      </Col>

      <Col span={12}>
        <CheckboxButtons
          name="checkbox"
          label="نوع خدمات درخواستی"
          options={[
            { name: "پشتیبانی دو ماهه", value: "value1" },
            { name: "پشتیبانی 6 ماهه", value: "value2" },
          ]}
        />
      </Col>

      <Col span={12}>
        <ImageUploader name="imageUploader" label="لوگو" />
      </Col>

      <Col span={12}>
        <FileUploader name="fileUploader" label="آپلودر فایل" />
      </Col>
    </Row>
  );
}

export default BusinessData;
