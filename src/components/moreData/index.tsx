import { Col, Row } from "antd";
import { ITabProps } from "../../types/types";
import React from "react";
import TextAreaInput from "../textArea";
import { fieldType } from "../../utils/validator";

function MoreDataTab({ form, fields }: ITabProps) {
  return (
    <Row gutter={[20, 24]}>
      {fields.map((item) => {
        return <Col span={12}>{fieldType(item, form)}</Col>;
      })}
      {/* <Col span={12}>
        <TextAreaInput
          name="description"
          label="توضیحات"
          form={form}
          required={false}
        />
      </Col> */}
    </Row>
  );
}

export default MoreDataTab;
