import { Col, Row } from "antd";
import { ITabProps } from "../../types/types";
import React from "react";
import TextAreaInput from "../textArea";

function MoreDataTab({ form }: ITabProps) {
  return (
    <Row gutter={[20, 24]}>
      <Col span={12}>
        <TextAreaInput
          name="description"
          label="توضیحات"
          form={form}
          required={false}
        />
      </Col>
    </Row>
  );
}

export default MoreDataTab;
