import TextInput from "../textInput";
import ImageUploader from "../imageUploader";
import FileUploader from "../fileUploader";
import RadioInput from "../radioInput";
import CheckboxButtons from "../checkboxButton";
import { Col, Row } from "antd";
import { ITabProps } from "../../types/types";

function BusinessData({ form }: ITabProps) {
  return (
    <Row gutter={[20, 24]}>
      <Col span={12}>
        <TextInput
          label="نام محصول"
          name="productName"
          form={form}
          required={true}
        />
      </Col>
      <Col span={12}>
        <TextInput label="شعار" name="slogan" form={form} required={false} />
      </Col>

      <Col span={12}>
        <RadioInput
          name="radio"
          label="نوع خدمات درخواستی"
          options={[
            { name: "پشتیبانی دو ماهه", value: "value1" },
            { name: "پشتیبانی 6 ماهه", value: "value2" },
          ]}
          required={true}
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
          required={true}
        />
      </Col>

      <Col span={12}>
        <ImageUploader name="imageUploader" label="لوگو" required={true} />
      </Col>

      <Col span={12}>
        <FileUploader name="fileUploader" label="آپلودر فایل" required={true} />
      </Col>
    </Row>
  );
}

export default BusinessData;
