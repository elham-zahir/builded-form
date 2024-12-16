import { Col, Row } from "antd";
import { ITabProps } from "../../types/types";
import React from "react";
import { fieldType } from "../../utils/validator";

function BusinessData({ form, fields }: ITabProps) {
  return (
    <Row gutter={[20, 24]}>
      {fields.map((item) => {
        return <Col span={12}>{fieldType(item, form)}</Col>;
      })}
    </Row>
  );
}

export default BusinessData;
