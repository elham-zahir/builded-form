import React from "react";
import TextInput from "../textInput";
import { Col, FormInstance, Row } from "antd";

interface IProps {
  form: FormInstance;
}

function MoreDataTab({ form }: IProps) {
  return (
    <Row gutter={[20, 24]}>
      <Col span={12}>
        <TextInput label="نام" name="firstName" form={form} />
      </Col>
      <Col span={12}>
        <TextInput label="نام خانوادگی" name="lastName" form={form} />
      </Col>
    </Row>
  );
}

export default MoreDataTab;
